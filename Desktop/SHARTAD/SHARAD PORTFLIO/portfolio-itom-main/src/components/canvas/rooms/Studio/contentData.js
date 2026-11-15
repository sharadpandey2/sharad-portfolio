/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Sample content data - Sharad Pandey's projects, tech articles, and deep-dives
const RAW_CONTENT_DATA = [
    // ============ Featured Projects & Engineering Breakdown ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'HomeFixu: AI-Powered Microservices Architecture',
        description: 'Deep dive into building a production microservices backend with Node.js/NestJS, Grok LLM integration, and PostgreSQL (Neon) for real-time service matching.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2026-02-15',
        views: '3.4K',
        duration: '18:20',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: '3D Printing SLA Parser for Canopy Puffs Hardware Store',
        description: 'How we built a custom SLA/3D-model parser extracting geometry and print parameters to automate dynamic pricing and custom configuration in real-time.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://canopypuffs.in',
        date: '2026-01-20',
        views: '2.1K',
        duration: '14:45',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'ASTRA / Aiva: Cutting Robotics Latency by 60% with Socket.IO',
        description: 'Designing hardware architectures and microcontroller telemetry for an autonomous farming robot, migrating detection pipelines from MQTT to Socket.IO.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-11-28',
        views: '1.9K',
        duration: '22:10',
    },
    {
        id: 'yt-004',
        platform: 'youtube',
        title: 'Cloud-Native Deployment & CI/CD on AWS & Cloudflare',
        description: 'Provisioning AWS S3 infrastructure, executing PostgreSQL/MySQL schema migrations with IAM-compliant access controls, and automated deployment pipelines.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-12-15',
        views: '1.8K',
        duration: '16:30',
    },
    {
        id: 'yt-005',
        platform: 'youtube',
        title: 'Dual GraphQL & REST API Architecture in Practice',
        description: 'How dual API endpoints reduced data-fetch latency by ~35% with normalized schema design and high-throughput query optimization.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-12-01',
        views: '2.8K',
        duration: '20:15',
    },
    {
        id: 'yt-006',
        platform: 'youtube',
        title: '2 Published IoT Patents Breakdown: Smart Automation',
        description: 'Walkthrough of the hardware architectures, sensor logic, and patent documentation for two published IoT and smart automation inventions.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-11-20',
        views: '2.5K',
        duration: '25:00',
    },
    {
        id: 'yt-007',
        platform: 'youtube',
        title: 'Full-Stack Engineering: React, Tailwind & Cloudflare Pages',
        description: 'Architecting end-to-end e-commerce platforms, payment gateways, and backend email automation for customer engagement.',
        thumbnail: null,
        url: 'https://canopypuffs.in',
        date: '2025-11-10',
        views: '1.5K',
        duration: '19:22',
    },
    {
        id: 'yt-008',
        platform: 'youtube',
        title: 'Odoo National Hackathon 2025: Top 15 Finalist Journey',
        description: 'Rapid prototyping, backend microservices, and live deployment under 48-hour pressure competing with 500+ national teams in Gandhinagar.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-10-28',
        views: '2.2K',
        duration: '18:45',
    },

    // ============ Technical Blog Posts ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'How I Shipped Two Production Products as a CS Student 🚀',
        description: 'From schema design to automated CI/CD: Key lessons learned independently architecting and launching homefixu.com and canopypuffs.in to live customers.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2026-02-10',
        readTime: '6 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'Optimizing PostgreSQL Database Queries on Neon Serverless',
        description: 'Schema normalization, indexing strategies, and connection pooling techniques for distributed cloud-native microservices.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2026-01-25',
        readTime: '8 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'Building AI/LLM Workflows with Grok API Integration',
        description: 'Integrating Grok LLM API with custom machine learning models to power real-time intelligent service matching.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2026-01-12',
        readTime: '7 min',
    },
    {
        id: 'blog-004',
        platform: 'blog',
        title: 'Microservices with NestJS: Dependency Injection & Scalability',
        description: 'Structuring maintainable backends for high throughput, seamless team velocity, and agile delivery.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-12-20',
        readTime: '9 min',
    },
    {
        id: 'blog-005',
        platform: 'blog',
        title: 'Automatic Attendance System: Research Paper Deep Dive',
        description: 'Computer vision, facial recognition validation pipelines, and automated logging for institutional management.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-12-05',
        readTime: '10 min',
    },
    {
        id: 'blog-006',
        platform: 'blog',
        title: 'Cloudflare Pages vs AWS: Hybrid Infrastructure in Practice',
        description: 'Balancing edge static rendering speed with AWS S3 storage and scalable backend services.',
        thumbnail: null,
        url: 'https://canopypuffs.in',
        date: '2025-11-18',
        readTime: '7 min',
    },
    {
        id: 'blog-007',
        platform: 'blog',
        title: 'Winning ANVESHAN 2025 & CU Project Expo Innovation Category',
        description: 'Presenting robotics architectures, IoT microcontrollers, and real-time telemetry to industry panels.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-11-01',
        readTime: '5 min',
    },
    {
        id: 'blog-008',
        platform: 'blog',
        title: 'Xeroxease: 3rd Prize in University Startup Pitch',
        description: 'Validating product-market fit, unit economics, and tech feasibility for college campus services.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-10-15',
        readTime: '6 min',
    },

    // ============ Tech Insights & Quick Highlights ============
    {
        id: 'tt-001',
        platform: 'tiktok',
        title: 'Connect with Sharad Pandey on LinkedIn! ✨',
        description: 'Daily insights on backend engineering, microservices, cloud deployments, and AI integration.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2026-02-01',
        views: '12.5K',
        likes: '1.4K',
    },
    {
        id: 'tt-002',
        platform: 'tiktok',
        title: 'NestJS Microservices in 60 seconds ⚡',
        description: 'How to structure controllers, services, and DTOs for enterprise scale.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2026-01-18',
        views: '8.5K',
        likes: '756',
    },
    {
        id: 'tt-003',
        platform: 'tiktok',
        title: 'SLA 3D Model Parser in action 📦',
        description: 'Extracting geometry vertices and automated volume pricing in browser & node.',
        thumbnail: null,
        url: 'https://canopypuffs.in',
        date: '2026-01-05',
        views: '14.1K',
        likes: '1.8K',
    },
    {
        id: 'tt-004',
        platform: 'tiktok',
        title: 'MQTT vs Socket.IO: 60% Latency Drop 🏎️',
        description: 'Comparing WebSocket protocols for autonomous farming robot telemetry.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-12-18',
        views: '16.3K',
        likes: '2.1K',
    },
    {
        id: 'tt-005',
        platform: 'tiktok',
        title: 'Grok LLM API Integration breakdown 🤖',
        description: 'Intelligent prompt formatting and JSON mode response parsing.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-12-12',
        views: '19.2K',
        likes: '2.8K',
    },
    {
        id: 'tt-006',
        platform: 'tiktok',
        title: '2 Published Patents milestone 🏆',
        description: 'Hardware architectures and patent grant process explained.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-12-05',
        views: '22.7K',
        likes: '3.1K',
    },
    {
        id: 'tt-007',
        platform: 'tiktok',
        title: 'PostgreSQL Schema Migrations on AWS 🛠️',
        description: 'Zero-downtime database migration strategies across SaaS products.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-11-28',
        views: '11.4K',
        likes: '1.2K',
    },
    {
        id: 'tt-008',
        platform: 'tiktok',
        title: 'Dockerizing Full-Stack Apps 🐳',
        description: 'Multi-stage builds for small, secure production containers.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-11-20',
        views: '15.9K',
        likes: '2.6K',
    },
    {
        id: 'tt-009',
        platform: 'tiktok',
        title: 'Top 15 Odoo Hackathon Gandhinagar 🏅',
        description: '48 hours of intense coding with 500+ teams from all over India.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-11-15',
        views: '18.3K',
        likes: '2.4K',
    },
    {
        id: 'tt-010',
        platform: 'tiktok',
        title: 'Dual GraphQL & REST APIs: Why both? 🤔',
        description: 'Tailoring payload sizes for web and low-bandwidth mobile clients.',
        thumbnail: null,
        url: 'https://homefixu.com',
        date: '2025-11-08',
        views: '21.2K',
        likes: '3.1K',
    },
    {
        id: 'tt-011',
        platform: 'tiktok',
        title: 'Cloudflare Pages deployment in seconds ⚡',
        description: 'Edge network caching, Git triggers, and instant previews.',
        thumbnail: null,
        url: 'https://canopypuffs.in',
        date: '2025-11-01',
        views: '13.6K',
        likes: '1.9K',
    },
    {
        id: 'tt-012',
        platform: 'tiktok',
        title: 'Full-Stack Developer Roadmap 2026 🗺️',
        description: 'Languages, microservices, databases, and AI tooling.',
        thumbnail: null,
        url: 'https://linkedin.com/in/sharad7415',
        date: '2025-10-25',
        views: '35.8K',
        likes: '4.8K',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
