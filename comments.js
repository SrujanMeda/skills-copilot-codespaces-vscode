// create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/:id

const express = require('express');
const router = express.Router();

// test
router.get('/', (req, res) => {
    res.send('GET /comments');
});

router.post('/', (req, res) => {
    res.send('POST /comments');
});

router.get('/:id', (req, res) => {
    res.send('GET /comments/:id');
});

router.put('/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

router.delete('/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});
