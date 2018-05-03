
var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    nameNewCategory:String
});
var Categorys = mongoose.model('Categorys', categorySchema);
module.exports= Categorys;

// var createCategory= function(nameNewCategory,data, callback){
//   data["nameNewCategory"]=nameNewCategory;
//   Categorys.create(data, callback)

// };

var createCategorys = function (req, res) {

// var nameNewCategory=req.body
// var categoryw=new Categorys ({
//     nameNewCategory:req.body

// })
 //console.log("req,body--------------------------",nameNewCategory);

// categoryw.save(function(err,data){
//         if(err){
//             return handleError(err)
//         }
//         else{
//             res.json(data)
//         }

//     })
Categorys.create(req.body, function (err, data) {
  if (err) return handleError(err);
  // saved!
  else{
    res.json(data)
  }
})
}
var retrieve= function(req, res){
    Categorys.find({},function(err, data){
        if(err){
            return handleError(err)
        }
        res.send(data)
        //console.log(data)
    })
}


//module.exports=createCategorys
module.exports.createCategorys = createCategorys;
module.exports.retrieve = retrieve;
