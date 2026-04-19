Portfolio Template - React + TypeScript

A modern, dark-themed portfolio template built with React, TypeScript, and Vite. Perfect for developers and tech professionals.

<img width="1338" height="623" alt="image" src="https://github.com/user-attachments/assets/83972b88-6e67-48a9-a647-1641363839ee" />

## Features

- **Dark Theme** - Sleek dark design with green accent (#00ff99)
- **JetBrains Mono Font** - Clean, technical typography
- **Responsive Design** - Works on all screen sizes
- **5 Pages** - Home, Services, Resume, Work, Contact
- **Animations** - Smooth transitions and hover effects
- **Easy Customization** - Update your info in one place

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-template-reactjs.git

# Navigate to project
cd portfolio-template-reactjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view.

## Customization Guide

### 1. Update Personal Information

Edit `src/helpers/data.ts`:
```typescript
export const APP_DATA = {
  GITHUB_URL: "https://github.com/yourusername",
  LINKEDIN_URL: "https://linkedin.com/in/yourusername",
  EMAIL: "your@email.com"
};
```

### 2. Update Home Page

Edit `src/pages/home.tsx`:
- Name (line ~60): Change "Your Name"
- Title (line ~70): Change "Your Title"
- Summary (line ~80): Update your bio
- Social links: Update GitHub, LinkedIn, Email URLs
- Stats (line ~130): Update years, certifications count
- Skills (line ~10): Update skill names and icons
- GitHub username (line ~195): Update for profile link

### 3. Update Services

Edit `src/pages/services.tsx`:
- Update service titles, descriptions, and icons

### 4. Update Resume

Edit `src/pages/resume.tsx`:
- About section: Your bio and contact info
- Experience: Your work history
- Certifications: Your certifications
- Education: Your education background

### 5. Update Work/Projects

Edit `src/pages/work.tsx`:
- Add your projects with descriptions and tech stacks
- Update GitHub/demo links

### 6. Update Contact

Edit `src/pages/contact.tsx`:
- Update email, LinkedIn, location
- Update social links

### 7. Update Favicon & Title

Edit `index.html`:
- Change `<title>` to your name
- Keep or modify the cloud emoji favicon

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Bootstrap** - UI components
- **React Icons** - Icon library
- **React Parallax Tilt** - 3D tilt effects
- **SCSS** - Styling

## Available Scripts

```bash
npm run dev      # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### GitHub Pages

```bash
npm run build
# Upload dist folder to GitHub Pages
```

### Netlify

1. Connect to GitHub
2. Select repository
3. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Structure

```
portfolio-template-reactjs/
├── src/
│   ├── pages/          # Page components
│   │   ├── home.tsx
│   │   ├── services.tsx
│   │   ├── resume.tsx
│   │   ├── work.tsx
│   │   └── contact.tsx
│   ├── components/     # Reusable components
│   ├── helpers/        # Data and utilities
│   │   └── data.ts     # ← Update your info here
│   └── styles/         # Global styles
├── public/             # Static assets
└── index.html          # Entry point
```

## License

MIT License - Feel free to use this template for your own portfolio!

---

Made with ❤️ using React + Vite
