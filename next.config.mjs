/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/menu', // Eski siteden kalan link
        destination: '/', // Yeni ana sayfaya gitsin
        permanent: true,  // Google'a "Artık burası kalıcı" der
      },
      {
        source: '/contact', // Varsa eski iletişim sayfası
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
