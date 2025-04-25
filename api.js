const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/message', async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Missing content' });
  }

  // Use a shared function or bot instance to send message
  if (global.botChannel) {
    global.botChannel.send(content);
    return res.json({ status: 'Message sent to Discord' });
  }

  res.status(500).json({ error: 'Bot not ready or channel missing' });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
