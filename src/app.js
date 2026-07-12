const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

// Insecure CORS (intentional vulnerability)
app.use(cors());

const vulnerableRoutes = require("./routes/vulnerable");

app.use("/api", vulnerableRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});