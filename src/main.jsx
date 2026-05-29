import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  {
    title: 'Fix My Repo',
    text: 'React, Vite, dependency, import, routing, and blank-screen debugging for small front-end projects.',
    details: ['Build errors', 'Broken imports', 'Blank screens', 'Vite base paths'],
  },
  {
    title: 'Deploy My App',
    text: 'GitHub Pages setup, Vite deploy fixes, build checks, and simple handoff notes so the project can stay live.',
    details: ['GitHub Actions', 'Pages setup', 'Build review', 'Launch notes'],
  },
  {
    title: 'Build My Prototype',
    text: 'Turn a rough idea, document, or AI-generated starter into a clean working front-end demo.',
    details: ['Idea to demo', 'React UI', 'Local data', 'Fast iteration'],
  },
  {
    title: 'Clean My GitHub',
    text: 'README polish, repo structure, launch copy, service framing, and portfolio-ready presentation.',
    details: ['README polish', 'Repo cleanup', 'Release notes', 'Client handoff'],
  },
];

const caseStudies = [
  {
    name: 'Auralith369',
    href: 'https://github.com/MichaelWave369/Auralith369',
    summary: 'Local-first visual alchemy workstation for image editing, poster forging, style cards, manifests, and auditable creative receipts.',
    tags: ['React', 'Vite', 'Creative tools', 'GitHub Pages'],
  },
  {
    name: 'PocketBrain',
    href: 'https://github.com/MichaelWave369/PocketBrain',
    summary: 'Private, phone-first AI brain concept focused on local memory, personal control, and practical AI helper workflows.',
    tags: ['AI workflows', 'Local-first', 'Product design'],
  },
  {
    name: 'Agentora',
    href: 'https://github.com/MichaelWave369/Agentora',
    summary: 'Local-first multi-agent orchestration studio for Ollama models, collaborative AI teams, and offline-first agent workflows.',
    tags: ['Ollama', 'Agents', 'Workflow design'],
  },
];

const packages = [
  {
    name: 'Quick Fix',
    price: 'Small scoped repairs',
    text: 'Best for one clear front-end issue: blank screen, failed build, import error, or deploy problem.',
  },
  {
    name: 'Repo Cleanup + Deploy',
    price: 'Best starter package',
    text: 'Clean the repo, fix build/deploy issues, improve the README, and create a practical handoff note.',
  },
  {
    name: 'Prototype Rescue',
    price: 'Idea to demo',
    text: 'Turn rough notes, docs, or AI-generated starter code into a working React/Vite prototype.',
  },
];

const steps = [
  'Send the repo link, project notes, or broken app screenshot.',
  'I identify the cleanest next step and confirm a focused scope.',
  'I repair, polish, or prototype the work in a clear handoff-friendly way.',
  'You receive the result with run/build notes and next-step recommendations.',
];

function App() {
  const [active, setActive] = useState(services[0]);

  return (
    <main className="page">
      <section className="hero shellGlow">
        <div className="brandRow">
          <span>Parallax</span>
          <span>PHI369 Labs</span>
          <span>v0.2</span>
        </div>
        <p className="eyebrow">Interactive resume and prototype rescue desk</p>
        <h1>Michael W. Hughes</h1>
        <h2>AI-assisted prototype builder and front-end deployment fixer.</h2>
        <p className="heroText">
          I help creators, solo founders, and small teams turn prototype chaos, broken React/Vite apps, AI-generated code, and unfinished GitHub repos into working demos people can run, share, and build on.
        </p>
        <div className="heroActions">
          <a href="mailto:microneesia79@gmail.com?subject=Prototype%20or%20Repo%20Rescue%20Request" className="primary">Start a project</a>
          <a href="https://github.com/MichaelWave369" className="secondary" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>

      <section className="panel splitPanel">
        <div>
          <p className="eyebrow">What I help with</p>
          <h3>Prototype rescue menu</h3>
          <p className="muted">Choose a service path to see the kind of focused work I can help with.</p>
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
          <div className="miniTags">
            {active.details.map((detail) => <span key={detail}>{detail}</span>)}
          </div>
        </article>
      </section>

      <section className="sectionHeader">
        <p className="eyebrow">Featured work</p>
        <h3>Proof-of-work projects</h3>
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
            <a className="cardLink" href={item.href} target="_blank" rel="noreferrer">View project</a>
          </article>
        ))}
      </section>

      <section className="sectionHeader">
        <p className="eyebrow">Starter packages</p>
        <h3>Simple ways to work together</h3>
      </section>
      <section className="packageGrid">
        {packages.map((pack) => (
          <article className="packageCard" key={pack.name}>
            <p className="packagePrice">{pack.price}</p>
            <h3>{pack.name}</h3>
            <p>{pack.text}</p>
          </article>
        ))}
      </section>

      <section className="panel workFlow">
        <div>
          <p className="eyebrow">How it works</p>
          <h3>Clear scope. Working handoff. No chaos spiral.</h3>
        </div>
        <ol>
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="panel closing shellGlow">
        <p className="eyebrow">Available for focused side gigs</p>
        <h3>Broken app? Messy repo? Half-built AI idea?</h3>
        <p>Send me the repo or project notes. I will help make the next step clearer, cleaner, and easier to launch.</p>
        <div className="heroActions centerActions">
          <a href="mailto:microneesia79@gmail.com?subject=Prototype%20or%20Repo%20Rescue%20Request" className="primary">Email Michael</a>
          <a href="https://github.com/MichaelWave369/michaelwhughes-portfolio" className="secondary" target="_blank" rel="noreferrer">View this repo</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
