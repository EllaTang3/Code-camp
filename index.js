const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.static(__dirname))

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});

app.get('/other', (req, res)=> {
  res.send(__dirname + '/index.html');
});

app.get('/thing', (req, res)=> {
  res.send(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Server is running at https://localhost:$(port)');
});
