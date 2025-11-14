// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    serverActions: true,
  },

  images: {
    remotePatterns: [
      // Domaines existants
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'docs.google.com' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' }, 
      
      // ✅ NOUVEAU : Domaine d'hébergement des images Pinterest
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        // Permet tous les sous-domaines (i.pinimg.com, i.pinimg.org, etc.) et tous les chemins
      },
      { protocol: 'https', hostname: 'fr.pinterest.com' },
    ],
  },
};

export default nextConfig;