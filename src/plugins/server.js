const express = require('express');
//const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const cors = require('cors');
app.use(cors());

//app.use(bodyParser.urlencoded({ extended: false }));
//pp.use(bodyParser.json());

// CORS 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

///// 이미지 업로드/////
// multer를 사용하여 이미지 업로드를 처리하는 미들웨어 생성
const upload = multer({ dest: 'uploads/' });
// 이미지 업로드 처리 엔드포인트
app.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: '이미지 파일이 없습니다.' });
  }
  // 업로드 성공 응답
  const imagePath = `uploads/${file.filename}`;
  res.status(200).json({ message: '이미지 업로드 성공', imagePath });
});
// 서버 포트 설정
const port = 4000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});