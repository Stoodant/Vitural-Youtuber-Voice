const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const BASE_PATH = "./voice-resource/";
const CONFIG_VERSION = "0.1";

// Tool Functions----------------------
const isDir = (file_path) => {
  try {
    var stat = fs.lstatSync(file_path);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
};

const isFile = (file_path) => {
  try {
    var stat = fs.lstatSync(file_path);
    return stat.isFile();
  } catch (e) {
    return false;
  }
};

const getFiles = (file_path, returnDir) => {
  const paths = fs
    .readdirSync(file_path)
    .filter((file) =>
      returnDir
        ? isDir(path.join(file_path, file))
        : !isDir(path.join(file_path, file))
    );
  return paths;
};

// check files--------------------------------
const ytbList = getFiles(BASE_PATH, true);

for (ytb of ytbList) {
  const ytbDirPath = path.join(BASE_PATH, ytb);
  const files = getFiles(ytbDirPath, false);
  let config = { file_data: [], version: CONFIG_VERSION };

  if (fs.existsSync(path.join(BASE_PATH, ytb + ".json"))) {
    config = JSON.parse(fs.readFileSync(path.join(BASE_PATH, ytb + ".json")));
  }

  const existFiles = config.file_data.map((file) => file.md5);
  console.log(ytb + "当前资源列表: ", existFiles);

  for (file of files) {
    if (!existFiles.includes(file.split(".")[0])) {
      const file_name = file.split(".")[0];
      const file_base64 = fs.readFileSync(
        path.join(ytbDirPath, file),
        "base64"
      );
      let fsHash = crypto.createHash("md5");
      fsHash.update(file_base64);
      const md5 = fsHash.digest("hex");
      console.log(md5);

      fs.renameSync(
        path.join(ytbDirPath, file),
        path.join(ytbDirPath, md5 + ".mp3")
      );

      config.file_data.push({
        name: file_name,
        md5: md5,
        tag: "音频切片",
      });
      console.log("新文件: " + file);
    }
  }
  fs.writeFileSync(
    path.join(BASE_PATH, ytb + ".json"),
    JSON.stringify(config),
    {
      flag: "w+",
    }
  );
}
