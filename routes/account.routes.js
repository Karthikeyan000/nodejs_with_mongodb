const express = require("express");
const router = express.Router();
const {
  createAccounts,
  getAllAccounts,
  updateAccount,
  deleteAccount,
} = require("../controllers/account.controller");

router.post("/", createAccounts);
router.get("/", getAllAccounts);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

module.exports = router;