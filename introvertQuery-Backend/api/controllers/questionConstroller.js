const question = require('../models/Question');
const Question = require('../models/Question');

const createQuestion = async(req, res) => {
    console.log(req.body);
    // const { question, isAnswered, answer } = req.body;
    const newQuestion = new Question({
        question: req.body.question, 
        isAnswered: req.body.isAnswered, 
        answer: req.body.answer});

    try{
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    }
    catch(err){ 
        console.log(`There is an error occured: ${err}`);
        res.status(500).json({message: 'server error'});
    }

}

const getAllQuestions = async(req,res)=>{
    try{
        const allQuestions = await Question.find();
        res.status(200).json(allQuestions);
    }
    catch(err){
        console.log(`There is an error occured: ${err}`);
        res.status(500).json({message: 'server error'});
    }
}

const answerQuestionById = async(req,res)=>{  //answer string will be passed in req
    try{
        console.log("answer question by id started");
        const questionId = req.params.id;
        console.log(questionId, "after getting id from params");
        const updateAnswer = req.body;
        console.log(req, "stored req.body in updateAnswer");

        const updatedQuestion = await Question.findByIdAndUpdate(questionId, {isAnswered:true ,answer:updateAnswer}, { new : true, runValidators: true }); 
        
        if(!updatedQuestion){
            return res.status(404).send({message:'cant find question with given ID'});
        }

        res.status(200).send(updatedQuestion);

    }
    catch(err){
        console.log(err, "error occured");
        res.status(500).json({message:'server error while updating answer'});
    }
}

const getQuestionById = async(req,res)=>{
    try{
        const questionId = req.params.id;

        const question = await Question.findById(questionId);
        if(!question){
            return res.status(404).send({message: 'can not find question by given Id'});
        }

        res.status(200).send(question);
    }
    catch(err){
        console.log(err, " : error occured while fetching question by ID ");
        res.status(500).json({message: 'server error while getting question by Id'});
    }
}

const getAnsweredQuestions = async(req,res)=>{
    try{
        const answeredQuestions = await Question.find({isAnswered: true}, 'question answer isAnswered');  //second argument gives only those fields mentioned in the string
        res.status(200).send(answeredQuestions);
    }
    catch{
        console.log(err, " : error occured while fetching answered questions");
        res.status(500).json({message: 'server error while getting answered questions'});
    }
}

const getUnansweredQuestions = async(req,res)=>{
    try{
        const unAnsweredQuestions = await Question.find({isAnswered: false}, 'question answer isAnswered');  //second argument gives only those fields mentioned in the string
        res.status(200).send(unAnsweredQuestions);
    }
    catch{
        console.log(err, " : error occured while fetching Unanswered questions");
        res.status(500).json({message: 'server error while getting Unanswered questions'});
    }
}

module.exports = { createQuestion, getAllQuestions, answerQuestionById, getQuestionById, getAnsweredQuestions, getUnansweredQuestions };