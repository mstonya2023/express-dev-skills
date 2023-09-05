// routes/skills.js

const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new <-- Define BEFORE show route
router.get('/new', skillsCtrl.new);
// // GET /skills/:id
router.get('/:id', skillsCtrl.show); 
// POST/skills
router.post('/', skillsCtrl.create);
// Delete/skills/:id
router.delete('/:id',skillsCtrl.delete);

module.exports = router;





