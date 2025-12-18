const Student = require("../models/Student");

const getStudents = async (req, res) => {
    const students = await Student.find();
    res.status(200).json(students);
};

const addStudents = async (req, res) => {
    try {
        const newStudent = {
            roll_no: req.body.roll_no,
            name: req.body.name,
            age: req.body.age,
            class: req.body.class,
        };

        const student = await Student.create(newStudent);

        res.status(201).json({
            success: "Student Added",
            student: student
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getStudents,
    addStudents
};
