const path = require('path');

function newWallpaper(config) {
  const { schedule, themePath } = config;
  const hour = new Date().getHours();

  // select wallpaper name
  const { wallpaper } = schedule.find(
    range => hour >= range.hour_from && hour < range.hour_to
  );

  return path.join(themePath, wallpaper);
}

module.exports = newWallpaper;
