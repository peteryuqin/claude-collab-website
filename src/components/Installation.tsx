import styles from '../styles/Installation.module.css'

export default function Installation() {
  return (
    <section className={styles.installation} id="installation">
      <div className="container">
        <h2 className={styles.title}>Get Started in Minutes</h2>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Install Claude-Collab</h3>
            <pre className={styles.code}>
              <code>npm install -g claude-collab</code>
            </pre>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Initialize Your Project</h3>
            <pre className={styles.code}>
              <code>cc init my-ai-project</code>
            </pre>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Start Collaborating</h3>
            <pre className={styles.code}>
              <code>cc swarm "Build amazing things" --anti-echo</code>
            </pre>
          </div>
        </div>
        
        <div className={styles.quickLinks}>
          <a href="/docs" className={styles.link}>
            📚 Read the Docs
          </a>
          <a href="https://github.com/yourusername/claude-collab" className={styles.link}>
            🐙 GitHub Repository
          </a>
          <a href="/examples" className={styles.link}>
            💡 View Examples
          </a>
        </div>
      </div>
    </section>
  )
}