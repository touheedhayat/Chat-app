import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({

    participants: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            refer: 'User'
    },
    ],
//     messages: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             refer:'User',
//             default: []
//     },
// ],


messages: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
           }
]


},
{timestamps:true}
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;