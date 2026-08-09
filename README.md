# Agent Instructions

Read this entire file before doing anything else.

## Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time. 
** At session start, read the entire "Learned Rules" section before doing anything else. **

### How it works

1. When the user corrects you or you make a a mistake, ** immediately append a new rule **  to the "Learned Rules" sections and the bottom of this file.

2. Rules are numbered sequentially and written as clear, imperative instructions, e.g. "Don't do X", "Always do Y".

3. Format: 'N. [CATEGORY] Never/Always do X - because Y'

4. Categories: '[STYLE]', '[CODE]', '[ARCH]', [TOOL]', '[PROCESS]', '[DATA], '[UX]', [OTHER]'

5. Before starting any task, scan all rules below for relevant constraints.

6. If two rules conflict, the higher-numbered rule takes precedence.

7. Never delete rules. If a rule become obsolete, append a new rule that supersedes it.

### When to add rules

- User explicitly requests it
- You make a mistake the user corrects
- You discover a pattern from working in the project that would make future work easier
- You hit a bug caused by wrong assumptions you made about this codebase.
- User states preferences ("always use X, not Y", "never do Y")


**IMPORTANT:** The very first rule is **always** #1. Every new rule increments the total count. This ensures correct precedence.    

### Rules format example
[STYLE] Never use emojis to commit messages. 
[CODE] Never use tailwind v4 classes. 

---

## Learned Rules
<!-- New Rules start here -->