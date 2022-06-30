const express = require("express");

const router = express.Router();
const { signin, signup } =require ("../controllers/user");

router.post("/singup", signup);
router.post("/singin", signin);

module.exports = router;