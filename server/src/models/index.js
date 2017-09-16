const Sequelize = require('sequelize');
const config = require('../config/config');
const fs = require('fs');
const path = require('path');
const db = {};


const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);
// console.log(fs.readdirSync(__dirname).filter((x) => { return x !== 'index.js'}));
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file !== 'index.js';
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname,file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;