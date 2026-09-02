# Task 2: 升级排版与样式系统 (Editorial Typography & Visual Tokens)

## Scope
- Modify: `src/app/globals.css`
- Create & Run: `tests/verify-styles.js`

## Requirements & Design Tokens
In `src/app/globals.css`:
1. **Editorial Serif Font System**:
   Define CSS custom variable in `:root`:
   ```css
   --font-serif: "Newsreader", "Playfair Display", "Instrument Serif", "Noto Serif", "Songti SC", "SimSun", serif;
   ```
   Provide utility class:
   ```css
   .font-editorial {
     font-family: var(--font-serif);
     font-style: italic;
     font-weight: 400;
     letter-spacing: -0.01em;
     color: var(--accent-glow, #38bdf8);
   }
   ```
2. **Physics Container Styles**:
   ```css
   .physics-container {
     position: relative;
     width: 100%;
     height: 460px;
     border-radius: 16px;
     border: 1px solid rgba(255, 255, 255, 0.08);
     background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.07), transparent 70%),
                 linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 12, 22, 0.95) 100%);
     overflow: hidden;
     box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
   }
   ```
   Add overlay labels and interaction hint styling (e.g. badge tag, drag prompt).
3. **Horizontal Showcase Scroll-Snap**:
   ```css
   .showcase-gallery {
     display: flex;
     gap: 24px;
     overflow-x: auto;
     scroll-snap-type: x mandatory;
     padding: 12px 4px 28px 4px;
     -webkit-overflow-scrolling: touch;
     scrollbar-width: thin;
     scrollbar-color: rgba(56, 189, 248, 0.3) transparent;
   }
   .showcase-gallery::-webkit-scrollbar {
     height: 6px;
   }
   .showcase-gallery::-webkit-scrollbar-thumb {
     background: rgba(56, 189, 248, 0.3);
     border-radius: 999px;
   }
   .showcase-card {
     flex: 0 0 88%;
     max-width: 600px;
     scroll-snap-align: start;
   }
   @media (min-width: 1024px) {
     .showcase-card {
       flex: 0 0 480px;
     }
   }
   ```
4. **Pricing Grid & Tier Cards**:
   ```css
   .pricing-grid {
     display: grid;
     grid-template-columns: 1fr;
     gap: 24px;
   }
   @media (min-width: 900px) {
     .pricing-grid {
       grid-template-columns: repeat(3, 1fr);
     }
   }
   .pricing-card {
     position: relative;
     display: flex;
     flex-direction: column;
     border-radius: 16px;
     padding: 32px 24px;
     background: rgba(15, 23, 42, 0.6);
     border: 1px solid rgba(255, 255, 255, 0.08);
     transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
   }
   .pricing-card:hover {
     transform: translateY(-2px);
     border-color: rgba(56, 189, 248, 0.3);
     box-shadow: 0 16px 32px -10px rgba(0, 0, 0, 0.5);
   }
   .pricing-card--highlight {
     border-color: rgba(56, 189, 248, 0.4);
     background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.1), transparent 75%),
                 rgba(15, 23, 42, 0.85);
     box-shadow: 0 20px 40px -15px rgba(56, 189, 248, 0.15), inset 0 1px 0 rgba(56, 189, 248, 0.3);
   }
   ```

5. **Accessibility / Prefers-reduced-motion**:
   Ensure all transforms & animations respect `@media (prefers-reduced-motion: reduce)`.

## Test Requirements
Create `tests/verify-styles.js` that inspects `src/app/globals.css` and verifies presence of all required classes and properties.
Must pass with `node tests/verify-styles.js`.
Must also verify `npm run build` succeeds without CSS syntax errors.
