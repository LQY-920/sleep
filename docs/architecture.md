# System Architecture

## Project Overview
sleep (小伴侣) - 结合记账、签到、计划管理和社交互动的生活小程序

## Tech Stack
- **Framework**: Taro 3.6.x (React)
- **Language**: TypeScript
- **Styling**: SCSS
- **Target Platform**: WeChat Mini Program

## Directory Structure
```
sleep/
├── config/                 # Taro build configuration
│   ├── index.ts           # Main config
│   ├── dev.ts             # Development config
│   └── prod.ts            # Production config
├── src/
│   ├── app.ts             # App entry point
│   ├── app.config.ts      # App configuration (routes, tabBar)
│   ├── app.scss           # Global styles
│   ├── assets/
│   │   └── tabbar/        # TabBar icons
│   └── pages/
│       ├── index/         # 首页 (Home)
│       ├── accounting/    # 记账 (Accounting)
│       ├── checkin/       # 签到 (Check-in)
│       ├── plan/          # 计划 (Plan)
│       └── profile/       # 我的 (Profile)
├── types/                 # TypeScript type definitions
├── package.json
├── tsconfig.json
├── babel.config.js
└── project.config.json    # WeChat Mini Program config
```

## Page Structure
Each page follows the pattern:
- `index.tsx` - React component
- `index.config.ts` - Page configuration
- `index.scss` - Page styles

## TabBar Navigation
5 tabs configured in `app.config.ts`:
1. 首页 (Home) - `/pages/index/index`
2. 记账 (Accounting) - `/pages/accounting/index`
3. 签到 (Check-in) - `/pages/checkin/index`
4. 计划 (Plan) - `/pages/plan/index`
5. 我的 (Profile) - `/pages/profile/index`

## Component Interaction
[To be updated as features are implemented]

## Database Design
[To be updated when database schema is defined]

## API Design
[To be updated when APIs are implemented]
