# Learning Management System (LMS) Backend

This is a basic Learning Management System (LMS) backend built with Node.js and Express. The application provides features for user authentication, course management, lessons, quizzes, and progress tracking.

## Features

- User Authentication: Sign up and log in using JWT.
- Course Management: Create, view, and enroll in courses.
- Lesson Management: Add and retrieve lesson details within courses.
- Quiz Management: Create quizzes and retrieve quiz questions.
- Progress Tracking: Track user progress, mark lessons as completed, and retrieve quiz scores.

## Project Structure

```
lms-backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── index.js          # Configuration settings
│   ├── controllers
│   │   ├── authController.js  # User authentication functions
│   │   ├── courseController.js # Course management functions
│   │   ├── lessonController.js # Lesson management functions
│   │   ├── quizController.js   # Quiz management functions
│   │   └── progressController.js # Progress tracking functions
│   ├── models
│   │   ├── user.js            # User model
│   │   ├── course.js          # Course model
│   │   ├── lesson.js          # Lesson model
│   │   ├── quiz.js            # Quiz model
│   │   └── progress.js        # Progress model
│   ├── routes
│   │   ├── auth.js            # Authentication routes
│   │   ├── courses.js         # Course routes
│   │   ├── lessons.js         # Lesson routes
│   │   ├── quizzes.js         # Quiz routes
│   │   └── progress.js        # Progress tracking routes
│   ├── middleware
│   │   └── authMiddleware.js   # Authentication middleware
│   └── utils
│       └── index.js           # Utility functions
├── package.json                # NPM configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd lms-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables (e.g., database connection details) in a `.env` file.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/signup`: Sign up a new user
  - `POST /api/auth/login`: Log in an existing user

- **Courses**
  - `GET /api/courses`: Retrieve all courses
  - `POST /api/courses`: Create a new course

- **Lessons**
  - `GET /api/lessons/:courseId`: Retrieve lessons for a specific course

- **Quizzes**
  - `GET /api/quizzes/:courseId`: Retrieve quizzes for a specific course

- **Progress**
  - `POST /api/progress`: Mark a lesson as completed
  - `GET /api/progress/:userId`: Retrieve progress data for a user

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

