# API Documentation

Welcome to the API documentation for Residat. This document provides an overview of the API endpoints available for use.

## Overview

The API allows users to interact with the Residat service programmatically. Below are some of the key features and endpoints.

## Endpoints

## API Routes

### Authenticated Routes (Middleware: `auth:sanctum`)
These routes require the user to be authenticated via the `sanctum` middleware.

- `POST /verify-token`: Verify the authentication token.
- `POST /logout`: Log out the authenticated user.
- `GET /verify-email/{id}/{hash}`: Verify user email (named route: `verification.verify`).
- `POST /email/resend-verification-notification`: Resend email verification (named route: `verification.resend`).

### Post Management
- `Resource /post`: Provides the following actions for managing posts:
  - `GET /post`: List all posts.
  - `POST /post`: Create a new post.
  - `GET /post/{id}`: Show details of a specific post.
  - `PUT /post/{id}`: Update an existing post.
  - `DELETE /post/{id}`: Delete a post.
  
- `POST /post/like/{id}`: Like a specific post.
- `POST /post/comment/{id}`: Comment on a specific post.
- `POST /post/share/{id}`: Share a specific post.

### Event Management
- `Resource /events`: Provides the following actions for managing events:
  - `GET /events`: List all events.
  - `POST /events`: Create a new event.
  - `GET /events/{id}`: Show details of a specific event.
  - `PUT /events/{id}`: Update an event.
  - `DELETE /events/{id}`: Delete an event.

### Report Management
- `Resource /reports`: Provides CRUD operations for reports.

### Notification Management
- `Resource /notifications`: Provides the following actions for managing notifications:
  - `GET /notifications`: List all notifications.
  - `POST /notifications`: Create a notification.
  - `GET /notifications/{id}`: Show a specific notification.
  - `PUT /notifications/{id}`: Update a notification.
  - `DELETE /notifications/{id}`: Delete a notification.
  
- `GET /testascendant`: Test ascendant notification in the system.

### Feedback Management
- `POST /create-feedback`: Submit feedback for the system.

### User Profile Management
- `GET /profile`: View the authenticated user's profile.
- `GET /profile/detail/{id}`: View details of a specific user's profile.
- `PUT /profile/update/{id}`: Update a specific user's profile (named route: `update.profile`).
- `DELETE /delete-user`: Delete the authenticated user's account (named route: `delete.user`).
- `GET /profile-interaction`: Get interactions related to the user's profile.
- `DELETE /delete-interaction/{id}`: Delete a specific interaction (named route: `delete.interaction`).

### Password Management
- `PUT /password/update`: Update the user's password.

### Follower/Following Management
- `POST /follow/{id}`: Follow a specific user.
- `POST /unfollow/{id}`: Unfollow a specific user.
- `GET /followers/{id}`: Get the list of followers for a user.
- `GET /following/{id}`: Get the list of users that the authenticated user is following.

---

### Public Routes (No Authentication Required)

#### Post Viewing
- `GET /get-all-posts`: View all posts without authentication.
- `GET /one-post/{id}`: View a specific post without authentication.

#### Event Viewing
- `GET /get-all-events`: View all events without authentication.
- `GET /one-event/{id}`: View a specific event without authentication.

#### User Authentication & Registration
- `POST /login`: Log in a user.
- `POST /register`: Register a new user.

#### Zone Management
- `GET /zone`: Get all zones (named route: `zone.index`).
- `GET /zone/{id}`: View details of a specific zone (named route: `zone.show`).

#### Sector Management
- `GET /sector`: Get all sectors (named route: `sector.index`).
- `GET /sector/{id}`: View details of a specific sector (named route: `sector.show`).

#### Password Recovery
- `POST /forgot-password`: Request a password reset link (named route: `password.reset`).
- `POST /reset-password`: Reset the user's password.

#### Company Requests
- `POST /create/request`: Create a request for a company.

## Conclusion

This is a basic overview of the API. For detailed usage instructions, please refer to the specific endpoint documentation.