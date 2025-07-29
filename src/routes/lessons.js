const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new lesson
router.post('/', authMiddleware, lessonController.createLesson);

// Route to get all lessons for a specific course
router.get('/course/:courseId', lessonController.getLessonsByCourse);

// Route to get a specific lesson by ID
router.get('/:id', lessonController.getLessonById);

// Route to update a lesson by ID
router.put('/:id', authMiddleware, lessonController.updateLesson);

// Route to delete a lesson by ID
router.delete('/:id', authMiddleware, lessonController.deleteLesson);

// Route to get all lessons
router.get('/', lessonController.listLessons);

module.exports = router;