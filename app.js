const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 간단한 API 엔드포인트
app.get('/', (req, res) => {
  res.json({
    message: 'Hello GitHub Actions!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
