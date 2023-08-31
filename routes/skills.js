// routes/skills.js

const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

module.exports = router;





