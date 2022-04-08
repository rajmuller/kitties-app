"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require("fs");

console.log(path.join(basePath, "/src/config.js"));

// read json data
let layersFolder = fs.readdirSync(`${basePath}/public/layers`);

layersFolder.forEach((folder) => {
  const layer = fs.readdirSync(`${basePath}/public/layers/${folder}`);
  layer.forEach((file, i) => {
    const newName = `${i}.png`;
    const fileUri = fs.rename(
      `${basePath}/public/layers/${folder}/${file}`,
      `${basePath}/public/layers/${folder}/${newName}`,
      function (err) {
        if (err) throw err;
        console.log("File Renamed!");
      }
    );
    console.log({ newName });
  });
});

// data.forEach((item) => {
//   item.image = `${baseUri}/${item.edition}.png`;
//   fs.writeFileSync(
//     `${basePath}/build/json/${item.edition}.json`,
//     JSON.stringify(item, null, 2)
//   );
// });

// fs.writeFileSync(
//   `${basePath}/build/json/_metadata.json`,
//   JSON.stringify(data, null, 2)
// );
