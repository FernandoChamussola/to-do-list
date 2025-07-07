import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000, // verifica mudanças a cada 1 segundo
      aggregateTimeout: 300, // espera 300ms antes de recarregar
    };
    return config;
  }
};

export default nextConfig;
