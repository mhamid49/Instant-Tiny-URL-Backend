const express = require('express');
const Url = require('../models/Url');

const router = express.Router();

// Redirect to the long URL using the shortId
router.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;

  try {
    // Find the URL in the database by the shortId
    const url = await Url.findOne({ shortId });

    if (url) {
      // Increment the visit count
      url.visitCount += 1;
      await url.save();

      // Redirect to the long URL
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
