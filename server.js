const app = require("./app");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("server is listening on port " + port);
});
