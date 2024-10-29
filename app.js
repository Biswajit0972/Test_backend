import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
    // console.log(req);
    res.status(200).cookie("token", "bsjaexnerbcgyweutivvchsgdftdgfvvhgzndgajwgaghsgh", {
        httpOnly: true,
        secure: true,
        maxAge: 3600 * 1000 // maxAge in milliseconds (1 hour)
    }).send("Set up your cookie");
    
});

app.get("/cookie", (req, res) => {
    const cookie = req.cookies?.token
    res.status(200).send("Cookie set up or not")
})

export { app };
