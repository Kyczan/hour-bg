#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const os = require('os');
const { exec } = require('child_process');
const dunst = require('notify-send');

const getConfig = require('./getConfig');

const { schedule, themePath } = getConfig();

const hour = new Date().getHours();
// select wallpaper name
const { wallpaper } = schedule.find(
  range => hour >= range.hour_from && hour < range.hour_to
);

const wallpaperPath = path.join(themePath, wallpaper);
const iconPath = path.join(__dirname, '../assets/wallpaper-icon.jpg');
const fehbgPath = path.join(os.homedir(), '.fehbg');

// get info about current wallpaper
let currentWallpaperPath;
try {
  const fehbg = fs.readFileSync(fehbgPath, 'utf8');
  // extract path of current wallpaper
  currentWallpaperPath = fehbg.match(/'([^']+)'/)[1];
} catch (err) {}

// set wallpaper if different than current one
if (wallpaperPath !== currentWallpaperPath) {
  exec(`feh --bg-scale ${wallpaperPath}`, err => {
    if (err) {
      dunst.critical.icon(iconPath).notify('Wallpaper', err);
    } else {
      dunst.icon(iconPath).notify('Wallpaper', 'Wallpaper has been changed');
    }
  });
}
