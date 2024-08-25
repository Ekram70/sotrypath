const Story = require('../models/StoriesModel.js');

const createStory = async (req, res) => {
  try {
    const { title, imgUrl, options } = req.body;

    if (!title || !options) {
      return res.status(400).json({ error: 'Title and options are required.' });
    }

    const newStory = new Story({
      title,
      imgUrl,
      author: req.user.name,
      email: req.user.email,
      options,
    });

    const savedStory = await newStory.save();

    res.status(201).json(savedStory);
  } catch (error) {
    console.error('Error creating story:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find({});

    if (!stories.length) {
      return res.status(404).json({ message: 'No stories found.' });
    }

    res.status(200).json(stories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingleStory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required.' });
    }

    const story = await Story.findById(id);

    if (!story) {
      return res.status(404).json({ message: 'Story not found.' });
    }

    res.status(200).json(story);
  } catch (error) {
    console.error('Error fetching story:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getStoriesByEmail = async (req, res) => {
  try {
    const { email } = req.user;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const stories = await Story.find({ email });

    if (!stories.length) {
      return res
        .status(404)
        .json({ message: 'No stories found for this email.' });
    }

    res.status(200).json(stories);
  } catch (error) {
    console.error('Error fetching stories by email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createStory,
  getAllStories,
  getSingleStory,
  getStoriesByEmail,
};
