# Task Manager DevOps

![CI/CD](https://github.com/aouinirayen/task-manager-devops/actions/workflows/ci.yml/badge.svg)

## Overview
A full-stack task management application built with a complete DevOps pipeline, developed as a pre-internship project for Linedata.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | Angular 17 + TypeScript |
| Backend | Spring Boot 3 + Java 17 |
| Database | MySQL 8 |
| Containerization | Docker + Docker Compose |
| Web Server | Nginx (reverse proxy) |
| Monitoring | Prometheus + Grafana |
| CI/CD | GitHub Actions |

## Architecture
```
Angular (port 80) -> Nginx -> Spring Boot (port 8081) -> MySQL (port 3306)
                                      |
                              Prometheus (9090)
                                      |
                               Grafana (3000)
```