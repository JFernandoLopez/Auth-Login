require('dotenv').config();
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/user');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/logintest`, {loggin: false, native: false})

UserModel(sequelize);

const { User } = sequelize.models

module.exports = {
    User,
    sequelize
}


