# PrintCraft Hub Marketplace

Built with the Next.js 14 App Router, tRPC, TypeScript, Payload & Tailwind

## Features

- 💻 Landing page & product pages included
- 💳 Full admin dashboard
- 🛍️ Users can purchase and sell their own products
- 🛒 Locally persisted shopping cart
- 🔑 Authentication using Payload
- 🌟 Clean, modern UI using shadcn-ui
- ✉️ Emails for signing up and after purchase
- ✅ Admins can verify products to ensure high quality

## Shadcn-ui

Run the `shadcn-ui` init command to setup your project and add components:

```
npx shadcn-ui@latest init
```

```
npx shadcn-ui@latest add button sheet separator input label dropdown-menu skeleton scrollarea
```

## Lucide React

Implementation of the lucide icon library for react applications

```
npm i lucide-react
```

## Configure `components.json`

You will be asked a few questions to configure `components.json`:

```
Would you like to use TypeScript (recommended)? yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › yes
```

## Dependencies

Installation is done by the following commands:

```
npm i express
npm i -D @types/express
```

```
npm i dotenv payload cross-env @payloadcms/richtext-slate @payloadcms/bundler-webpack @payloadcms/db-mongodb react-hook-form @hookform/resolvers zod sonner zustand
```

```
npm i -D nodemon
```

```
npm i swiper stripe body-parser resend  @react-email/components date-fns
```

```
npm i -D copyfiles
```

## tRPC
RPC is short for "Remote Procedure Call". It is a way of calling functions on one computer (the server) from another computer (the client). With traditional HTTP/REST APIs, you call a URL and get a response. With RPC, you call a function and get a response.
```
npm i @trpc/server @trpc/client @trpc/next @trpc/react-query @tanstack/react-query
npm i @tanstack/react-query@4.36.1
```

### Configure `package.json`
```
  "scripts": {
"dev": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts nodemon",
    "generate:types": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types",
    "build:payload": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload build",
    "build:server": "tsc --project tsconfig.server.json",
    "build:next": "cross-env PAYLOAD_CONFIG_PATH=dist/payload.config.js NEXT_BUILD=true node dist/server.js",
    "build": "cross-env NODE_ENV=production yarn build:payload && yarn build:server && yarn copyfiles && yarn build:next",
    "start": "cross-env PAYLOAD_CONFIG_PATH=dist/payload.config.js NODE_ENV=production node dist/server.js",
    "copyfiles": "copyfiles -u 1 \"src/**/*.{html,css,scss,ttf,woff,woff2,eot,svg,jpg,png}\" dist/",
    "lint": "next lint"
  },
  ```

## Generate payload types
```
npm run generate:types
```

## E-mail verification
```
npm i nodemailer
npm i --save-dev @types/nodemailer
```

## Enviromnent variables

Configure `.env` file:

```
NEXT_PUBLIC_SERVER_URL=
PAYLOAD_SECRET=
MONGODB_URL=
RESEND_API_KEY=
STRIPE_SECRECT_KEY=
STRIPE_WEBHOOK_SECRECT=
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Create an optimized production build:
```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.