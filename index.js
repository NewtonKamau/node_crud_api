import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './routes/users.js';

const app = express();
app.use(bodyParser.json());
app.use('/', usersRoute);

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
