import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
    mode: 'production',
    entry: {
        content_script: path.resolve(__dirname, 'src', 'content_script.ts'),
        background: path.resolve(__dirname, 'src', 'background.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}

export default config