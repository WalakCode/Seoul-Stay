const dbC = require('../src/database')
const { v4: uuidv4 } = require('uuid');

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
        const guid = uuidv4();
        const Upguid = guid.toUpperCase()

        userModel.maxId((Id)=>{
        
            const userinfoArray = [Upguid,Id,2,userinfo.username,userinfo.password,userinfo.name,gender,userinfo.birthday,members]

            const query = 'INSERT INTO users (GUID,ID,UserTypeID,Username,Password,FullName,Gender,BirthDate,FamilyCount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
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


