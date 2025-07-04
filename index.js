const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.static(__dirname))

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/Code-camp/index.html');
});

app/.get('/index', (req, res)=> {
  res.sendFile(__dirname + '/Code-camp/index.html');
});

app.get('/other', (req, res)=> {
  res.send(__dirname + '/Code-camp/other.html');
});

app.get('/thing', (req, res)=> {
  res.send(__dirname + '/Code-camp/thing.html');
});

app.listen(port, () => {
  console.log('Server is running at https://localhost:$(port)');
});
