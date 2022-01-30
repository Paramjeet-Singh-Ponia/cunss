module.exports.index = function(req,res){
    return res.json(200,{
        message: "List of posts2",
        posts:[1,2,3,4,5,6]
    })
}