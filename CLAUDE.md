# Project: sleep (小伴侣)

## Quick Start
1. Run `.\init.ps1` to start development environment
2. Read `claude-progress.txt` for recent progress
3. Check `feature_list.json` for next task

## Workflow
1. Run basic tests before starting (.\init.ps1)
2. Implement one feature at a time
3. Update feature_list.json and claude-progress.txt after completion
4. Commit and push changes
5. Update corresponding GitHub Issue label

## Issue-based Development Rules
- All feature development must be linked to a GitHub Issue
- When starting: Change Issue label to `status:doing`
- When completed: Change Issue label to `status:review`
- After acceptance: Close the Issue

## Tech Stack
- Frontend: Next.js (React)
- Backend: TypeScript
- Database: MySQL 8
- Mini Program: Taro

## Automated Documentation
- `docs/architecture.md` - System architecture, update after major features
- `docs/changelog.md` - Change log, update after each commit
- `docs/project-status.md` - Project status, update at end of each session

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
