const path = require('path');
const { exec } = require('child_process');
const dunst = require('notify-send');

function setWallpaper(wallpaperPath, notify) {
  const iconPath = path.join(__dirname, '../../assets/wallpaper-icon.jpg');

  exec(`feh --bg-scale ${wallpaperPath}`, err => {
    if (err) {
      dunst.critical.icon(iconPath).notify('Wallpaper', err);
    } else {
      if (notify) {
        dunst.icon(iconPath).notify('Wallpaper', 'Wallpaper has been changed');
      }
    }
  });
}

module.exports = setWallpaper;
