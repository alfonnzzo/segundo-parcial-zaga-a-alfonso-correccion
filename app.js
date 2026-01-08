import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: 'localhost:3000',
}))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });