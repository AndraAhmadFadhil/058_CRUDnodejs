import express from 'express';
import bodyParser from 'body-parser'
import mobilRoute from "./routes/Mobil.js";
import kucingRoute from "./routes/Kucing.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute)
app.use("/kucing", kucingRoute)
app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("selamat pagi");
});

app.listen(PORT, () => 
    console.log(`Server berjalan di port : http://localhost:${PORT}`));
