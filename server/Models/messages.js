var mongoose = require('mongoose');

var messagesSchema=mongoose.Schema({
	username:{type:String,
		required: [true, 'you shoud insert the reciver']
	},
	text:String,
	read:{type:Boolean,default:false},
	sender:String,
	cdate:{type:Date,default:Date.now}
	
}) 

var Message = mongoose.model('Message', messagesSchema);

var createmsg = function(data, callback){
 // data["user"]=userName;
 message=new Message({
 	username:data.username,
 	text:data.text,
 	read:data.read,
 	sender:data.sender,
 })

message.save(function(error){
	if(error){
	console.log('something err')
	}else{
	console.log('saved')

	}


	
})
 //console.log('here------------------',data);
};


var retriveMsg =function(callback){

	Message.find({},function(err,data){
		if(err){
			callback(err,null)
		}else{
			
			callback(null,data)

		}
	}).sort({ cdate: -1 })

}


var updateMsg=function(callback){
	Message.find({username:"monther"},function(err, messages) {
  messages.forEach(function(message) {
    message.read = true;
    message.save();
  });
});
}




module.exports.Message=Message;
module.exports.createmsg=createmsg;
module.exports.retriveMsg=retriveMsg;
module.exports.updateMsg=updateMsg;
