const path = require('path');
const fs = require('fs-extra');
const os = require('os');

function getConfig() {
  const configPath = path.join(os.homedir(), '.config/hour-bg');

  // create initial config if necessary under $HOME/.config/hour-bg
  if (!fs.existsSync(configPath)) {
    const srcPath = path.join(__dirname, '../../init_config');
    fs.mkdirSync(configPath, { recursive: true });
    fs.copySync(srcPath, configPath);
  }

  const { theme } = require(path.join(configPath, 'config.json'));
  const { schedule } = require(path.join(
    configPath,
    `themes/${theme}/theme-config.json`
  ));

  return {
    schedule,
    themePath: path.join(configPath, 'themes', theme)
  };
}

module.exports = getConfig;
