const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// In-memory array to store students
let students = [];

// 1. Home Route
app.get('/', (req, res) => {
    res.status(200).send('Student Management API is running');
});

// 2. POST - Create Student
app.post('/api/students', (req, res) => {
    try {
        const { id, name, email, course, age } = req.body;

        // Check mandatory fields
        if (
            id === undefined || id === null ||
            !name || !email || !course ||
            age === undefined || age === null
        ) {
            return res.status(400).json({
                message: 'All fields are mandatory'
            });
        }

        // Check duplicate ID
        const existingStudent = students.find(
            s => String(s.id) === String(id)
        );

        if (existingStudent) {
            return res.status(409).json({
                message: 'Student ID already exists'
            });
        }

        // Create student
        const student = { id, name, email, course, age };

        students.push(student);

        res.status(201).json({
            message: 'Student created successfully',
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// 3. GET - Get All Students
app.get('/api/students', (req, res) => {
    try {
        res.status(200).json({
            message: 'Students retrieved successfully',
            students: students
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// 4. GET - Get Student By ID
app.get('/api/students/:id', (req, res) => {
    try {
        const id = req.params.id;

        const student = students.find(
            s => String(s.id) === id
        );

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.status(200).json({
            message: 'Student found successfully',
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// 5. PUT - Update Student
app.put('/api/students/:id', (req, res) => {
    try {
        const id = req.params.id;

        const student = students.find(
            s => String(s.id) === id
        );

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        const { name, email, course, age } = req.body;

        if (
            !name || !email || !course ||
            age === undefined || age === null
        ) {
            return res.status(400).json({
                message: 'All fields are mandatory'
            });
        }

        // Update student details
        student.name = name;
        student.email = email;
        student.course = course;
        student.age = age;

        res.status(200).json({
            message: 'Student updated successfully',
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// 6. DELETE - Delete Student
app.delete('/api/students/:id', (req, res) => {
    try {
        const id = req.params.id;

        const index = students.findIndex(
            s => String(s.id) === id
        );

        if (index === -1) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        const deletedStudent = students.splice(index, 1);

        res.status(200).json({
            message: 'Student deleted successfully',
            student: deletedStudent[0]
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// 7. Invalid Route Handler
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});