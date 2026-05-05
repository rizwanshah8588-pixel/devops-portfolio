import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">Rizwan<span>.</span></h2>
        <div>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tag">DevOps Engineer in Progress</p>
          <h1>Hi, I'm Rizwan Shah </h1>
          <h2><br/>I build, deploy, and automate cloud projects.</h2>
          <p className="hero-text">
            Learning DevOps with hands-on projects in GitHub Actions, Docker,
            AWS, Linux, CI/CD pipelines, and cloud deployment.
          </p>

          <div className="buttons">
            <a href="https://github.com/rizwanshah8588-pixel" target="_blank">
              View GitHub
            </a>
            <a href="#projects" className="outline">
              See Projects
            </a>
          </div>
        </motion.div>
      </section>

      <section className="stats">
        <div>
          <h3>10+</h3>
          <p>GitHub Projects</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Learning Mode</p>
        </div>
        <div>
          <h3>CI/CD</h3>
          <p>Deployment Focus</p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Tech Stack</h2>
        <p className="section-text">Tools I am learning and using in DevOps.</p>

        <div className="skills-grid">
          <span>Linux</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Docker</span>
          <span>AWS EC2</span>
          <span>GitHub Actions</span>
          <span>CI/CD</span>
          <span>React</span>
          <span>Vercel</span>
          <span>Terraform</span>
          <span>Kubernetes</span>
          <span>Jenkins</span>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured DevOps Projects</h2>
        <p className="section-text">
          Real projects showing deployment, automation, and cloud skills.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <p className="status">🟢 Live Project</p>
            <h3>Portfolio Deployment on Vercel</h3>
            <p>
              Built and deployed a React portfolio website using GitHub and
              Vercel with automatic deployment after every push.
            </p>
            <ul>
              <li>React frontend</li>
              <li>GitHub repository</li>
              <li>Vercel auto deployment</li>
            </ul>
          </div>

          <div className="project-card">
            <p className="status">⚙️ DevOps Project</p>
            <h3>CI/CD Pipeline with GitHub Actions</h3>
            <p>
              Created an automated workflow to build, test, and deploy code
              whenever changes are pushed to GitHub.
            </p>
            <ul>
              <li>GitHub Actions workflow</li>
              <li>Build automation</li>
              <li>Deployment pipeline</li>
            </ul>
          </div>

          <div className="project-card">
            <p className="status">☁️ Cloud Project</p>
            <h3>Docker Deployment on AWS EC2</h3>
            <p>
              Containerized an application using Docker and deployed it on an
              AWS EC2 Linux server.
            </p>
            <ul>
              <li>Docker container</li>
              <li>AWS EC2 server</li>
              <li>Linux commands</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section journey">
        <h2>My DevOps Journey</h2>
        <div className="timeline">
          <div>
            <h3>Step 1</h3>
            <p>Started with Git, GitHub, and Linux basics.</p>
          </div>
          <div>
            <h3>Step 2</h3>
            <p>Built React projects and deployed them online.</p>
          </div>
          <div>
            <h3>Step 3</h3>
            <p>Learning Docker, AWS, CI/CD, Jenkins, and Kubernetes.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2 className="logo">Let’s Connect <span>.</span></h2>
        <p>
          I am building real DevOps projects and improving every day.
        </p>

        <div className="buttons center">
          <a href="https://github.com/rizwanshah8588-pixel" target="_blank">
            GitHub Profile
          </a>
          <a href="mailto:your-email@gmail.com" className="outline">
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
