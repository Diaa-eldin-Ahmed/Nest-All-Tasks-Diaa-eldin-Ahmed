const express = require("express");
const router = express.Router();

const users = [
    {
        id: 1,
        name: "eng.Omar Diaa",
        age: 25,
        job: "My Mentor",
        country: "Egypt",
    },
    {
        id: 2,
        name: "Diaa-Eldin",
        age: 25,
        job: "Web Developer",
        tasks: ["play", "watch movies"],
        country: "Egypt",
    },
    {
        id: 3,
        name: "Ahmed",
        age: 25,
        job: "Web Developer",
        tasks: ["play", "watch movies"],
        country: "Egypt",
    },
];

router.get("/", (req, res) => {
    res.send(users);
}),
    router.get("/:id", (req, res) => {
        const user = users.find((user) => user.id === parseInt(req.params.id));
        if (!user)
            res.status(404).send("The user with the given ID was not found.");
        res.status(200).send(user);
    }),
    router.post("/", (req, res) => {
        const user = {
            id: users.length + 1,
            name: req.body.name,
            age: req.body.age,
            job: req.body.job,
            tasks: req.body.tasks,
            country: req.body.country,
        };
        users.push(user);
        res.status(201).send(user);
    }),
    router.get("/:id/tasks", (req, res) => {
        const user = users.find((user) => user.id === parseInt(req.params.id));
        if (!user)
            res.status(404).send("The user with the given ID was not found.");
        res.status(200).send(user.tasks);
    }),
    (module.exports = router);
