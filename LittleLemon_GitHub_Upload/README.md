# Little Lemon — Table Reservations

A responsive React restaurant website with a table booking flow, client-side validation, and tests. This is a **new educational implementation** inspired by the supplied Little Lemon reference, with a similar Create React App structure and dependency set. The restaurant photos and logo were supplied in the reference archive.

## Requirements

- Node.js 18+ and npm

## Setup

```bash
npm ci
npm start
```

Open http://localhost:3000.

## Checks

```bash
CI=true npm test -- --watch=false
npm run build
```

## Features

- Home page: navigation, featured dishes, reviews, about section
- Accessible booking form: date, time, party size, occasion, name, email
- Date-specific time slots, validation, error messages, confirmation page
- Mobile navigation and responsive layouts
- Unit tests for booking behavior

## Project structure

- `src/components/`: reusable UI and form components
- `src/pages/`: route-level screens
- `src/api.js`: deterministic demo availability and mock submission
- `src/assets/`: local image assets

## Important limitation

Bookings are **simulated locally**: there is no backend, persistence, or real reservation service. To accept real bookings, replace the mock API with a secure backend endpoint.

## Accessibility

Semantic landmarks, labelled inputs, visible focus states, status/error announcements, and keyboard-operable navigation. Review with assistive technology before production use.
