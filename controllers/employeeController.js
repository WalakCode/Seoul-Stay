const userModel = require('../model/employeeModel') 


const employeeController ={
    verifyEmployeeInf:(userInf,callback)=>{
        const employee = userInf.employee
        const user = userInf.user
        const pass = userInf.pass

        userModel.getEmployeeInfo({user,employee},(err,result)=>{
            if(err){
                return callback({err:err})
            } 
        })

    } 
}


module.exports = employeeController;

