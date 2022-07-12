const { Router } = require("express");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const database = require("../database.json");
const jwtKey = require("../secretKey.json");

const router = Router();

router.post("/auth", async (req, res) => {
  if (database.some((el) => el.email = req.body.email)) {
    res.json("Пользователь с таким email уже существует");
  } else {
    fs.writeFile(
      "database.json",
      JSON.stringify([...database, req.body]),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    const jwtToken = jwt.sign({
      name: req.body.name,
      surname: req.body.surname,
      id: req.body.id,
      role: req.body.role
    }, jwtKey);
    res.json(jwtToken);
  }
});

router.post("/login", async (req, res) => {
  const userIndex = database.findIndex((el) => {
    return el.email === req.body.email && el.password === req.body.password
  })
  if (userIndex === -1) {
    res.json('Пользователя с такими данными не существует!')
  } else {
    const jwtToken = jwt.sign({
      name: database[userIndex].name,
      surname: database[userIndex].surname,
      id: database[userIndex].id,
      role: database[userIndex].role
    }, jwtKey);
    res.json({token: jwtToken, message: `Добро пожаловать ${database[userIndex].email}`});
  }
})

router.get("/getid", async (req, res) => {
  if (database.length === 0) {
    res.json(1);
  } else {
    res.json(database[database.length - 1].id);
  }
});

module.exports = router;
