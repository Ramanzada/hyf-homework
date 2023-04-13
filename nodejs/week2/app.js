const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.json());


const documentsFilePath = "YOUR_DOCUMENTS_JSON_PATH";

const loadDocuments = () => {
  const data = fs.readFileSync(documentsFilePath);
  return JSON.parse(data);
};

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {

});

app.get("/documents/:id", (req, res) => {

});

app.post("/search", (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
