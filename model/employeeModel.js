const dbC = require('../src/database')

const employeeModel={
    getEmployeeInfo:(employee,callback)=>{
        const query = 'SELECT * FROM users WHERE Username = ?'
        const conn = dbC.getConn()
        conn.query(query,employee,(err,result)=>{
            if(err){
                return callback(err,null)
            }
            if(result){
                return callback(null,result)
            }
        })

        // dbC.closeConn()
    }
}

module.exports = employeeModel;


