import { NextConfig } from 'next'; // Import NextConfig if needed for typing.

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
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

export default nextConfig;
