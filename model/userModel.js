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
    maxId:(callback)=>{
        const query = 'SELECT MAX(ID)+1 AS id FROM users'
        const conn = dbC.getConn()
        conn.query(query,(err,result)=>{
            if(err){
                return callback(null)
            }
            if(result){
                const Id = result[0].id
                return callback(Id)
            }
        })
    },

    createUser:(userinfo,callback)=>{
        const members = parseInt(userinfo.members) 
        const gender = parseInt(userinfo.gender)

        userModel.maxId((Id)=>{
        
            const userinfoArray = [Id,2,userinfo.username,userinfo.password,userinfo.name,gender,userinfo.birthday,members]
            console.log(userinfoArray)

            const query = 'INSERT INTO users (ID,UserTypeID,Username,Password,FullName,Gender,BirthDate,FamilyCount) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const conn = dbC.getConn()
            conn.query(query,userinfoArray,(err,results)=>{
            if(err){
                console.log(err)
                return callback(err,null)
            }
            if(results){
                return callback(null,results)
            }
            })
        })
    }
}

module.exports = userModel;


