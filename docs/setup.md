---
id: setup
title: Setup
---

# Getting Started with the Residat API

Welcome to **Residat**, a digital platform aimed at providing a centralized backoffice for managing information related to climate risks in Cameroon. This setup guide will help you configure and run the Residat API and the Residat Front Platform.

## 1. API Authentication

All API requests must be authenticated using JSON Web Tokens (JWT). To obtain a token:

1. Register a new user via the `/register` endpoint.
2. Authenticate with the `/login` endpoint to receive a JWT token.
3. Use the token in your API requests by adding it to the `Authorization` header as `Bearer <token>`.

## 2. Base URL

The base URL for the Residat API is:

<a target="_blank" href="https://github.com/Map-Rank/residat-back-end"> **residat-backend** </a>

---

## Project Setup

Follow the steps below to set up and run the Residat platform on your local environment:

### Step 1: Install Dependencies

Run the following command to install the necessary PHP dependencies using Composer:

```sh
composer install
```

### Step 2: Install Dependencies

```sh
copy .env.example .env
```

### Step 3: Generate the Application Key

```sh
php artisan key:generate
```

### Step 4: Configure Database Connection

```sh
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=your_database_password
APP_URL=your_app_url
```

### Step 5: Set Up Docker (Optional)

```sh
docker-compose up -d
```
### Step 6: Run Migrations and Seeders

```sh
php artisan migrate --seed