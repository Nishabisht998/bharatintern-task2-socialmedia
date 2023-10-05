const {Schema,model}=require('../connection');

const postSchema=new Schema({
    caption:String,
    username:String,
    image:String
    
})
module.exports=model('create',postSchema)