const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ status: "ok", message: "✅ 满血版运行中" });
});

app.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt, refImage } = req.body;
    res.json({ url: "https://picsum.photos/1024/1024?random="+Math.random() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/generate-video', async (req, res) => {
  try {
    const { refImage } = req.body;
    res.json({ url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("✅ 服务启动"));
