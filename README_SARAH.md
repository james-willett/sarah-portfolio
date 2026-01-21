# Sarah's Portfolio - Getting Started Guide

This is your portfolio website! You can edit content, change styles, and add new projects - all by chatting with Claude (an AI assistant that lives in your terminal).

---

## One-Time Setup

You only need to do this once. Ask James if you get stuck!

### 1. Install Visual Studio Code (VS Code)
This is your "workshop" - where you'll see and edit files.

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Click the big download button
3. Open the downloaded file and drag VS Code to your Applications folder
4. Open VS Code from Applications

### 2. Install Node.js
This is the "engine" that runs your website locally.

1. Go to [nodejs.org](https://nodejs.org/)
2. Click the **LTS** button (the stable version)
3. Open the downloaded file and follow the installer

### 3. Install Claude Code
This is your AI assistant that can read and edit your project.

1. Open VS Code
2. Go to **Terminal → New Terminal** (menu at the top)
3. Paste this command and press Enter:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
4. When it finishes, type `claude` and press Enter
5. Follow the prompts to log in with your Anthropic account

---

## Every Time You Work on the Project

### Step 1: Open the Project in VS Code

1. Open VS Code
2. Go to **File → Open Folder**
3. Navigate to your `Sarah-Portfolio` folder and click **Open**

You should see all your project files in the left sidebar (like a file explorer).

### Step 2: Start the Local Website

This lets you preview your site in a browser as you make changes.

1. Open the terminal: **Terminal → New Terminal**
2. Type this and press Enter:
   ```
   npm run dev
   ```
3. You'll see a message with a URL like `http://localhost:4321`
4. Hold **Command (⌘)** and click that link - your site opens in a browser!

> **Tip:** Keep this terminal running. Your browser will auto-refresh when you make changes.

### Step 3: Start Claude Code

Open a **second** terminal tab so Claude can work while your site runs:

1. Click the **+** button in the terminal panel (or press **⌘+Shift+`**)
2. Type `claude` and press Enter

You're now chatting with Claude! It can see all your project files.

---

## Talking to Claude

Just describe what you want in plain English. Claude understands your project and can make changes for you.

**Example requests:**

- "Change the background color of the hero section to light pink"
- "Add a new project called 'Brand Redesign' with a description about logo work"
- "Make the heading font bigger on mobile"
- "Show me what's in my navigation menu"
- "The spacing looks weird on the About page - can you fix it?"

**Tips:**
- Be specific about *where* you want changes (which page, which section)
- You can reference colors, sizes, or other parts of the site
- If something looks wrong, just tell Claude and it'll try to fix it
- It's okay to say "undo that" or "that's not what I wanted"

---

## Saving Your Work (Git)

Git is like "save points" for your project. It tracks all your changes so you can go back if needed.

**After making changes you're happy with:**

1. In the Claude chat, type:
   ```
   /commit
   ```
2. Claude will save your changes with a description of what was done

That's it! Your work is saved.

---

## Stopping Work

When you're done for the day:

1. In the terminal running your website, press **Ctrl+C** to stop it
2. Type `exit` in the Claude terminal to close Claude
3. Close VS Code

---

## Quick Reference

| Task | What to do |
|------|------------|
| Open project | VS Code → File → Open Folder → Sarah-Portfolio |
| Start website | Terminal: `npm run dev` |
| Start Claude | New terminal tab: `claude` |
| Save changes | Tell Claude: `/commit` |
| Stop website | Press **Ctrl+C** in that terminal |
| Stop Claude | Type `exit` |

---

## If Something Goes Wrong

1. **Try asking Claude first** - describe the problem and it can often help
2. **If the website won't start** - make sure you're in the right folder and try `npm install` first
3. **If Claude seems confused** - type `/clear` to start fresh
4. **Still stuck?** - Message James!

---

## Your Project Files (What's What)

```
Sarah-Portfolio/
├── src/
│   ├── content/projects/    ← Your portfolio projects (MDX files)
│   ├── pages/               ← The main pages of your site
│   └── components/          ← Reusable pieces (header, footer, etc.)
├── public/                  ← Images and other files
└── astro.config.mjs         ← Site settings (navigation, socials, etc.)
```

You don't need to memorize this - Claude knows where everything is!
