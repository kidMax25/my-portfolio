# Data Science Portfolio

![Portfolio Preview](public/preview.jpg)

## 🚀 Live Demo
[View Portfolio](https://your-portfolio-url.vercel.app)

## 📋 Overview
A modern, responsive data science portfolio built with Next.js, showcasing various projects in machine learning, data analysis, visualization, and more. Features a dynamic project carousel and smooth animations.

## 🛠️ Built With
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Type Safety:** TypeScript

## ✨ Features
- Responsive design that works on all devices
- Interactive project carousel with focus effect
- Animated transitions and micro-interactions
- Dark mode optimized
- Performance optimized images
- SEO friendly

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/kidMax25/my-portfolio
```

2. Install dependencies
```bash
cd portfolio
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Projects.tsx
├── public/
│   └── images/
├── styles/
│   └── tailwind.css
└── types/
    └── index.ts
```

## 📂 Adding Projects
To add a new project to the carousel, edit the `projects` array in `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Project Title',
    description: 'Project description',
    tags: ['Technology1', 'Technology2'],
    image: '/your-image.jpg',
    github: 'GitHub URL',
    demo: 'Demo URL'
  },
  // ... more projects
];
```

## 🎨 Customization
- Edit `globals.css` to modify global styles
- Update `layout.tsx` to change fonts or metadata
- Modify the `ProjectCard` component to change card appearance

## 📱 Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GA_ID=your-analytics-id
```

## 📈 Performance
- Lighthouse score: 95+ on all metrics
- Core Web Vitals optimized
- Responsive images with next/image
- Minimal bundle size

## 🚀 Deployment
This portfolio is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import project in Vercel
3. Configure build settings
4. Deploy!

## 📝 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/kidMax25/my-portfolio/issues).

## 📧 Contact
Your Name - [simiyumaxwell490@gmail.com](mailto:simiyumaxwell490@email.com)

Project Link: [https://github.com/kidMax25/my-portfolio](https://github.com/kidMax25/my-portfolio)

## 🙏 Acknowledgments
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel](https://vercel.com)