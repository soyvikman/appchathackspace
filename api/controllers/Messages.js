const message = require('./../models/Message');


exports.messages = async (req,res)=>{
    try{
        const results = await message.findAll()
        res.json(results)
    } catch (e){
        console.log(e)
    }
}
