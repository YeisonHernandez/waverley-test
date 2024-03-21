const express = require('express');

const router = express.Router();

router.post('/generate', (req, res) => {

    const { text, summarizationLength, summarizationRatio } = req.body;

    if (!text || !summarizationLength || !summarizationRatio) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    if (typeof text !== 'string' || typeof summarizationLength !== 'string' || typeof summarizationRatio !== 'number') {
        return res.status(400).json({ error: 'Invalid parameter types' });
    }
    
    const placeholder = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

    const summarizedText = placeholder;
    const confidenceScore = 0.85;

    const response = {
        text,
        summarizedText,
        confidenceScore
    };

    res.json(response);
});

module.exports = router;