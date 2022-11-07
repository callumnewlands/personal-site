const withAntdLess = require("next-plugin-antd-less");

// Override lessVarsFilePath with modifyVars
module.exports = withAntdLess({
    modifyVars: { "@primary-color": "#8a1c10ff", "@border-radius-base": "6px" },
    lessVarsFilePath: "./styles/antd.less",
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },

    webpack(config) {
        return config;
    }
});
