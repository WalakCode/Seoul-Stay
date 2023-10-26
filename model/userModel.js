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
    },
    createUser:(userinfo,callback)=>{
        const userinfoArray = [userinfo.username,userinfo.name,userinfo.members,userinfo.birthday,userinfo.password,userinfo.gender]
        const query = 'INSERT INTO users (Username,FullName,FamilyCount,BirthDate,Password,Gender) VALUES ?'
        const conn = dbC.getConn()
        conn.query(query,[userinfoArray],(err,r))

    }
}

module.exports = userModel;


