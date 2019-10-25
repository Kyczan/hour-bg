const path = require('path');

const getConfig = require('./getConfig');

function newWallpaper() {
  const { schedule, themePath } = getConfig();
  const hour = new Date().getHours();

  // select wallpaper name
  const { wallpaper } = schedule.find(
    range => hour >= range.hour_from && hour < range.hour_to
  );

  return path.join(themePath, wallpaper);
}

module.exports = newWallpaper;
