# Marley Spoon Recipe Explorer

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Implementation Requirements](#implementation-requirements)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Technology Stack](#technology-stack)
- [Contributions](#contributions)
- [Trade-offs and Shortcuts](#trade-offs-and-shortcuts)

## Overview

Welcome to Marley Spoon Recipe Explorer, an application built to consume Marley Spoon recipes from the Contentful API and display them in an elegant and intuitive manner. This application is designed to give you a delightful experience while you explore different recipes, view detailed information, and even rate them.

## Features

- **List View**: Displays a preview of all available recipes with their title and image.
- **Detail View**: Provides comprehensive information about a particular recipe, including the title, image, list of tags, description, and chef's name.
- **Rating System**: Allows users to rate a recipe on a scale of 1 to 5.

## Implementation Requirements

- A sample web application that uses the Contentful API to fetch data.
- Two primary views: List view for all recipes and Detail view for a single recipe.
- A production-ready status (although no deployment is needed).

### Bonus

- **Responsive UI**: The application is fully responsive and adapts gracefully on different screen sizes.
- **TypeScript Usage**: Leveraged TypeScript for static type checking.
- **NextJS Framework**: Utilized NextJS for server-side rendering and other benefits.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your system.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/padilhaalucas/marley-spoon.git
    ```
2. Navigate to the project directory:
    ```bash
    cd marley-spoon
    ```
3. Build the Docker images:
    ```bash
    make build
    ```

### Running the App

Docker
1. Start the Docker containers:
    ```bash
    make up
    ```
2. Open your browser and visit `http://localhost:3000`.

Or you can run from pnpm 
1. Run it locally
    ```bash
    pnpm dev
    ```
2. Open your browser and visit `http://localhost:3000`.

To stop the application, you can use the following command:
```bash
make down
```

## Technology Stack

- **React**: For building the UI components.
- **NextJS**: For server-side rendering and improving performance.
- **TypeScript**: For type-checking and enhancing code quality.
- **Docker**: For containerization and ensuring a consistent running environment.

### About Docker Configuration

I use Docker to containerize our application. The `Dockerfile` sets up a Node.js environment, installs required packages, and sets the application to run. I've also used a `docker-compose.yml` file to manage the Docker service, making it easy to build, up, and down the Docker containers through the `Makefile` commands.

## Trade-offs and Shortcuts

Due to the time constraint of 4 hours:

- Unit tests have been skipped.
- CI/CD setup is not implemented.

Feel free to explore, and we hope you enjoy your time with Marley Spoon Recipe Explorer! 🍲👩‍🍳👨‍🍳
