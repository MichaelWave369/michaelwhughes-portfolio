import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  {
    title: 'Fix My Repo',
    text: 'React, Vite, dependency, import, and blank-screen debugging for small front-end projects.',
  },
  {
    title: 'Deploy My App',
    text: 'GitHub Pages setup, Vite base-path fixes, build checks, and simple deploy handoff notes.',
  },
  {
    title: 'Build My Prototype',
    text: 'Turn a rough idea, document, or AI-generated starter into a clean working front-end demo.',
  },
  {
    title: 'Clean My GitHub',
    text: 'README polish, repo structure, launch notes, service descriptions, and portfolio-ready presentation.',
  },
];

const caseStudies = [
  {
    name: 'Auralith369',
    summary: 'Creative front-end app and visual editor prototype focused on interface polish and deployable web-app workflows.',
    tags: ['React', 'Vite', 'UI polish', 'GitHub Pages'],
  },
  {
    name: 'PocketBrain',
    summary: 'AI-assisted productivity and local-intelligence concept shaped into a practical prototype direction.',
    tags: ['AI workflows', 'Product design', 'Prototype planning'],
  },
  {
    name: 'Agentora',
    summary: 'Agent/workflow system concept showing modular thinking, AI orchestration, and user-facing prototype structure.',
    tags: ['Agents', 'Workflow design', 'Documentation'],
  },
];

function App() {
  const [active, setActive] = useState(services[0]);

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Interactive Resume v0.1</p>
        <h1>Michael W. Hughes</h1>
        <h2>AI-assisted prototype builder and front-end deployment fixer.</h2>
        <p className="heroText">
          I help creators, solo founders, and small teams turn prototype chaos, broken React/Vite apps, AI-generated code, and unfinished GitHub repos into working demos people can run, share, and build on.
        </p>
        <div className="heroActions">
          <a href="mailto:microneesia79@gmail.com" className="primary">Start a project</a>
          <a href="https://github.com/MichaelWave369" className="secondary">View GitHub</a>
        </div>
      </section>

      <section className="panel">
        <div>
          <p className="eyebrow">What I help with</p>
          <h3>Prototype rescue menu</h3>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <button
              key={service.title}
              className={active.title === service.title ? 'service active' : 'service'}
              onClick={() => setActive(service)}
            >
              {service.title}
            </button>
          ))}
        </div>
        <article className="activeCard">
          <h4>{active.title}</h4>
          <p>{active.text}</p>
        </article>
      </section>

      <section className="caseGrid">
        {caseStudies.map((item) => (
          <article className="caseCard" key={item.name}>
            <p className="eyebrow">Case Study</p>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <div className="tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </section>

      <section className="panel closing">
        <p className="eyebrow">Simple offer</p>
        <h3>Broken app? Messy repo? Half-built AI idea?</h3>
        <p>Send me the repo or project notes. I will help make the next step clearer, cleaner, and easier to launch.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
