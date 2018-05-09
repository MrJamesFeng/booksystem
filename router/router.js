var Book = require("../models/Book.js")
exports.showIndex = function(req,res,next) {
	Book.findBookByName("",function(err,result){
		if (err) {
			console.log(err);
		}
		res.render("index",{books:result})
	})
}
exports.addBookView = function(req,res,next) {
	res.render("addBook")
}
exports.addBook = function(req,res,next) {
	res.writeHead(200, {'content-type': 'text/plain'});
	Book.create(req.query,function(err){
		if (err) {
			res.end("-1")
		}
		res.end("1")
	})
}
exports.editBook = function(req,res,next) {

}
exports.editBookView = function(req,res,next) {
	Book.findBookByName(req.query,function(err,result){
		if (err) {
			console.log(err);
		}
		res.render("editBook",{book:result[0]})
	}
}
