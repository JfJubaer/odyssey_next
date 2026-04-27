# Odyssey App

Odyssey App is a modern e-commerce demo built with Next.js (App Router), Firebase Authentication, and Tailwind CSS. It includes public browsing, product details, and protected product management flows.

## Live Link

- Live Demo: [Add your deployed URL here](https://odyssey-next.vercel.app/)

## Key Features

- Responsive black-and-white UI system across all pages
- Firebase email/password and Google login
- Public product browsing with search and filters
- Dynamic product details route (`/items/[id]`)
- Add product flow (protected)
- Manage products flow (protected)
- Product data model consistency across default and user-added products
- Merged product listing:
  - Default products from shared source
  - User-added products from `localStorage`

## Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd odyssey_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 5. Build for production (optional)

```bash
npm run build
npm run start
```

## Route Summary

- `/` : Home page (hero + featured products)
- `/about` : About page
- `/login` : Authentication page (login/register/google)
- `/items` : Product listing (default + localStorage merged)
- `/items/[id]` : Product details from merged product list
- `/items/add` : Protected route to add new product (saved to localStorage)
- `/items/manage` : Protected route to manage only localStorage products

## Tech Stack

- Next.js `16.2.4`
- React `19`
- Tailwind CSS `4`
- Firebase `12`
