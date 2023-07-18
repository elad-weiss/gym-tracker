const express = require('express');
const controller = require('./controller')

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`server is up and running on http://10.0.0.13:${PORT}`)
);

app.get('/test', controller.test);
app.get('/lastn/:id/:n', controller.lastNSessions);