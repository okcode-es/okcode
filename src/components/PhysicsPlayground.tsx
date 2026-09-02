"use client";

import React, { useEffect, useRef, useState } from "react";
import type { PhysicsPlaygroundData, PhysicsItem } from "@/content/site-content";

interface PhysicsPlaygroundProps {
  data: PhysicsPlaygroundData;
  heroImage?: string;
}

interface PhysicsBody {
  id: string;
  item: PhysicsItem;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  radius: number;
  isCircle: boolean;
  angle: number;
  angularVelocity: number;
  isDragging: boolean;
}

export default function PhysicsPlayground({ data, heroImage = "/images/hero.webp" }: PhysicsPlaygroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Handle High-DPI screens
    const updateCanvasSize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();

    // Initialize Physics Bodies
    const bodies: PhysicsBody[] = data.items.map((item, index) => {
      const isCircle = item.type === "badge";
      const w = isCircle ? 52 : Math.max(item.label.length * 10 + 34, 130);
      const h = isCircle ? 52 : 38;
      const x = (width * 0.2) + ((index * 45) % Math.max(width * 0.6, 120));
      const y = -60 - (index * 70);
      return {
        id: item.id,
        item,
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 2 + 1,
        width: w,
        height: h,
        radius: isCircle ? 26 : 19,
        isCircle,
        angle: (Math.random() - 0.5) * 0.3,
        angularVelocity: (Math.random() - 0.5) * 0.05,
        isDragging: false,
      };
    });

    // Physics constants
    const gravity = 0.38;
    const bounce = 0.65;
    const friction = 0.985;
    const groundFriction = 0.94;

    // Drag tracking
    let draggedBody: PhysicsBody | null = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let pointerVx = 0;
    let pointerVy = 0;

    const getPointerPos = (e: MouseEvent | TouchEvent): { x: number; y: number } => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const findBodyAt = (px: number, py: number): PhysicsBody | null => {
      for (let i = bodies.length - 1; i >= 0; i--) {
        const b = bodies[i];
        if (b.isCircle) {
          const dx = px - b.x;
          const dy = py - b.y;
          if (dx * dx + dy * dy <= b.radius * b.radius) return b;
        } else {
          const hw = b.width / 2;
          const hh = b.height / 2;
          if (px >= b.x - hw && px <= b.x + hw && py >= b.y - hh && py <= b.y + hh) {
            return b;
          }
        }
      }
      return null;
    };

    // Event Handlers (Pointer & Touch with scroll safety)
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const { x, y } = getPointerPos(e);
      const hit = findBodyAt(x, y);
      if (hit) {
        if ("touches" in e) {
          // Touch hit a body -> prevent scroll
          e.preventDefault();
        }
        draggedBody = hit;
        hit.isDragging = true;
        dragOffsetX = hit.x - x;
        dragOffsetY = hit.y - y;
        lastPointerX = x;
        lastPointerY = y;
        pointerVx = 0;
        pointerVy = 0;
        setIsInteracting(true);
      }
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!draggedBody) return;
      if ("touches" in e) {
        e.preventDefault();
      }
      const { x, y } = getPointerPos(e);
      pointerVx = x - lastPointerX;
      pointerVy = y - lastPointerY;
      lastPointerX = x;
      lastPointerY = y;

      draggedBody.x = x + dragOffsetX;
      draggedBody.y = y + dragOffsetY;
      draggedBody.vx = pointerVx * 0.8;
      draggedBody.vy = pointerVy * 0.8;
    };

    const onPointerUp = () => {
      if (draggedBody) {
        draggedBody.isDragging = false;
        draggedBody.vx = Math.min(Math.max(pointerVx * 1.1, -15), 15);
        draggedBody.vy = Math.min(Math.max(pointerVy * 1.1, -15), 15);
        draggedBody.angularVelocity = (Math.random() - 0.5) * 0.15;
        draggedBody = null;
      }
    };

    canvas.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    canvas.addEventListener("touchstart", onPointerDown, { passive: false });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp);

    // Collision detection between bodies (simplified circle approximation)
    const resolveCollisions = () => {
      const n = bodies.length;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const b1 = bodies[i];
          const b2 = bodies[j];
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDist = b1.radius + b2.radius;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            // Separate bodies
            if (!b1.isDragging && !b2.isDragging) {
              b1.x -= nx * overlap * 0.5;
              b1.y -= ny * overlap * 0.5;
              b2.x += nx * overlap * 0.5;
              b2.y += ny * overlap * 0.5;
            } else if (b1.isDragging) {
              b2.x += nx * overlap;
              b2.y += ny * overlap;
            } else if (b2.isDragging) {
              b1.x -= nx * overlap;
              b1.y -= ny * overlap;
            }

            // Normal impulse response
            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const p = 2 * (nx * kx + ny * ky) / 2;

            if (!b1.isDragging) {
              b1.vx -= p * nx * bounce;
              b1.vy -= p * ny * bounce;
            }
            if (!b2.isDragging) {
              b2.vx += p * nx * bounce;
              b2.vy += p * ny * bounce;
            }
          }
        }
      }
    };

    // Main Physics & Render Loop
    const step = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid/pattern inside canvas
      ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Update physics for each body
      for (const b of bodies) {
        if (!b.isDragging) {
          b.vy += gravity;
          b.vx *= friction;
          b.vy *= friction;

          b.x += b.vx;
          b.y += b.vy;
          b.angle += b.angularVelocity;
          b.angularVelocity *= 0.96;

          // Wall collisions (Left and Right)
          const leftBound = b.radius + 6;
          const rightBound = width - b.radius - 6;
          if (b.x < leftBound) {
            b.x = leftBound;
            b.vx = -b.vx * bounce;
          } else if (b.x > rightBound) {
            b.x = rightBound;
            b.vx = -b.vx * bounce;
          }

          // Floor collision
          const floorBound = height - b.radius - 8;
          if (b.y > floorBound) {
            b.y = floorBound;
            b.vy = -b.vy * bounce;
            b.vx *= groundFriction;
            if (Math.abs(b.vy) < 0.3) {
              b.vy = 0;
            }
          }
        }
      }

      resolveCollisions();

      // Render each body
      for (const b of bodies) {
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.angle);

        if (b.isCircle) {
          // Circular Badge
          ctx.beginPath();
          ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
          ctx.fillStyle = b.isDragging
            ? "rgba(56, 189, 248, 0.25)"
            : "rgba(15, 23, 42, 0.88)";
          ctx.fill();

          ctx.lineWidth = b.isDragging ? 2 : 1.5;
          ctx.strokeStyle = b.isDragging
            ? "#38bdf8"
            : "rgba(56, 189, 248, 0.45)";
          ctx.stroke();

          // Icon / Text
          ctx.font = 'bold 18px "Inter", sans-serif';
          ctx.fillStyle = "#f8fafc";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(b.item.label, 0, 1);
        } else {
          // Rounded Pill Capsule
          const hw = b.width / 2;
          const hh = b.height / 2;
          const r = b.radius;

          ctx.beginPath();
          if (typeof ctx.roundRect === "function") {
            ctx.roundRect(-hw, -hh, b.width, b.height, r);
          } else {
            ctx.rect(-hw, -hh, b.width, b.height);
          }

          ctx.fillStyle = b.isDragging
            ? "rgba(56, 189, 248, 0.2)"
            : "rgba(15, 23, 42, 0.88)";
          ctx.fill();

          ctx.lineWidth = b.isDragging ? 2 : 1.5;
          ctx.strokeStyle = b.isDragging
            ? "#38bdf8"
            : "rgba(56, 189, 248, 0.35)";
          ctx.stroke();

          // Glowing dot on the left of pill
          ctx.beginPath();
          ctx.arc(-hw + 14, 0, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#34d399";
          ctx.fill();

          // Label text
          ctx.font = '500 13px "Inter", system-ui, sans-serif';
          ctx.fillStyle = "#e2e8f0";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(b.item.label, 6, 1);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(step);
    };

    // IntersectionObserver to pause when out of view (0% idle CPU)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            animationFrameId = requestAnimationFrame(step);
          } else {
            isVisible = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    // ResizeObserver
    const ro = new ResizeObserver(() => {
      updateCanvasSize();
    });
    ro.observe(container);

    return () => {
      observer.disconnect();
      ro.disconnect();
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      canvas.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, [data, reducedMotion]);

  if (reducedMotion) {
    // Accessible fallback for users with prefers-reduced-motion
    return (
      <div className="physics-container" style={{ padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#38bdf8", fontWeight: 700 }}>
            {data.badge}
          </span>
          <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>
            {data.instruction}
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {data.items.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#e2e8f0",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="physics-container" aria-label="Interactive Physics Playground">
      {/* Background Concept Artifact Image */}
      {heroImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            pointerEvents: "none",
            filter: "contrast(1.1) brightness(0.8)",
          }}
        />
      )}

      {/* Top HUD overlay */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#34d399",
              boxShadow: "0 0 10px #34d399",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--accent-glow, #38bdf8)",
              textTransform: "uppercase",
            }}
          >
            {data.badge}
          </span>
        </div>

        <span
          style={{
            fontSize: "11px",
            color: "var(--text-dim, #94a3b8)",
            letterSpacing: "0.02em",
            opacity: isInteracting ? 0.4 : 0.85,
            transition: "opacity 0.2s ease",
          }}
        >
          {data.instruction}
        </span>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          cursor: "grab",
        }}
      />
    </div>
  );
}
