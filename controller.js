let data=[];
function getStudentByRollNo(req,res){
    console.log("[INFO] Entered into Get Student By RollNo");
    const RollNo=req.body.RollNo;
    const Student=data.find(Student=>Student.RollNo===RollNo)
    if(Student){
        console.log("[SUCCESS] Student Found");
        res.status(200).send(Student);
    }else{
        console.log("[ERROR] Student Not Found");
        res.status(404).send("Student Not Found");
    }
}
function insertdata(req, res) {
    data.push(req.body);
    console.log("data:", data)
    res.send("Data Inserted")
}
function insertdata(req, res) {
    console.log("[INFO] Entered into Insert Data");
    let isDuplicate = checkIfDataIsPresent(req.body.RollNo);
    if (!isDuplicate) {
        console.log("[INFO] No Duplicate Found");
        data.push(req.body);
        console.log(data)
        console.log("[SUCCESS] DAta Inserted Successfully");
        res.send('Data Inserted');
    }
    else {
        console.log("[INFO] Duplicate Record Found");

        res.send("Record Already Exists")
    }
}
function checkIfDataIsPresent(RollNo) {
    for (let i of data) {
        if (i.RollNo === RollNo) {
            return true;
        }
    }
    return false;
}
function deleteStudent(req,res){
    let RollNo=req.body.RollNo;
    let index=data.findIndex(s=>s.RollNo===RollNo);
    if(index!==-1){
        data.splice(index,1);
        res.send("Student Deleted");
    }else{
        res.status(404).send("Student Not Found")
    }
}
function getAllStudents(req, res) {
    console.log("[INFO] Entered into Get All Students");
    res.send(data);
}
function editStudent(req,res){
    let RollNo=req.body.RollNo;
    let index=data.findIndex(s=>s.RollNo===RollNo);
    if(index!==-1){
        data[index]=req.body;
        res.send("Student Updated");
    }else{
        res.status(404).send("Student Not Found")
    }
}
module.exports = { getStudentByRollNo, insertdata, deleteStudent, getAllStudents,editStudent };