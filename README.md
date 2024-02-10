# DatingApp Demo

A demo project by William Ibarra |a full-stack web application with ASP.NET and Angular, demonstrating key functionalities typical of a dating platform.

## Technologies

- **Backend**: ASP.NET (v7), Entity Framework Core
- **Frontend**: Angular (v17)
- **Others**: AutoMapper, JWT Authentication, SignalR, Docker, AWS

## Features

- **User Authentication**: Secure login and registration with JWT tokens.
- **Profile Management**: Users can create and edit profiles, including photo upload with drag-and-drop functionality.
- **Connectivity**: Features like a private messaging system, user "likes", and real-time notifications enhance user interaction.
- **Data Management**: Implement filtering, sorting, and paging for efficient data handling.
- **Security**: Robust error handling and CSRF protection ensure application security.

## Development Highlights

- **Angular CLI**: Leveraged for component generation, service creation, and application scaffolding.
- **Responsive Design**: Utilized Bootstrap and custom CSS for a responsive, mobile-first user interface.
- **Deployment**: Containerized with Docker and deployed on AWS for scalability and reliability.
- **Best Practices**: Adhered to industry best practices in structuring Angular applications and ASP.NET API development.

##Key Learnings:
- **Angular Mastery**: Advanced component creation, reactive forms, routing, HTTP client integration, and state management with observables.
- **.NET Core Expertise**: Deep understanding of API controllers, middleware, entity relationships, repository pattern, and data seeding.
- **Security & Performance**: Implemented CSRF protection, optimized pagination, filtering, sorting, and caching strategies for enhanced performance and security.
- **UI/UX Design**: Leveraged Bootstrap and custom CSS to craft intuitive and responsive user interfaces, incorporating third-party photo galleries for enriched user profiles.

## Getting Started

### Prerequisites

- .NET Core (v7)
- Node.js and NPM
- Angular CLI (v17)
- Docker and Docker Compose (for containerization)
- AWS Account (for deployment)

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
