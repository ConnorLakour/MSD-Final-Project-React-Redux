var express = require("express");
var router = express.Router();
const StreamModel = require("../Models/SteamModel");
require("../db/myDB");
require("mongoose");

//^GET all
router.get("/show", async function(req, res, next) {
  const limit = req.query.limit
  const skip = req.query.skip
  const streams = await StreamModel.find({}).skip(Number(skip)).limit(Number(limit));
  res.status(200).send(streams);
});

//^GET one
router.get("/display/:id", async function(req, res, next){
  const stream = await StreamModel.find({id: req.params.id})
  res.status(200).send(stream)
})

//^CREATE one
router.post("/create", function(req, res, next) {
  const steam = new StreamModel({
    id: Math.floor(Math.random() * 100 + 1),
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId,
    email: req.body.email
  });
  steam
    .save()
    .then(result => {
      res.status(201).send("Success!");
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
});

//^UPDATE one
router.put("/edit/:id", async (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
   await StreamModel.updateOne(
    { id: id },
    { title: title, description: description }
  );
  res.status(200).send('Success');
});

//^DELETE one
router.delete("/delete/:id", async (req, res, next)=>{
  const id = req.params.id
  const deleted = await StreamModel.deleteOne({id: id})
  console.log(deleted)
   res.status(200).send("Success")
})

module.exports = router;
