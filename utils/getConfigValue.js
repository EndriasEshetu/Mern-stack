const config = require("config");

const getConfigValue = (key, envKey = key) => {
  const envValue = process.env[envKey];

  if (envValue !== undefined && envValue !== "") {
    return envValue;
  }

  try {
    return config.get(key);
  } catch (error) {
    return undefined;
  }
};

module.exports = getConfigValue;