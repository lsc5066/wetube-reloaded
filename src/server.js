import express from "express";

const PORT = "4000"

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not Allowed<h1>")
    }
    console.log("Allowed, you may continue.");  
    next();
};

const handleHome = (req, res) => {
    return res.send("<h1>I love middlewares</h1>");
};

const handleLogin = (req, res) => {
    return res.send({ message: "Login here." });
};

// app.use() make global middleware
app.use(privateMiddleware);

app.get("/", logger, handleHome);

const handleListening = () =>
    console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

