# Goal (What You Want)

You want to use your **Codex** and **Claude Code** workflows from your **phone** with as much power as possible, close to desktop usage.  
You also want:

- ask things for claude or codex to do things on my PC, from my phone
- access to your existing local projects on your PC (good, butoptional)
- a setup that is practical day to day (not painful UX)
- security that is good enough for real use
- easy rollback if you stop using it


# Options

## Option 1: VS Code Tunnel / vscode.dev on phone

### How it works
- Run `code tunnel` on your PC
- Open the tunnel URL on phone in browser/PWA
- Run agents in terminal inside VS Code web

### Pros
- Full IDE concept remotely
- Easy initial setup
- Good if using tablet with keyboard

### Cons
- Mobile UX is often awkward on phone
- Layout/icons/input issues can happen
- Usually feels worse than expected on small screens

### Fit for your goal
- Medium


## Option 2: Agent Zero / similar web-agent UI

### How it works
- Expose agent web app remotely
- Interact with agent from phone browser

### Pros
- Agent-native UI
- Can orchestrate tasks

### Cons
- Larger security attack surface
- Auth/storage hardening concerns
- More moving parts, more fragility

### Fit for your goal
- Low to medium (especially if security + reliability matter)


## Option 3: SSH app on phone + tmux on PC + local CLIs (Codex/Claude Code)

### How it works
- Connect phone to PC with Tailscale + SSH app (Termius/Blink/Termux)
- Keep long-running sessions in `tmux`
- Run `codex`, `claude`, `gh`, etc. directly on your PC

### Pros
- Uses the real CLIs you already want
- Strongest balance of power + reliability + security
- Session handoff PC <-> phone is excellent with `tmux`
- No web IDE mobile friction

### Cons
- Terminal-first UX (no fancy GUI)
- Initial setup needed (SSH hardening + tmux habit)

### Fit for your goal
- High


## Option 4: GitHub Mobile for Copilot chat + SSH for heavy tasks

### How it works
- Use GitHub Mobile for quick Copilot interactions
- Use SSH/tmux for real coding/agent runs

### Pros
- Great quick checks/review/chat
- Keeps heavy execution in robust terminal flow

### Cons
- Split workflow across two tools
- Not full parity with desktop coding flow

### Fit for your goal
- High (as a hybrid model)


# Best Option (My Recommendation)

If your main objective is to use **Codex + Claude Code from phone with real power**, the best setup is:

**Option 3 (SSH + tmux + local CLIs), optionally combined with Option 4 for quick mobile Copilot chat.**

Why:
- It directly matches your target tools (Codex/Claude CLI), not a workaround.
- It avoids the poor phone web-IDE experience you already felt.
- It is easier to secure than exposing agent web UIs.
- It keeps your PC as the execution host, so all projects and files stay available.


# Suggested Next Step to Validate Fast

Run a 1-week trial with:

- Tailscale
- SSH app on phone
- `tmux` session per project
- `codex` and `claude` running on PC terminals

Success criteria:
- You can resume sessions from phone in under 30 seconds.
- You can complete at least 3 real tasks from phone without frustration.
- You no longer depend on `vscode.dev` mobile editing for serious work.
