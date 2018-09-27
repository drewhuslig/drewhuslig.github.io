const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

require("./routes/htmlRoutes")(app);

app.listen(PORT, err => {
  console.log('App listening on PORT: ' + PORT);
});
