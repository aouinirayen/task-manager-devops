# Task Manager DevOps

![CI/CD](https://github.com/aouinirayen/task-manager-devops/actions/workflows/ci.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-Compose-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green)
![Angular](https://img.shields.io/badge/Angular-17-red)

> A full-stack task management application built with a complete DevOps pipeline, developed as a pre-internship project for **Linedata** (June 28, 2026).

---

## Architecture

`````n Angular (port 80)
       |
     Nginx (reverse proxy)
       |
 Spring Boot REST API (port 8081)
       |
    MySQL 8 (port 3306)
       |
Prometheus (9090) --> Grafana (3000)
`````n
---

## Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| Frontend | Angular 17 + TypeScript | SPA with routing, HTTP Client |
| Backend | Spring Boot 3 + Java 17 | REST API, Spring Data JPA |
| Database | MySQL 8 | Auto-schema via Hibernate |
| Containerization | Docker + Docker Compose | 5 services orchestrated |
| Web Server | Nginx | Reverse proxy + Angular Router |
| Monitoring | Prometheus + Grafana | JVM, HTTP, CPU metrics |
| CI/CD | GitHub Actions | Build, Test, Docker pipeline |

---

## Features

- **Dashboard** — task statistics, completion rate, progress bar
- **My Tasks** — full CRUD with inline editing, status badges
- **New Task** — form with animated toggle, validation
- **Real-time monitoring** — Grafana dashboards from Spring Boot Actuator

---

## Project Structure

`````ntask-manager-devops/
├── task-manager-backend/
│   ├── controller/   # REST endpoints
│   ├── service/      # Business logic
│   ├── repository/   # JpaRepository
│   ├── entity/       # Task entity
│   ├── Dockerfile
│   └── pom.xml
├── task-manager-frontend/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── task-list/
│   │   └── task-form/
│   ├── services/     # HTTP calls
│   ├── Dockerfile
│   └── nginx.conf
├── monitoring/
│   └── prometheus.yml
├── docker-compose.yml
└── .github/workflows/ci.yml
`````n
---

## REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/{id} | Get task by ID |
| POST | /tasks | Create new task |
| PUT | /tasks/{id} | Update task |
| DELETE | /tasks/{id} | Delete task |

---

## CI/CD Pipeline

`````nPush to main
     |
     +-- Build Spring Boot (Maven) --> Upload jar
     +-- Build Angular (Node.js 18) --> Production build
     +-- Build Docker Images (backend + frontend)
`````n
---

## Run Locally

```bash
git clone https://github.com/aouinirayen/task-manager-devops.git
cd task-manager-devops
docker compose up --build
`````n
| Service | URL |
|---------|-----|
| Frontend | http://localhost |
| Backend API | http://localhost:8081/tasks |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3000 |

---

## Monitoring

Spring Boot exposes metrics via /actuator/prometheus.
Prometheus scrapes every 5 seconds.
Grafana shows: JVM Heap Memory, HTTP requests/sec, CPU usage.

---

## What I Learned

- Containerizing multi-service apps with Docker Compose
- Nginx as reverse proxy for Angular Router
- Solving CORS between Docker containers
- CI/CD pipeline that catches errors before production
- Real-time monitoring with Prometheus + Grafana
- Docker networking and service discovery

---

## Author

**Aouini Rayen** — Cloud & DevOps Engineering Student at ESPRIT