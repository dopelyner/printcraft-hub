# Hippo Marketplace - Fullstack E-Commerce Marketplace

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
npx shadcn-ui@latest add button
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add scrollarea
```

## Lucide React

Implementation of the lucide icon library for react applications

```
npm i lucide-react
```

## Configure components.json

You will be asked a few questions to configure `components.json`:

```
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes
```

## Dependencies

Installation is done by the following commands:

```
npm i express
npm i -D @types/express
```

```
npm i dotenv
```

```
npm i payload
```

```
npm i cross-env
```

```
npm i @payloadcms/richtext-slate @payloadcms/bundler-webpack @payloadcms/db-mongodb
```

```
npm i -D nodemon
```

```
npm i react-hook-form @hookform/resolvers zod sonner
```

```
npm i swiper
```
```
npm i stripe
```

## tRPC
RPC is short for "Remote Procedure Call". It is a way of calling functions on one computer (the server) from another computer (the client). With traditional HTTP/REST APIs, you call a URL and get a response. With RPC, you call a function and get a response.
```
npm i @trpc/server @trpc/client @trpc/next @trpc/react-query @tanstack/react-query
npm i @tanstack/react-query@4.36.1
```

## Configure `package.json`
```
  "scripts": {
    "dev": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts nodemon",
    "generate:types": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types",
    "build": "next build",
    "start": "next start",
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

## State management
```
npm i zustand
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.