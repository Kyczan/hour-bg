#!/usr/bin/env node

const { newWallpaper, currentWallpaper, setWallpaper } = require('./utils');

const newWallpaperPath = newWallpaper();
const currentWallpaperPath = currentWallpaper();

// set wallpaper if different than current one
if (newWallpaperPath !== currentWallpaperPath) {
  setWallpaper(newWallpaperPath);
}
