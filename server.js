const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Путь к файлу для сохранения результатов
const resultsFile = path.join(__dirname, 'gameResults.json');

// Функция для чтения существующих результатов
const readResults = () => {
    try {
        if (fs.existsSync(resultsFile)) {
            const data = fs.readFileSync(resultsFile, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Ошибка при чтении файла:', error);
    }
    return [];
};

// Функция для записи результатов в файл
const writeResults = (data) => {
    try {
        fs.writeFileSync(resultsFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Ошибка при записи файла:', error);
        return false;
    }
};

// Маршрут для сохранения результата игры
app.post('/api/save-game', (req, res) => {
    try {
        const gameData = req.body;

        // Добавляем timestamp к данным игры
        gameData.timestamp = new Date().toISOString();
        gameData.id = Date.now().toString(); // Простой ID на основе времени

        // Читаем существующие результаты
        const existingResults = readResults();

        // Добавляем новую запись
        existingResults.push(gameData);

        // Сохраняем обновленные результаты
        const success = writeResults(existingResults);

        if (success) {
            res.status(200).json({
                success: true,
                message: 'Игра успешно сохранена',
                id: gameData.id
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Ошибка при сохранении игры'
            });
        }
    } catch (error) {
        console.error('Ошибка при обработке запроса:', error);
        res.status(500).json({
            success: false,
            message: 'Внутренняя ошибка сервера'
        });
    }
});

// Маршрут для получения всех сохраненных игр
app.get('/api/games', (req, res) => {
    try {
        const games = readResults();
        res.status(200).json(games);
    } catch (error) {
        console.error('Ошибка при получении игр:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка при получении данных'
        });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);

    // Создаем файл для результатов, если он не существует
    if (!fs.existsSync(resultsFile)) {
        writeResults([]);
        console.log('Файл для результатов создан');
    }
});