const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questionConstroller');
const question = require('../models/Question');

router.post('/add-question', questionController.createQuestion);
router.get('/get-questions', questionController.getAllQuestions);
router.patch('/update-question/:id', questionController.answerQuestionById);
router.get('/get-question/:id', questionController.getQuestionById);
router.get('/get-answered-questions', questionController.getAnsweredQuestions);
router.get('/get-unanswered-questions', questionController.getUnansweredQuestions);

module.exports = router;