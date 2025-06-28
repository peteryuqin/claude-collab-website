# 🚀 Claude-Collab Website Multi-Agent Setup

## Step 1: Start the Server (Terminal 1)

```bash
cd /Users/peter/claude-collab-website
cc server
```

## Step 2: Join as Different Agents (New Terminals)

### Terminal 2 - Lead Architect (Alice)
```bash
cd /Users/peter/claude-collab-website
cc register alice
cc join alice --role architect --perspective visionary
# Once connected:
say "Hello team! I'm Alice, the lead architect. Let's build an amazing website for Claude-Collab!"
say "I'll focus on the overall structure and technical architecture."
```

### Terminal 3 - Frontend Developer (Bob)
```bash
cd /Users/peter/claude-collab-website
cc register bob
cc join bob --role coder --perspective pragmatist
# Once connected:
say "Hi everyone! Bob here, frontend developer. Ready to build a clean, responsive UI!"
say "I'll handle HTML, CSS, and JavaScript implementation."
```

### Terminal 4 - Content Writer (Charlie)
```bash
cd /Users/peter/claude-collab-website
cc register charlie  
cc join charlie --role documenter --perspective user-focused
# Once connected:
say "Greetings team! Charlie here. I'll write clear docs and engaging content."
say "Let's make sure everything is easy to understand for our users."
```

### Terminal 5 - Designer (Diana)
```bash
cd /Users/peter/claude-collab-website
cc register diana
cc join diana --role designer --perspective creative
# Once connected:
say "Hey team! Diana here, focusing on visual design and user experience."
say "I'll ensure our website looks modern and professional."
```

### Terminal 6 - Backend Developer (Eric)
```bash
cd /Users/peter/claude-collab-website
cc register eric
cc join eric --role coder --perspective technical
# Once connected:
say "Hello all! Eric here for backend and API integration."
say "I'll handle the interactive demo and server-side features."
```

### Terminal 7 - QA Tester (Frank)
```bash
cd /Users/peter/claude-collab-website
cc register frank
cc join frank --role reviewer --perspective skeptic
# Once connected:
say "Team, Frank here as your QA tester. I'll review everything critically."
say "My job is to find issues and ensure quality. Don't take it personally!"
```

## Step 3: Start Collaborating!

Once all agents are connected, they can start working:

```bash
# Alice (architect) might say:
say "Let's start with the homepage structure. I propose a hero section, features grid, and quick start guide."

# Bob (frontend) might respond:
say "Sounds good! But let's ensure mobile-first design. Many developers check docs on phones."

# Frank (QA) might challenge:
say "Are we sure about the features grid? Card layouts can be problematic on small screens."

# Diana (designer) might suggest:
say "What if we use a vertical timeline layout instead? More mobile-friendly and tells a story."
```

## Quick Copy-Paste Commands

For easy setup, here are all registration commands:

```bash
# Terminal 2
cc register alice && cc join alice --role architect --perspective visionary

# Terminal 3  
cc register bob && cc join bob --role coder --perspective pragmatist

# Terminal 4
cc register charlie && cc join charlie --role documenter --perspective user-focused

# Terminal 5
cc register diana && cc join diana --role designer --perspective creative

# Terminal 6
cc register eric && cc join eric --role coder --perspective technical

# Terminal 7
cc register frank && cc join frank --role reviewer --perspective skeptic
```

## Anti-Echo-Chamber in Action

Watch how the diversity enforcement prevents everyone from just agreeing:
- Frank (skeptic) will challenge assumptions
- Bob (pragmatist) will focus on what's realistic
- Diana (creative) will push for innovation
- The system ensures at least 30% disagreement!

Ready to build something amazing together! 🎉