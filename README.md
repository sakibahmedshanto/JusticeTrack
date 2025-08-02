# JusticeTrack

A comprehensive justice management system for tracking criminal cases and managing legal processes.

## Features

- **Multi-role Authentication**: Support for Complainants, Police Officers, Judges, and Lawyers
- **Case Management**: File new cases, track existing ones, and manage case statuses
- **Investigation Tools**: Police investigation interface with evidence management
- **Dashboard Views**: Role-specific dashboards for different user types
- **Responsive Design**: Modern UI built with React and Tailwind CSS

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)

If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```

## Project Structure

- `src/components/` - Reusable UI components
- `src/screens/` - Page components for different user roles
- `src/contexts/` - React context providers
- `src/types/` - TypeScript type definitions
- `public/` - Static assets including the logo

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Class Variance Authority
