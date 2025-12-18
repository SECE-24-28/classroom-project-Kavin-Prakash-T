const express = require("express");
const {
    getStudents,
    addStudents
} = require("../controllers/studentsController");

const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudents);

module.exports = router;
