import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function App() {
  const canvasRef = useRef(null);
  const [repos, setRepos] = useState([]);
  const [text, setText] = useState("");

  const fullText =
    "DevOps Engineer | AWS | Docker | Kubernetes | Terraform | CI/CD";

  // 🔤 Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // 🟢 Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "01DEVOPS";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ffcc";
      ctx.font = fontSize + "px monospace";

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // 🟡 Fetch GitHub repos
  useEffect(() => {
    fetch("https://api.github.com/users/YOUR_USERNAME/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 4)));
  }, []);

  // 🟣 Contact form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnrempl",
        "template_kz8miqs",
        e.target,
        "ak-B4oC3V31cbZAr1"
      )
      .then(() => alert("Message sent!"));
  };

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas}></canvas>

      <h1 style={styles.name}>Rizwan Shah</h1>
      <h2 style={styles.typing}>{text}|</h2>

      {/* Skills */}
      <div style={styles.section}>
        <h3>⚡ Skills</h3>
        <div style={styles.grid}>
          {["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"].map((s) => (
            <div key={s} style={styles.card}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Repos */}
      <div style={styles.section}>
        <h3>🟢 GitHub Projects</h3>
        {repos.map((repo) => (
          <p key={repo.id}>
            🔗{" "}
            <a href={repo.html_url} target="_blank" style={styles.link}>
              {repo.name}
            </a>
          </p>
        ))}
      </div>

      {/* DevOps Pipeline */}
      <div style={styles.section}>
        <h3>🟡 DevOps Pipeline</h3>
        <p>Code → Build → Test → Docker → Deploy → Monitor</p>
      </div>

      {/* Resume */}
      <div style={styles.section}>
        <a href="/resume.pdf" download style={styles.button}>
          ⬇ Download Resume
        </a>
      </div>

      {/* Contact */}
      <div style={styles.section}>
        <h3>🟣 Contact Me</h3>
        <form onSubmit={sendEmail}>
          <input name="name" placeholder="Name" style={styles.input} />
          <input name="email" placeholder="Email" style={styles.input} />
          <textarea name="message" placeholder="Message" style={styles.input} />
          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#00ffcc",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "monospace",
    padding: "20px",
    position: "relative",
  },
  canvas: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  name: {
    fontSize: "40px",
    textShadow: "0 0 10px #00ffcc",
  },
  typing: {
    fontSize: "18px",
  },
  section: {
    marginTop: "40px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },
  card: {
    border: "1px solid #00ffcc",
    padding: "10px",
    boxShadow: "0 0 10px #00ffcc",
  },
  link: {
    color: "#00ffcc",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "1px solid #00ffcc",
    background: "transparent",
    color: "#00ffcc",
    cursor: "pointer",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    background: "#000",
    border: "1px solid #00ffcc",
    color: "#00ffcc",
  },
};
