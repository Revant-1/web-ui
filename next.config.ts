const nextConfig = {
  webpack: (config: { module: { rules: { test: RegExp; include: RegExp; use: { loader: string; options: { presets: string[]; }; }; }[]; }; }, { isServer }: any) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/recharts/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      });
    }
    return config;
  },
};
module.exports = nextConfig;
