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
        const members = parseInt(userinfo.members) 
        const gender = parseInt(userinfo.gender)

        const userinfoArray = [userinfo.username,userinfo.name,members,userinfo.birthday,userinfo.password,gender]
        const query = 'INSERT INTO users (Username, FullName, FamilyCount, BirthDate, Password, Gender) VALUES (?, ?, ?, ?, ?, ?)';
        const conn = dbC.getConn()

        console.log(userinfoArray)

        conn.query(query,userinfoArray,(err,results)=>{
            if(err){
                console.log(err)
                return callback(err,null)
            }
            if(results){
                return callback(null,results)
            }
        })

    }
}

module.exports = userModel;


