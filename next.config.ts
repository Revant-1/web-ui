const nextConfig = {
  webpack: (config, { isServer }) => {
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
  images: {
    domains: ['i.postimg.cc'],
  },
};

module.exports = nextConfig;
