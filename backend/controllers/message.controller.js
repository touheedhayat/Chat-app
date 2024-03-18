// import { object } from "webidl-conversions";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async(req, res)=>{
try {

    const {message} = req.body;
    const {id:recieverId} = req.params;
    const senderId = req.user._id;

    // fetching conversation 

    let conversation = await Conversation.findOne({
        participants: {$all: [senderId, recieverId]},
    }) 

    // but what if the Conversation is not initiated between two? then we will create conversation

    if (!conversation){

        conversation = await Conversation.create({
            participants: [senderId ,recieverId]
        })
    }

    const newMessage = new Message({

        senderId,
        recieverId,
        message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }


        // await conversation.save();      //    this will take one 1 sec and then will save the next one
    // await newMessage.save();     //    this will take one 1 sec after the above conversation will save into conversation liset

    await Promise.all([conversation.save(), newMessage.save()])
    res.status(201).json(newMessage)
    
} catch (error) {
    console.log("Error In Send Message Controller:", error.message)
    res.status(500).json({error: "Internal Server Error"})

}
}

export const getMessages = async( req, res)=>{

    try {

        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({

            participants: {$all: [senderId, userToChatId]},
    
        }).populate("messages")


        if(!conversation) return res.status(200).json([])
        
        
        const messages = conversation.messages;

        res.status(200).json(messages);

    }   catch (error) {
            console.log("Error In getMessages Controller:", error.message)
            res.status(500).json({error: "Internal Server Error"})
        
        }

};

