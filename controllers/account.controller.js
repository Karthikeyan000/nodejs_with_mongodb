const { getCollection } = require("../models/account.model");
const { ObjectId } = require("mongodb");

// CREATE
const createAccounts = async (req, res) => {
  try {
    const accounts = req.body;
    const result = await getCollection().insertMany(accounts);
    res.status(201).json({
      message: "Accounts created successfully",
      insertedIds: result.insertedIds,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await getCollection().find({}).toArray();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const result = await getCollection().updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    res.status(200).json({
      message: "Account updated",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await getCollection().deleteOne({
      _id: new ObjectId(id),
    });

    res.status(200).json({
      message: "Account deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAccounts,
  getAllAccounts,
  updateAccount,
  deleteAccount,
};