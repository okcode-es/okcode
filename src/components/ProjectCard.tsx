import type { Project } from "@/content/site-content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project__meta">
        <div>[ {project.industry} ]</div>
        <div>
          {project.client} // {project.year}
        </div>
      </div>
      <div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__summary">{project.summary}</p>
        <div className="project__tags">
          {project.tags.map((t) => (
            <span className="tag-pill" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="project__result">
        {project.result}
        <small>{project.placeholder ? "Benchmark" : "Outcome"}</small>
      </div>
    </article>
  );
}
