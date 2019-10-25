#!/usr/bin/env node

const {
  getConfig,
  newWallpaper,
  currentWallpaper,
  setWallpaper
} = require('./utils');

const config = getConfig();
const { notify } = config;
const newWallpaperPath = newWallpaper(config);
const currentWallpaperPath = currentWallpaper();

// set wallpaper if different than current one
if (newWallpaperPath !== currentWallpaperPath) {
  setWallpaper(newWallpaperPath, notify);
}
