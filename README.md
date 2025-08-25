# ChronosFit Next.js App

This repository contains a Next.js implementation of the ChronosFit booking application. It allows users to reserve class times, view the gym location on a map and initiate a payment through Mercado Pago.

## Features

- **Reservation booking**: Users enter their name and phone number, select one or more class times, and confirm the reservation.
- **Payment integration**: A "Pagar" button calls an API route (`/api/checkout`) and redirects to Mercado Pago. In this demo the endpoint returns a placeholder link.
- **Map embed**: An embedded Google map shows the ChronosFit San Martín location (Lavalle 1992, San Martín, Mendoza).
- **Responsive design**: Built with React and Tailwind CSS for a clean, mobile-friendly interface.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Install

Clone this repo and install dependencies:

```bash
git clone https://github.com/maty91ok/chronosfit-next.git
cd chronosfit-next
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for production

```bash
npm run build
npm start
```

### Notes

- The `/api/checkout` endpoint currently returns a placeholder `init_point`. To integrate real payments, replace the logic in `pages/api/checkout.js` with a call to the Mercado Pago SDK and handle payment webhooks.
- Update the map URL in `pages/index.js` if you need to change the location or adjust the zoom level.
