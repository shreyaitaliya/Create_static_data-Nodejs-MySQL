// config/db.js
const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('report_static', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',  
    logging: false, 
});

module.exports = sequelize;
