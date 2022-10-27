const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const indexController = require("./controllers/index.js").getIndex;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, OPTIONS, PUT, DELETE, PATCH"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.get("/", indexController);


app.listen(PORT,() => {
    console.log(`server listening on port:${PORT}`);
})