# MessTrack Backend

## Overview

MessTrack is a hostel mess management system built using Spring Boot. It helps students stay informed about daily menus, announcements, and polls while allowing hostel administrators to manage hostel-related information efficiently.

## Features

### Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* BCrypt Password Encryption
* Role-Based Access Control

### Roles

* STUDENT
* HOSTEL_ADMIN
* SUPER_ADMIN

### Menu Management

* Create Menu
* View Menu
* Update Menu
* Delete Menu

### Announcement Management

* Create Announcements
* View Announcements
* Update Announcements
* Delete Announcements

### Poll System

* Create Polls
* View Polls
* View Active Polls
* View Poll Results
* Delete Polls

### Voting System

* One User = One Vote
* Poll Expiry Validation
* Vote Tracking

### Admin Features

* Promote STUDENT to HOSTEL_ADMIN
* Secure Role-Based Endpoints

---

## Tech Stack

* Java
* Spring Boot
* Spring Security
* JWT
* PostgreSQL
* Maven
* Hibernate / JPA

---

## Project Structure

```text
controller/
service/
repository/
entity/
dto/
config/
exception/
```

---

## API Highlights

### Authentication

```http
POST /register
POST /login
```

### Menu

```http
GET    /menu
POST   /menu
PUT    /menu/{id}
DELETE /menu/{id}
```

### Announcements

```http
GET    /announcement
POST   /announcement
PUT    /announcement/{id}
DELETE /announcement/{id}
```

### Polls

```http
GET    /poll
POST   /poll
POST   /poll/{pollId}/vote
GET    /poll/results/{pollId}
GET    /poll/active/{college}/{hostel}
DELETE /poll/{id}
```

### Admin

```http
PUT /admin/promote/{email}
```

---

## Security

Protected endpoints require a valid JWT token in the Authorization header:

```http
Authorization: Bearer <token>
```

---

## Future Improvements

* React Frontend
* Deployment
* Swagger Documentation
* Docker Support

---

## Author

Aditya Dwivedi
B.Tech CSE (IoT)
Bakhtiyarpur College of Engineering
