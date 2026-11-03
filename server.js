
const express = require('express');
require('dotenv').config();

const app = express();

// Middleware to accept JSON data
app.use(express.json());

// Store student records
let students = [];

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to FSD Mid Term Project!');
});

// POST API - Create Student Record
app.post('/api/students', (req, res) => {

    const { id, name, email, course, age } = req.body;

    // Validate mandatory fields
    if (
        id === undefined || id === null ||
        !name || !email || !course ||
        age === undefined || age === null
    ) {
        return res.status(400).json({
            success: false,
            message: 'All fields are mandatory: id, name, email, course, age'
        });
    }

    // Create student object
    const student = {
        id: id,
        name: name,
        email: email,
        course: course,
        age: age
    };

    // Add student to array
    students.push(student);

    // Send response
    res.status(201).json({
        success: true,
        message: 'Student record created successfully',
        student: student
    });
});

// GET API - Display all students
app.get('/api/students', (req, res) => {
    res.status(200).json({
        success: true,
        students: students
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

// Port configuration
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});
