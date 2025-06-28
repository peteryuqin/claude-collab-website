import { useState } from 'react'
import styles from '../styles/Demo.module.css'

export default function Demo() {
  const [activeTab, setActiveTab] = useState('swarm')

  const demos = {
    swarm: {
      title: 'Multi-Agent Swarm',
      code: `# Launch a development swarm with anti-echo-chamber protection
cc swarm "Build a REST API with authentication" \\
  --strategy development \\
  --mode distributed \\
  --max-agents 5 \\
  --anti-echo \\
  --monitor`,
      description: 'Coordinate multiple AI agents with different perspectives to build complex systems'
    },
    sparc: {
      title: 'SPARC TDD Mode',
      code: `# Test-driven development with automatic test generation
cc sparc tdd "User registration with email verification"

# The system will:
# 1. Generate comprehensive test cases
# 2. Write failing tests
# 3. Implement the feature
# 4. Ensure all tests pass`,
      description: 'Build features the right way with test-driven development'
    },
    memory: {
      title: 'Persistent Memory',
      code: `# Store project context
cc memory store "api_design" "RESTful API with JWT auth"

# Agents can access shared memory
cc sparc run coder "Implement the API from api_design"
cc sparc run tester "Test the API based on api_design"`,
      description: 'Share context and knowledge across sessions and agents'
    }
  }

  return (
    <section className={styles.demo} id="demo">
      <div className="container">
        <h2 className={styles.title}>See It In Action</h2>
        <p className={styles.subtitle}>
          Real examples of Claude-Collab's powerful features
        </p>
        
        <div className={styles.tabs}>
          {Object.keys(demos).map(key => (
            <button
              key={key}
              className={`${styles.tab} ${activeTab === key ? styles.active : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {demos[key as keyof typeof demos].title}
            </button>
          ))}
        </div>
        
        <div className={styles.content}>
          <div className={styles.codeBlock}>
            <pre>
              <code>{demos[activeTab as keyof typeof demos].code}</code>
            </pre>
          </div>
          <p className={styles.description}>
            {demos[activeTab as keyof typeof demos].description}
          </p>
        </div>
      </div>
    </section>
  )
}