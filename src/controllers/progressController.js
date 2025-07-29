const Progress = require('../models/progress');

// Mark a lesson as completed
async function markLessonCompleted(req, res) {
    const { userId, lessonId } = req.body;

    try {
        let progress = await Progress.findOne({ userId });

        if (!progress) {
            progress = new Progress({ userId, completedLessons: [] });
        }

        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            await progress.save();
        }

        res.status(200).json({ message: 'Lesson marked as completed', progress });
    } catch (error) {
        res.status(500).json({ message: 'Error marking lesson as completed', error });
    }
}

// Retrieve user progress
async function getUserProgress(req, res) {
    const { userId } = req.params;

    try {
        const progress = await Progress.findOne({ userId });

        if (!progress) {
            return res.status(404).json({ message: 'Progress not found' });
        }

        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving progress', error });
    }
}

// Retrieve quiz scores
async function getQuizScores(req, res) {
    const { userId } = req.params;

    try {
        const progress = await Progress.findOne({ userId });

        if (!progress) {
            return res.status(404).json({ message: 'Progress not found' });
        }

        res.status(200).json({ quizScores: progress.quizScores });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving quiz scores', error });
    }
}

// Attempt a quiz (stub, implement as needed)
async function attemptQuiz(req, res) {
    res.status(200).json({ message: 'Quiz attempt logic not implemented yet.' });
}

// Get course progress (stub, implement as needed)
async function getCourseProgress(req, res) {
    res.status(200).json({ message: 'Course progress logic not implemented yet.' });
}

module.exports = {
    markLessonCompleted,
    attemptQuiz,
    getCourseProgress,
    getUserProgress,
    getQuizScores
};