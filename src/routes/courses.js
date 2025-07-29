const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new course
router.post('/', authMiddleware, courseController.createCourse);

// Route to get all courses
router.get('/', courseController.getAllCourses);

// Route to get a specific course by ID
router.get('/:id', courseController.getCourseById);

// Route to enroll in a course
router.post('/:id/enroll', authMiddleware, courseController.enrollInCourse);

module.exports = router;