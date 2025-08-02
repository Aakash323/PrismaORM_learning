import express from 'express';
import dotenv from 'dotenv';
import { reviewrouter } from './Routes/reviewrouter.js';
import { userrouter } from './Routes/userrouter.js';
import { productrouter } from './Routes/productrouter.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api/user',userrouter);
app.use('/api/product',productrouter);
app.use('/api/review',reviewrouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
