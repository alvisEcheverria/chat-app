const { userRegister, getAllUsers } = require('./users.controllers');
const { userLogin } = require('./auth.controllers');
const { getUserConversations, createMessageInConversation, createConversation, getConversationMessages, getMessages } = require('./conversation.controllers');

module.exports = {
    userRegister,
    userLogin,
    getAllUsers,
    getUserConversations,
    createMessageInConversation,
    createConversation,
    getConversationMessages,
    getMessages
}