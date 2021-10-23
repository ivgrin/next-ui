const regexEqual = (x, y) => {
    return (
        x instanceof RegExp &&
        y instanceof RegExp &&
        x.source === y.source &&
        x.global === y.global &&
        x.ignoreCase === y.ignoreCase &&
        x.multiline === y.multiline
    );
};

module.exports = {
    webpack: (config) => {

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        const cssRules = config.module.rules
            .find((rule) => {
                return typeof rule.oneOf === "object";
            })
            .oneOf.find((rule) => {
                return (
                    rule.sideEffects === false &&
                    regexEqual(rule.test, /\.module\.css$/)
                );
            });

        cssRules.use = cssRules.use.map((rule) => {
            if (rule.loader.includes("css-loader/cjs")) {
                if (rule.options && rule.options.modules) {
                    rule.options.modules.localIdentName = "[hash:base64:5]";
                    delete rule.options.modules.getLocalIdent;
                }
            }
            return rule;
        });

        return config;
        
    },
};
