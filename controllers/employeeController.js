const employeeModel = require('../model/employeeModel') 
const userModel = require('../model/userModel') 


const employeeController ={
    verifyEmployeeInf:(userInf,callback)=>{
        const employee = userInf.employee
        const user = userInf.user
        const pass = userInf.pass

        employeeModel.getEmployeeInfo(employee,(err,result)=>{
            if(err){
                return callback({err:err})
            } 
            if(result.length > 0){
                if(result[0].Password == pass){
                    userModel.getUserInfo(user,(err,results)=>{
                        if(err){
                            return callback({err:err})
                        } 
                        if(results.length > 0){
                            return callback({auth:true})
                        }else{
                            const error = 'no se encontro el usario'
                            return callback({error:error})
                        }
                    })
                }else{
                    const error = 'contraseña equivocada'
                    return callback({error:error})
                }
            }else{
                const error = 'no se encontro el empleado'
                return callback({error:error})
            }
        })

    } 
}


module.exports = employeeController;

