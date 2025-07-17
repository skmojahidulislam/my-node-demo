const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json(
        [
            {
              id: 1,
              name: "Mujahid",
              Salary: 60000,
            },

            {
              id: 2,
              name: "Huzaifa",
              salary: 70000
            },

            {
              id: 3,
              name: "Abdul",
              salary: 80000
            },
        ]
    )
});

app.listen(port, () => {
    console.log("Server is running port: 3000")
})