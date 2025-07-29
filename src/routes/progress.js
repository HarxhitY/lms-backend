const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

// Mark lesson as completed
router.post('/lesson/:lessonId', authMiddleware, progressController.markLessonCompleted);

// Attempt a quiz
router.post('/quiz/:quizId', authMiddleware, progressController.attemptQuiz);

// Get user progress for a course
router.get('/course/:courseId', authMiddleware, progressController.getCourseProgress);

module.exports = router;