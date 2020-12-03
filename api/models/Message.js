const {DataTypes } = require('sequelize');
const sequelize = require('./../config/db')

module.exports = sequelize.define('message', {
    message_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    message_body: {
        type:DataTypes.STRING,
        allowNull: false
    },
    message_id_user: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    message_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "message"
})

