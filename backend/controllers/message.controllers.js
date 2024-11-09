const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params; //sending to the parameter (Id)

    const senderId = req.user._id; // currently logged in user is the sender;

    // Check for a conversation - a conversation is between 2 people
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If there isn't a conversation then create one 👌
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      }).populate("messages");

      res.status(200).json(conversation.messages);
    }

    // Create a new message document
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Check if there is a new message, collect the id and push to the messages array
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SOCKET IO FUNCTIONALITY 👇🏾

    // Run the save in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    // Get conversation and populate the messages array
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { sendMessage, getMessages };
