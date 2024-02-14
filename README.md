# Dating Website Demo

A demo project by William Ibarra | A dating website built as a full-stack web application demo with .NET and Angular, demonstrating key functionalities typical of a dating platform.

## Technologies

- **Backend**: .NET (v7), Entity Framework Core
- **Frontend**: Angular (v17), Bootstrap (v5)
- **Database, Source Control**: SQLite, Git
- **Others**: AutoMapper, JWT Authentication, SignalR, Docker (Production), SSL (HTTPS), CORS

## Features

- **User Authentication**: Secure login and registration with JWT tokens.
- **Profile Management**: Users can create and edit profiles, including photo upload with drag-and-drop functionality.
- **Connectivity**: Features like a private messaging system, user "likes", and real-time notifications to enhance user interaction.
- **Data Management**: Implement filtering, sorting, and paging for efficient data handling.
- **Security**: Robust error handling and CSRF protection ensure application security.
- **Error Handling**: Intrinsic error handling for application monitoring and effective UI/UX.

## Development Highlights

- **Angular CLI**: Leveraged for component generation, service creation, and application scaffolding.
- **Responsive Design**: Utilized Bootstrap and custom CSS for a responsive, mobile-first user interface.
- **Deployment**: Containerized with Docker for portability.
- **Best Practices**: Adhered to industry best practices in structuring Angular applications and .NET API development.

## Key Learnings:
- **Angular Mastery**: Advanced component creation, reactive forms, routing, HTTP/HTTPS client integration, and state management with observables.
- **.NET Core Expertise**: Deep understanding of API controllers, middleware, entity relationships, repository pattern, and data seeding.
- **Security & Performance**: Implemented CSRF protection, optimized pagination, filtering, sorting, and caching strategies for enhanced performance and security.
- **UI/UX Design**: Leveraged Bootstrap and custom CSS to craft intuitive and responsive user interfaces, incorporating third-party photo galleries for enriched user profiles.

## 3 things I would do differently if I approached this project again:
  1. Do not use the latest versions of frameworks and libraries - Many libraries I came across were still not caught up to run with their latest framework versions, therefore I had to come up with alternate and interesting solutions.
  2. Build with the end goal first and work backwards - By this I mean create a simple production build, test it, and build outwards. Do not build many features in development without frequently also testing in production.
  3. Do not try to reinvent the wheel - There are many tried and true ways to implements things. Investigate the "gold standard" methods before development to prevent having to refactor. 

## Getting Started

### Prerequisites

- .NET Core (v7)
- Node.js and NPM
- Angular CLI (v17)
- Docker (for containerization)

### Installation

1. Clone the repository:
```
git clone https://github.com/your-github/datingapp.git
```

2. Install Angular dependencies:
```
cd DatingApp/client
npm install
```

3. Launch the backend API (or run in Visual Studio):
```
dotnet run
```

4. Serve the Angular application:
```
ng serve
```

## Deployment

The application is containerized using Docker, simplifying deployment on cloud platforms like AWS. Refer to `docker-compose.yml` for service configurations.
