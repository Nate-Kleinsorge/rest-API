const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

let paintings = [
    { id: 1, title: 'book 1', desc: 'horror' },
    { id: 2, title: 'book 2', desc: 'fantasy'}
];

app.use(bodyParser.json());
app.use(cors());

app.get('/paintings', (req, res) => {
    res.json(paintings);
});

app.get('/paintings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const painting = paintings.find(p => p.id === id);
    if (!painting) {
        res.status(404).json({ error: "painting not found" });
        return;
    }
    res.json(painting);
});

app.post('/paintings', (req, res) => {
    const { title, desc } = req.body;
    const newPainting = { id: paintings.length + 1, title, desc };
    paintings.push(newPainting);
    res.status(201).json(newPainting);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});