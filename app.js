const express = require('express');
const controller= require('./controller');
const app = express();
app.use(express.json()); //middleware-to convert all request to plain JSON
app.post('/insert', controller.insertdata);
app.delete('/delete',controller.deleteStudent)
app.get('/getAllStudents',controller.getAllStudents)
app.get('/getStudentByRollNo',controller.getStudentByRollNo);
app.put('/editStudent',controller.editStudent);
app.get('/paramscheck/:id',(req,res)=>{
    console.log((req.params.id));
    res.send("Params Checked")
})
app.get('/querycheck',(req,res)=>{
    console.log(req.query);
    res.send("Query Params Checked")
})
//http://localhost:4000/querycheck?name=gokul&dept=cse
app.listen(4000);