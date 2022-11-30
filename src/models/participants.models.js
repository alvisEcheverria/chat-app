const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Participants = db.define('participants', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'conversation_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    }
});

module.exports = Participants;