var mongoose = require("mongoose")
var db = require("./db.js")
var bookSchema = new mongoose.Schema({
	bookName:{type:String},
	author:{type:String},
	price:{type:Number},
	category:{type:Array}
})
bookSchema.statics.findBookByName = function(bookName,callBack){
	var findCondition = {"bookName":bookName}
	if (bookName==""||bookName==null||bookName.length==0) {
		findCondition = {}
	}
	this.model("Book").find(findCondition,callBack)
}
var BookModel = db.model("Book",bookSchema)
module.exports = BookModel