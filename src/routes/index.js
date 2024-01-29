const removeBGRouter = require("./removeBG");

function route(app) {
  app.use("/remove-background", removeBGRouter);
  app.use("/", (req, res) => {
    res.json("Hello");
  });
}

module.exports = route;
