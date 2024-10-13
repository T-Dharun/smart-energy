
const express = require('express');
const app = express();
const router=require('./routes/EnergyRoute');
const cors=require('cors');
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017")
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.error('MongoDB connection failed:', error));


app.use(express.json());
app.use(cors());


app.use('/api',router);


const PORT = 3002|| 3001;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
