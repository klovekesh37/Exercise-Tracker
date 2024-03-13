const express=require('express')
const router= express.Router();

let Excercise=require('../models/excercise.model');

router.get('/',(req,res) =>{
    Excercise.find()
    .then(excercises => res.json(excercises))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.post('/add',((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
  
    const newExercise = new Excercise({
      username,
      description,
      duration,
      date,
    });
  
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));

}));

router.delete('/:id',(req,res)=>{
    Excercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Excercise deleted'))
    .catch((err)=> res.status(400).json('Error '+ err))
});

module.exports=router;