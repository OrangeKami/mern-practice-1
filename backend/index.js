import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccorRoute.js'

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://Orangekami:orangekami@mern1.lxya9uy.mongodb.net/?retryWrites=true&w=majority";
// mongo connection

mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Our soccer is running ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`listening on port ${PORT}`)
);