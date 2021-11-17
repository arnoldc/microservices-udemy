
const express = require('express');
const app = express();
const axios = require('axios')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.post('/events', (req, res) => {
    const event = req.body;
    
      // posts
    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
      });

      // comments
      axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
      });

      // query
      axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
      });

      // moderation
      axios.post("http://localhost:4003/events", event).catch((err) => {
        console.log(err.message);
      });

    res.send({ status: 'OK '})
});  

app.listen(4005, () => {
    console.log('Listening on 4005')
});