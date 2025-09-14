const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let gameResults = []; // "База данных" в памяти (лучше заменить на MongoDB/PostgreSQL)

// Сохранение результата игры
app.post('/api/save-result', (req, res) => {
    const { player1, player2, winner, date } = req.body;
    gameResults.push({ player1, player2, winner, date });
    res.status(200).json({ success: true });
});

// Получение всех результатов
app.get('/api/results', (req, res) => {
    res.json(gameResults);
});

app.listen(3001, () => {
    console.log('Сервер запущен на http://localhost:3001');
});