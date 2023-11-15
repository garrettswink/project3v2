const express = require("express");
const router = express.Router();
const User = require("../models/userModels");

// Create a new transaction
router.post('/register', async (req, res) => {
  try {
    console.log("Registering a User!");
    console.log(req.body);
    // Find the user who matches the posted s
    const userData = await User.create({username:req.body.user, password:req.body.pwd});

    // if (!userData) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

    // // Verify the posted password with the password store in the database
    // const validPassword = await userData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

