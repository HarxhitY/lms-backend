const Lesson = require('../models/lesson');

// Create a new lesson
async function createLesson(req, res) {
    try {
        const { title, videoUrl, resources, courseId } = req.body;
        const newLesson = new Lesson({ title, videoUrl, resources, courseId });
        await newLesson.save();
        res.status(201).json({ message: 'Lesson created successfully', lesson: newLesson });
    } catch (error) {
        res.status(500).json({ message: 'Error creating lesson', error: error.message });
    }
}

// Get all lessons for a specific course
async function getLessonsByCourse(req, res) {
    try {
        const { courseId } = req.params;
        const lessons = await Lesson.find({ courseId });
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving lessons', error: error.message });
    }
}

// Get a specific lesson by ID
async function getLessonById(req, res) {
    try {
        const { id } = req.params;
        const lesson = await Lesson.findById(id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving lesson', error: error.message });
    }
}

// Update a lesson
async function updateLesson(req, res) {
    try {
        const { id } = req.params;
        const updatedLesson = await Lesson.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson updated successfully', lesson: updatedLesson });
    } catch (error) {
        res.status(500).json({ message: 'Error updating lesson', error: error.message });
    }
}

// Delete a lesson
async function deleteLesson(req, res) {
    try {
        const { id } = req.params;
        const deletedLesson = await Lesson.findByIdAndDelete(id);
        if (!deletedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting lesson', error: error.message });
    }
}

// Get all lessons
async function listLessons(req, res) {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving lessons', error: error.message });
    }
}

module.exports = {
    createLesson,
    getLessonsByCourse,
    getLessonById,
    updateLesson,
    deleteLesson,
    listLessons
};