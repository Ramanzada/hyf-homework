const axios = require("axios");
const express = require("express");
const handlebars = require("express-handlebars");
const bcrypt = require("bcryptjs");

const app = express();
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// In-memory storage for saved screenshots
const savedScreenshots = [];

// In-memory storage for users
const users = [];

// Middleware to check if the API key is set
const checkApiKey = (req, res, next) => {
  if (!process.env.API_KEY) {
    return res.render("error", {
      message: "API_KEY is not set. Please set the API_KEY environment variable.",
    });
  }
  next();
};

// Middleware to check if the user is authenticated
const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.render("login", {
      message: "Please log in to access the application.",
    });
  }
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", checkAuth, (req, res) => {
  res.render("index", {
    savedScreenshots,
  });
});

app.post("/screenshot", checkAuth, async (req, res) => {
  try {
    const response = await axios({
      url: `https://apishub.com/website-screenshot6/api/v1/screenshot?url=${encodeURIComponent(req.query.url)}`,
      headers: {
        "x-api-key": process.env.API_KEY,
      },
      responseType: "arraybuffer",
    });
    const screenshot = new Buffer.from(response.data, "binary");
    savedScreenshots.push({ url: req.query.url, screenshot });
    res.render("index", {
      savedScreenshots,
      message: "Screenshot saved successfully!",
    });
  } catch (error) {
    console.error(error);
    res.render("error", {
      message: "Failed to generate screenshot. Please check the URL and try again.",
    });
  }
});

app.delete("/screenshot/:index", checkAuth, (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < savedScreenshots.length) {
      savedScreenshots.splice(index, 1);
      res.render("index", {
        savedScreenshots,
        message: "Screenshot deleted successfully!",
      });
    } else {
      res.render("error", {
        message: "Invalid screenshot index.",
      });
    }
  });  
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (!user) {
    return res.render("login", {
      message: "Incorrect email or password.",
    });
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      req.session.user = user;
      return res.redirect("/");
    } else {
      return res.render("login", {
        message: "Incorrect email or password.",
      });
    }
  });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user) {
    return res.render("signup", {
      message: "Email is already in use.",
    });
  }
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    users.push({ email: req.body.email, password: hash });
    req.session.user = users[users.length - 1];
    res.redirect("/");
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.render("error", {
        message: "Failed to log out.",
      });
    }
    res.redirect("/login");
  });
});

app.listen(3000, () => {
  console.log("App is listening on port 3000.");
});
