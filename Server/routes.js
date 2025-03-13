const express = require('express');
const UserModel = require('./model/user.model');
const { videoModel } = require('./model/video.model');
const { validateUser, validateVideo } = require('./middlewares/validators');

const router = express.Router();

// Create a new user with validation
router.post('/users', validateUser, async (req, res) => {
    const { username, password } = req.body;
    const payload = { username, password };

    try {
        let new_user = new UserModel(payload);
        await new_user.save();
        res.status(201).send({ "message": "User created successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});


router.get('/videos', async (req, res) => {
    try {
        const videos = await videoModel.find();
        res.status(200).json(videos);
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});

// Retrieve all users
router.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});

// Retrieve a specific user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ "message": "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});

// Update a specific user by ID
router.put('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send({ "message": "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});

// Delete a specific user by ID
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ "message": "User not found" });
        }
        res.status(200).send({ "message": "User deleted successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});


router.post('/videos', validateVideo, async (req, res) => {
    const { title, description, url, created_by } = req.body;
    const payload = { title, description, url, created_by };

    try {
        let new_video = new videoModel(payload);
        await new_video.save();
        res.status(201).send({ "message": "Video created successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});

router.get('/videos/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const videos = await videoModel.find({ created_by: userId }).populate('created_by', 'username');
        res.status(200).json(videos);
    } catch (error) {
        console.log(error);
        res.status(500).send({ "error": error });
    }
});


module.exports = router;
