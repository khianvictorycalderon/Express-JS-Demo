const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
    res.send("User list");
});

router.get("/new", (_, res) => {
    res.send("User new form");
});

router.post("/create", (_, res) => {
    res.send("Create user");
});

// Dynamic urls should always be at the bottom
router
    .route("/:id")
    .get((req, res) => {
        res.send(`User ID: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`User ID: ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`User ID: ${req.params.id}`);
    })

const users = [
    { id: "AB", name: "John" },
    { id: "AC", name: "Blake" }
];
// Middleware for any route that has :id
router.param("id", (req, res, next, id) => {
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).send("User not found");
    }
    req.user = user;
    next();
});

module.exports = router;