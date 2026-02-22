// models/account.model.js
const { getDB } = require("../config/db");

const getCollection = () => {
  return getDB().collection("accounts");
};

module.exports = { getCollection };