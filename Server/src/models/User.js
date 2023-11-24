const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('User', {
        uid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            set(value){
                this.setDataValue(value)
            },
            allowNull: true
        }
    }, {timestamps: false})
};
