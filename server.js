const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/player', (req, res) => {
  const videoUrl = req.query.videoUrl;
  const title = req.query.title || 'Untitled Video';

  if (!videoUrl) {
    return res.send('Error: No video URL provided.');
  }

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at :${port}`);
});
