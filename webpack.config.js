const path = require('path')

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, assets, scss, styles.scss)
const OUTPUT_DIR = path.join(__dirname, static)

const config = {
    entry = ENTRY_FILE,
    mode = MODE,
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use:

            }
        ]
    },
    output = {
        path: OUTPUT_DIR,
        filename: "[name].[format]",
    }

}

module.exports = config;