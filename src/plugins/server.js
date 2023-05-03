const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// POST 요청 처리
app.post('/replies', (req, res) => {
  const reply = req.body.reply;
  console.log(`Received reply: ${reply}`);
  res.json({ message: 'Reply received' });
});

// 서버 시작
app.listen(3022, () => {
  console.log('API server listening on port 3022');
});