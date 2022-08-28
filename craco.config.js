const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#21b2aa",
                            "@link-color": "rgba(0, 0, 0, 0.85)",
                            "@layout-header-background": "#F0F0F0",
                            "@font-family": "Proxima Nova, Metropolis, Montserrat, Open sans, sans-serif"
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};
