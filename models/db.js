var mongoose = require("mongoose")
var db = mongoose.createConnection("mongodb://127.0.0.1:27017/mongo")
db.once("open",()=>{
	console.log("数据库连接成功!")
})
module.exports = db
