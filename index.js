const express = require("express");
const app = express();

// View engine for viewing html files
app.set("view engine", "ejs");

// Optional: If you want the templates to be in other folder aside from 'views'
// app.set('views', path.join(__dirname, 'templates'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

// Sample error
app.get("/error", (_, res) => {
    res.status(500).json({
        message: "Servor error"
    });
});

// Sample download
app.get("/download", (_, res) => {
    res.download("text.txt");
});

// Render HTML template
app.get("/template", (_, res) => {
    res.render("template", {
        name: "Jarvis"
    })
});

app.listen(3000);