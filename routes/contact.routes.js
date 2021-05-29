const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Contact = require("../controller/contact");
const fs = require("fs")
var path = require('path');

//Basic Authentication
function isAutherized(req, res, next) {
  if(typeof req.headers.authorization !== undefined){
    let token = req.headers.authorization;
    let privateKey = fs.readFileSync(path.join(__dirname, '../private.key'))
    jwt.verify(token, privateKey, { algorithm: "HS256" } , (err, decoded) => {
      if(err) {
         res.status(500).json({ error: "Not Authorised" })
      }
      return next()
    })
  }else{
     res.status(500).json({ error: "Not Authorised" })
  }
}
//SimpleAuth and generate token
router.get("/auth", async(req, res)=>{
  let privateKey = fs.readFileSync(path.join(__dirname, '../private.key'));
  let token = jwt.sign({ "body": "stuff"}, privateKey, { algorithm: "HS256" });
  console.log('token ->', token)
  res.send({
    token: token
  });
})

//add New Contact
router.post("", isAutherized, async (req, res) => {
  try {
    let payload = {
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
    };
    const response = await Contact.addContact(payload);
    return res.status(response.code).send(response);
  } catch (e) {
    return res.send(e);
  }
});

//Update  contact
router.put("", isAutherized, async (req, res) => {
  try {
    let payload = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
    };
    const response = await Contact.updateContact(payload);
    return res.status(response.code).send(response);
  } catch (e) {
    return res.send(e);
  }
});

//for Pagianation By Skip and Limit
router.get("", isAutherized, async (req, res) => {
    try {
      let payload = {
        skip: req.query.skip,
        limit: req.query.limit
      };
      const response = await Contact.getContactByLimit(payload);
      return res.status(response.code).send(response);
    } catch (e) {
      return res.send(e);
    }
});

//for Search By Name and Email
router.get("/search", isAutherized, async (req, res) => {
    try {
      let payload = {
        name: req.query.name,
        email: req.query.email
      };
      const response = await Contact.contactSearchByNameEmail(payload);
      return res.status(response.code).send(response);
    } catch (e) {
      return res.send(e);
    }
});

//for delete Contact

router.delete("", isAutherized, async (req, res) => {
    try {
      let payload = {
        contact_id: req.query.contact_id
      };
      const response = await Contact.deleteContact(payload);
      return res.status(response.code).send(response);
    } catch (e) {
      return res.send(e);
    }
});



module.exports = router;
