var mongoose = require('mongoose');

var messagesSchema=mongoose.Schema({
	username:{type:String,
		required: [true, 'you shoud insert the reciver']
	},
	text:String,
	read:{type:Boolean,default:false}
	
}) 

var Message = mongoose.model('Message', messagesSchema);

var createmsg = function(data, callback){
 // data["user"]=userName;
 message=new Message({
 	username:data.username,
 	text:data.text,
 	read:data.read
 })

message.save(function(error){
	if(error){
	console.log('something err')
	}else{
	console.log('saved')

	}


	
})
 //console.log('here------------------',data);
  Message.create(data, callback)
};


var retriveMsg =function(callback){
	Message.find({},function(err,data){
		if(err){
			callback(err,null)
		}else{
			callback(null,data)
		}
	})

}














// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// var bcrypt = require('bcrypt-nodejs');

// var messagesSchema=mongoose.Schema({
// 	username:{type:String,
// 		required: [true, 'you shoud insert the reciver']
// 	},
// 	text:String,
// 	read:Boolean
// }) 

// var Message=mongoose.model('Message',messagesSchema);




// var createmsg=function(req,res){

// 	var obj={
// 		username:'req.body.username',
// 		text:'req.body.text',
// 		read:true
// 	}

// 	var msg=new Message(obj)

// 	Message.Create(msg,function(err,data){
// 		if(err){
// 			console.log('there is an error')
// 		}else{
// 			console.log('saved')
// 		}
// 	})
// }


module.exports.Message=Message;
module.exports.createmsg=createmsg;
module.exports.retriveMsg=retriveMsg;
