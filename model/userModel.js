const dbC = require('../src/database')

const userModel={
    getUserInfo:(userInf,callback)=>{
        const query = 'SELECT * FROM users WHERE Username = ?'
        const conn = dbC.getConn()
        conn.query(query,userInf,(err,result)=>{
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

module.exports = userModel;


