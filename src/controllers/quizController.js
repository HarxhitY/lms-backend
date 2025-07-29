const Quiz = require('../models/quiz');

// Create a new quiz
async function createQuiz(req, res) {
    try {
        const quizData = req.body;
        const newQuiz = new Quiz(quizData);
        await newQuiz.save();
        res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
    } catch (error) {
        res.status(500).json({ message: 'Error creating quiz', error: error.message });
    }
}

// Get all quizzes
async function listQuizzes(req, res) {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving quizzes', error: error.message });
    }
}

// Get a specific quiz by ID
async function getQuizById(req, res) {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json({ quiz: quiz });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving quiz', error: error.message });
    }
}

// Update a quiz
async function updateQuiz(req, res) {
    try {
        const quizId = req.params.id;
        const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, req.body, { new: true });
        if (!updatedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json({ message: 'Quiz updated successfully', quiz: updatedQuiz });
    } catch (error) {
        res.status(500).json({ message: 'Error updating quiz', error: error.message });
    }
}

// Delete a quiz
async function deleteQuiz(req, res) {
    try {
        const quizId = req.params.id;
        const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
        if (!deletedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting quiz', error: error.message });
    }
}

module.exports = {
    createQuiz,
    listQuizzes,
    getQuizById,
    updateQuiz,
    deleteQuiz
};