const app = require("./app.js");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});
