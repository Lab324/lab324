/**
 * Created by leisong on 2017-2-27.
 */
var  client = require('./database');
var  uid = require('./uuid');//生成管理员id

var tableName = "userInfo";

mysql = client.getDbCon() ;
function UserInfo(user){
    this.nicknme=user.nicknme;
}
module.exports =UserInfo;
UserInfo.prototype.save = function save(callback) {
    uuid = uid.v4();
    var sql ="insert into t_order_info (id,d_id,p_id,time,date,inter)values(?,?,?,?,?,?)";
    mysql.query(sql,[uuid,this.d_id,this.p_id,this.time,this.date,this.inter],function(err,results,fields){
        if (err) {
            throw err;
        } else {
            return callback(err, results, fields);
        }
    });
};

UserInfo.find=function (callback) {
    var sql = "select * from "+tableName;
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results);
            callback(err,results,fields);
        }
    })
};