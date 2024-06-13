// Import dependencies and routes
const express = require("express");
const indexRoutes = require("./routes");
const aboutRoutes = require("./routes/about");
const projectRoutes = require("./routes/project");

//for netlify
const serverless = require("serverless-http");

// Port
const port = process.env.PORT || 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

//for netlify
const router = express.Router();
app.use('/app/', router);
module.exports.handler = serverless(app);

// Set view engine to Pug

// Serve static files
app.use("/static", express.static("./public"));

// Routes
app.use(indexRoutes);
app.use("/about", aboutRoutes);
app.use("/project", projectRoutes);

// Handle errors
app.use((req, res, next) => {
  const err = new Error("Something went wrong");
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status).render("error");
});

// Create server
app.listen(port, () => console.log(`App is listening to port ${port}`));
