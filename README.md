# Tootonyar

Tootonyar is a front-end MVP sample for a B2B wholesale tobacco products platform. This project is designed with a focus on the traditional retail market and simulates processes such as inventory viewing, price checking, order registration, credit management, order tracking, and admin panel management within a responsive user experience.

This version uses demo data and was built to present the idea, validate the product, demonstrate user flows, and prepare the path for developing the real version.

## Tech Stack

- **HTML5**: Main document structure in `index.html`
- **CSS3**: Base styles, custom scrollbar, and font in `src/index.css`
- **JavaScript**: Application logic, state management, and components with JSX
- **React**: Component-based user interface development
- **Vite**: Fast development, build, and preview tool
- **Tailwind CSS**: Color system, spacing, and responsive layout design
- **Phosphor Icons**: Icons for panels, navigation, and product cards
- **ESLint**: JavaScript/React code quality checking

## Key Features

- **Product landing page** with brand message, main value propositions, CTA, and Persian RTL design.
- **Digital business file** including idea analysis, value creation, business model canvas, and growth path.
- **Marketing plan** including customer acquisition channels, marketing funnel, KPIs, content, advertising, and social media.
- **Product roadmap** with development phases, technical challenges, market risks, and risk mitigation strategies.
- **Customer panel demo** with demo login, account dashboard, product list, search, category filtering, shopping cart, cooperation discount, cash/credit payment method, and order history.
- **Admin panel demo** with statistics overview, order management, inventory and pricing management, and customer and credit list.
- **Responsive design** for desktop and mobile with a mobile menu and usable sidebars across different screen sizes.
- **Mock data** for products, orders, and customers in `src/data/mockData.js`.

## Workflow & Development Process

This project was built with a modern hybrid workflow that connects product design, LLM-assisted implementation, and fast deployment:

1. **Design Phase — Variant**
   - The initial user interface design and visual structure of the product were created using **Variant**.
   - In this phase, the main user paths, visual tone, dark color palette, card structure, panels, and Persian RTL experience were defined.

2. **Implementation — Claude Code**
   - The initial design was then converted into executable code with the help of **Claude Code** and an LLM-assisted coding approach.
   - React components, customer panel states, shopping cart flow, content pages, demo data, and the Tailwind CSS structure were implemented during this phase.

3. **Deployment — GitHub + Vercel**
   - The project code is managed through **GitHub**.
   - The web version is deployed with **Vercel** so that every change in the repository can be built and deployed quickly.

This workflow allows Variant to shape the user experience, Claude Code to quickly convert the design into an interactive product, and Vercel to publish the web version simply and continuously.

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── admin/
│   │   │   ├── APCustomers.jsx
│   │   │   ├── APInventory.jsx
│   │   │   ├── APOrders.jsx
│   │   │   └── APOverview.jsx
│   │   ├── customer/
│   │   │   ├── CPCart.jsx
│   │   │   ├── CPCredit.jsx
│   │   │   ├── CPDashboard.jsx
│   │   │   ├── CPOrders.jsx
│   │   │   └── CPProducts.jsx
│   │   ├── views/
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── BusinessModelView.jsx
│   │   │   ├── CustomerPanel.jsx
│   │   │   ├── HomeView.jsx
│   │   │   ├── MarketingView.jsx
│   │   │   └── RoadmapView.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileMenu.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── utils/
│   │   └── formatMoney.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Setup Instructions

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd tutunyar-main
npm install
```

### Run Locally

```bash
npm run dev
```

After running the command above, the local Vite URL will be displayed in the terminal. The project is usually available at the following address:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment

This project is suitable for deployment on **Vercel** because it is built with Vite and produces a standard build output.

Recommended workflow:

1. Push the project to GitHub.
2. Create a new project in Vercel and import the GitHub repository.
3. Confirm Vercel’s default settings for Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Run the deployment.

After connecting GitHub to Vercel, every new push to the main branch can be built and deployed automatically.

## Notes

- The current project data is demo data and is stored in `src/data/mockData.js`.
- Customer and admin login are in demo mode in the current version and are not connected to a backend or real authentication.
- Payment, financial credit scoring, warehouse integration, and operational APIs are simulated in this version.
