# Mayank Sahu - Portfolio Website
Live Demo:

👉 https://mayank-portfolio-nine.vercel.app/

A modern and responsive personal portfolio website built with React, Vite, and Tailwind CSS, featuring a dark theme with neon cyan/green accents. Designed to showcase projects, skills, and experience in a clean, interactive way.

## 🚀 Features

- ✅ **Hero Section** with 2D/3D model toggle
- ✅ **Interactive 3D Model** using model-viewer
- ✅ **About Section** with bio and achievements
- ✅ **Skills Section** with categorized technologies
- ✅ **Projects Showcase** with 4 featured projects and case studies
- ✅ **Contact Form** with EmailJS integration
- ✅ **Responsive Design** - works on all devices
- ✅ **SEO Optimized** with meta tags and structured data
- ✅ **Smooth Animations** and modern UI effects
- ✅ **Accessibility** features (ARIA labels, keyboard navigation)

## 📦 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **3D Model**: Google Model Viewer
- **Contact Form**: EmailJS
- **Deployment**: Vercel / GitHub Pages

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   

2. **Install dependencies**
   

3. **Add your assets** (IMPORTANT!)
   
4. **Configure EmailJS** (for contact form)
  

5. **Run development server**
  

6. **Build for production**
   

## 📁 Project Structure

```
portfolio-mayank/
├── public/
│   └── assets/
│       ├── profile.jpg              # Your profile photo
│       ├── mayank-3d.glb           # Your 3D model (ADD THIS!)
│       ├── Mayank-Sahu-Resume.pdf  # Your resume (ADD THIS!)
│       ├── wiki-quiz.png           # Project thumbnails
│       ├── resume-grader.png
│       ├── budget-tracker.png
│       └── logistech.png
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Top navigation bar
│   │   ├── Hero.jsx                # Hero section with 2D/3D toggle
│   │   ├── About.jsx               # About section
│   │   ├── Skills.jsx              # Skills section
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Contact.jsx             # Contact form
│   │   └── Footer.jsx              # Footer
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles + Tailwind
├── index.html                      # HTML with SEO meta tags
├── tailwind.config.js              # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Customization Guide

### Update Personal Information

1. **Contact Email**: Update in `src/components/Contact.jsx` and `src/components/Footer.jsx`
2. **Social Links**: Update GitHub, LinkedIn URLs in `src/components/Hero.jsx` and `src/components/Footer.jsx`
3. **Bio**: Edit in `src/components/About.jsx`
4. **Skills**: Modify the `skillCategories` array in `src/components/Skills.jsx`

### Update Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
{
  title: 'Your Project Name',
  short: 'Short description',
  description: 'Longer description',
  fullDescription: 'Detailed case study...',
  tech: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  live: 'https://...',
  image: '/assets/project-image.png',
  gradient: 'from-color-500 to-color-500',
}
```

### Change Color Scheme

Edit `tailwind.config.js` to change accent colors:

```javascript
colors: {
  accent: {
    cyan: '#22d3ee',  // Change this
    green: '#4ade80', // Change this
  },
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live at `https://your-project.vercel.app`

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://MayankSahu297.github.io/portfolio-mayank",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/portfolio-mayank/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 TODO Before Launch

- [ ] Download and add your resume PDF to `public/assets/Mayank-Sahu-Resume.pdf`
- [ ] Download and add your 3D model GLB to `public/assets/mayank-3d.glb`
- [ ] Set up EmailJS and update credentials in Contact.jsx
- [ ] Replace profile photo if needed
- [ ] Update domain in SEO meta tags (index.html)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit for performance/accessibility
- [ ] Set up Google Analytics (optional)

## 🔧 Troubleshooting

### 3D Model not loading?
- Ensure the GLB file is in `public/assets/mayank-3d.glb`
- Check browser console for errors
- Try a different GLB file or use Ready Player Me

### Contact form not working?
- Make sure EmailJS credentials are correct
- Check browser console for errors
- Test with the simulated version first

### Images not showing?
- Verify images are in `public/assets/` folder
- Check file names match exactly (case-sensitive)
- Clear browser cache

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Credits

Built by **Mayank Sahu** using React, Vite, and Tailwind CSS.

---

**Need help?** Contact me at mayanksahu297@gmail.com
