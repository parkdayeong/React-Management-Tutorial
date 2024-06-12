const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send([
    {
      id: 1,
      image: 'https://loremflickr.com/64/64/1',
      name: '박콩',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 2,
      image: 'https://loremflickr.com/64/64/2',
      name: '호야',
      birthday: '200015',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 3,
      image: 'https://loremflickr.com/64/64/3',
      name: '쿠키',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 4,
      image: 'https://loremflickr.com/64/64/4',
      name: '땅콩',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
