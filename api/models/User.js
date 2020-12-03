const {DataTypes } = require('sequelize');
const sequelize = require('./../config/db')

module.exports = sequelize.define('user', {
    user_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement:true
    },
    user_name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    user_lastname: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_avatar:{
        type: DataTypes.STRING,
        allowNull:false
    },
    user_email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    tableName: "user"
})

