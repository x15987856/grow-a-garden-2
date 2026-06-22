/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 强行开启纯静态导出，不走服务器解析
  images: {
    unoptimized: true, // 静态模式下必须关闭图片优化，否则打包报错
  },
};

export default nextConfig;
