const express = require("express");
const router = express.Router();
const {
  createAccounts,
  getAllAccounts,
  updateAccount,
  deleteAccount,
  getAggregateAccounts,
} = require("../controllers/account.controller");

router.post("/", createAccounts);
router.get("/", getAllAccounts);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);
router.get("/aggregate", getAggregateAccounts);

module.exports = router;