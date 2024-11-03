
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/api/images', (req, res) => {
    // 데이터베이스에서 이미지 목록 가져오기
});
app.post('/api/cart', (req, res) => {
    // 카트에 이미지 추가
});
app.post('/api/order', (req, res) => {
    // 주문 데이터 저장
});
app.post('/api/upload', (req, res) => {
    // 이미지 업로드 처리
});
app.get('/api/orders', (req, res) => {
    // 주문 목록 가져오기
});
app.get('/api/inventory', (req, res) => {
    // 재고 정보 가져오기
});

app.listen(3000, () => console.log('서버가 3000번 포트에서 실행 중입니다.'));
    