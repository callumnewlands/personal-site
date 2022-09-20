const withAntdLess = require("next-plugin-antd-less");

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
    modifyVars: { "@primary-color": "#8a1c10ff", "@border-radius-base": "6px" },
    lessVarsFilePath: "./styles/antd.less",

    webpack(config) {
        return config;
    }
};

// Override lessVarsFilePath with modifyVars
module.exports = withAntdLess(nextConfig);
