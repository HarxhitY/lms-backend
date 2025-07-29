const Course = require('../models/course');

// Create a new course
exports.createCourse = async (req, res) => {
    try {
        const { title, description, instructor, price } = req.body;
        const newCourse = new Course({ title, description, instructor, price });
        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error: error.message });
    }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error: error.message });
    }
};

// Get a course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course', error: error.message });
    }
};

// Enroll in a course
exports.enrollInCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // Logic to enroll user in the course (e.g., add user ID to course's enrolled users)
        res.status(200).json({ message: 'Successfully enrolled in course', course });
    } catch (error) {
        res.status(500).json({ message: 'Error enrolling in course', error: error.message });
    }
};