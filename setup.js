const fs = require("fs");
const path = require("path");

const EMPTY_LINE = "";

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
};

console.log(EMPTY_LINE);

console.log("🧹  Clean...");

// Remove files
deleteFile(".npmignore");
deleteFile("setup.js");
deleteFile("App.js");

console.log("✅ Finished!");
