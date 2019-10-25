# hour-bg

Set wallpaper depending on the time of the day.

## What

This simple tool allows you to change wallpaper background dependent on time of the day. Just create simple config with schedule and add some wallpapers. Then run this program in cron or in something similar.

## Why

Why not?

## How

### Dependencies

First make sure you have these programs:

1. Linux :P
2. `feh` - simple program to set backgrounds and manipulate images
3. `node` - because `hour-bg` is written in JavaScript
4. `dunst` - to show notifications
5. `cron` - to run this app in a loop (there can be used any similar program)

### Installation

1. Clone this repo and `cd` into:

```sh
git clone https://github.com/Kyczan/hour-bg.git
cd hour-bg
```
   
1. Install this package globally by typing in terminal:

```sh
npm i
sudo npm install -g
```

Now you have command `hour-bg` available across all terminals.

### Usage

The first run of `hour-bg` will create config files under `$HOME/.config/hour-bg`.

There is the place where you should do any customizations.

```
+-config.json
|
+-themes
  |
  exodus
    |
    +-theme-config.json
    |
    +-walpaper1.jpeg
    |
    +-walpaper2.jpeg
    |
    +-walpaper3.jpeg
    |
    +-walpaper4.jpeg
```

Feel free to add new themes. Just copy `exodus`, add yours wallpapers and enhance `theme-config.json` accordingly.

You can have multiply themes. Just point in `config.json` which one you want to use.

Last thing to do is to put `hour-bg` into cron. For example you can run this program every 5 minutes. It only changes wallpaper if there is detected change based on schedule defined in `theme-config.json`.

Additionally you can invoke once this app in your `.xinitrc` - just to not wait for cron on system start.
