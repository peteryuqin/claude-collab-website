import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Claude-Collab
            <span className={styles.version}>v3.2.0</span>
          </h1>
          <p className={styles.tagline}>
            AI Collaboration Framework with Anti-Echo-Chamber Protection
          </p>
          <p className={styles.description}>
            Build powerful multi-agent systems that think differently. Claude-Collab ensures 
            diverse perspectives, prevents groupthink, and enables truly intelligent collaboration.
          </p>
          <div className={styles.buttons}>
            <a href="#installation" className={styles.primaryButton}>
              Get Started
            </a>
            <a href="https://github.com/yourusername/claude-collab" className={styles.secondaryButton}>
              View on GitHub
            </a>
          </div>
          <div className={styles.quickInstall}>
            <code>npm install -g claude-collab</code>
            <button className={styles.copyButton}>Copy</button>
          </div>
        </div>
      </div>
    </section>
  )
}