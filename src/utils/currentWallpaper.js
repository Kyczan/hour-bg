const path = require('path');
const fs = require('fs');
const os = require('os');

function currentWallpaper() {
  const fehbgPath = path.join(os.homedir(), '.fehbg');
  let currentWallpaperPath;

  try {
    const fehbg = fs.readFileSync(fehbgPath, 'utf8');
    // extract path of current wallpaper
    currentWallpaperPath = fehbg.match(/'([^']+)'/)[1];
  } catch (err) {}

  return currentWallpaperPath;
}

module.exports = currentWallpaper;
