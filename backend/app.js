const express = require('express');
const cors = require('cors');
const summarizationRoutes = require('./routes/summarization');

const app = express();

app.use(cors()); // Use cors middleware here
app.use(express.json());
app.use('/api/summarize', summarizationRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));