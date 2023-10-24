const userModel = require('../model/userModel') 


const userController ={
    verifyUserInf:(userInf,callback)=>{

        const user = userInf.user
        const pass = userInf.pass

        userModel.getUserInfo(user,(err,result)=>{
            if(err){
                return callback({err:err})
            } 
            if(result.length > 0){
                if(result[0].UserTypeID == 1){
                    
                    const error = 'empleados no pueden entrar como usuarios'
                    return callback({error:error})
                }else{
                    if(result[0].Password == pass){
                        return callback({auth:true})
                    }else{
                        const error = 'contraseña equivocada'
                        return callback({error:error})
                    }
                }
            } else{
                const error = 'no se encontro usuario'
                return callback({error:error})
            }
        })

    } 
}

module.exports = userController;

