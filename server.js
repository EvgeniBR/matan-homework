const express = require("express");
const cors = require("cors");
const userRouter = require('./src/routers/user.router')
require('./src/DB/mongoose')
require('dotenv').config()

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json())
app.use(userRouter)


if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("material-dashboard-react-master/build"));
  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "material-dashboard-react-master", "build", "index.html"));
  });
}
app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});




