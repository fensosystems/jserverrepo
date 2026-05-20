const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 Success! Jenkins is automated! automated again. #16. Your custom Docker container is alive!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running internally on port ${PORT}`);
});
