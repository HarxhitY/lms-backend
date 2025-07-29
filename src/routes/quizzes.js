const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new quiz
router.post('/', authMiddleware, quizController.createQuiz);

// Route to get all quizzes
router.get('/', quizController.listQuizzes);

// Route to get a specific quiz by ID
router.get('/:id', quizController.getQuizById);

// Route to update a quiz
router.put('/:id', authMiddleware, quizController.updateQuiz);

// Route to delete a quiz
router.delete('/:id', authMiddleware, quizController.deleteQuiz);

module.exports = router;