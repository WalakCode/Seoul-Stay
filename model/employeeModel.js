const dbC = require('../src/database')

const employeeModel={
    getEmployeeInfo:({user,employee},callback)=>{
        const query = 'xxxxx'
        const conn = dbC.getConn()
        conn.query(query,userInf,(err,result)=>{
            if(err){
                return callback(err,null)
            }
            if(result){
                return callback(null,result)
            }
        })
    }
}

module.exports = employeeModel;


