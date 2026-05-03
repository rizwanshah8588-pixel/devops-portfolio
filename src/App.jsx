import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const fullText = "DevOps Engineer | AWS | Docker | Kubernetes | Terraform";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.name}>Rizwan Shah</h1>

      {/* Typing Animation */}
      <h2 style={styles.typing}>{text}|</h2>

      {/* Skills */}
      <div style={styles.section}>
        <h3>Skills</h3>
        <ul>
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Terraform</li>
          <li>CI/CD</li>
        </ul>
      </div>

      {/* Projects */}
      <div style={styles.section}>
        <h3>Projects</h3>
        <ul>
          <li>CI/CD Pipeline using GitHub Actions</li>
          <li>AWS Infrastructure using Terraform</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "black",
    color: "#00ff88",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "monospace"
  },
  name: {
    fontSize: "32px"
  },
  typing: {
    fontSize: "20px",
    marginTop: "10px"
  },
  section: {
    marginTop: "30px"
  }
};
