import styles from '../styles/Features.module.css'

const features = [
  {
    title: 'Anti-Echo-Chamber Protection',
    description: 'Enforces minimum 30% disagreement rate to prevent groupthink and ensure diverse perspectives',
    icon: '🛡️'
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate swarms of specialized AI agents working together on complex tasks',
    icon: '🎭'
  },
  {
    title: 'SPARC Development Modes',
    description: '17 specialized modes including TDD, Architecture, Code Review, and more',
    icon: '⚡'
  },
  {
    title: 'Memory Management',
    description: 'Persistent memory system for sharing context and knowledge across sessions',
    icon: '🧠'
  },
  {
    title: 'Real-time Collaboration',
    description: 'WebSocket-based real-time communication between all agents',
    icon: '🔄'
  },
  {
    title: 'Evidence-Based Decisions',
    description: 'Agents must provide sources and reasoning for their recommendations',
    icon: '📊'
  }
]

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <h2 className={styles.title}>Why Claude-Collab?</h2>
        <p className={styles.subtitle}>
          Built for teams that need diverse perspectives and intelligent collaboration
        </p>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}