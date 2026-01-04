# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases skills, experience, projects, and provides an easy way for potential clients and employers to get in touch.

## 🚀 Features

### ✅ Complete Requirements Implementation

1. **Responsive Navigation Bar**
   - Fully responsive design with mobile hamburger menu
   - Smooth scroll navigation to all sections
   - Active section highlighting
   - Professional logo and branding

2. **Professional Hero Section**
   - Professional photo display with hover effects
   - Designation as Full Stack Developer (customizable)
   - Resume download button (ready for implementation)
   - Social media links (GitHub, LinkedIn, Twitter, Facebook)

3. **Comprehensive About Me Section**
   - Detailed programming journey
   - Work preferences and passion
   - Hobbies and interests outside programming
   - Personality showcase with engaging content

4. **Interactive Skills Section**
   - Categorized skills (Frontend, Backend, Tools)
   - Visual progress bars with animations
   - Skill level percentages
   - Interactive category switching

5. **Education Section**
   - Detailed educational background
   - Certifications and achievements
   - GPA and honors display
   - Timeline-based layout

6. **Professional Experience**
   - Timeline-based experience display
   - Current position highlighting
   - Detailed job descriptions
   - Skills and technologies used

7. **Portfolio Projects (3+ Projects)**
   - Project cards with images
   - "View Details" modal functionality
   - Technology stack display
   - Live project and GitHub links
   - Challenges faced documentation
   - Future improvements planning

8. **Contact Information**
   - Contact form with validation
   - Email, phone, and WhatsApp links
   - Interactive contact cards
   - Professional contact section

9. **Professional Footer**
   - Social media links
   - Quick navigation
   - Contact information
   - Copyright and legal links

10. **Fully Responsive Design**
    - Mobile-first approach
    - Tablet and desktop optimization
    - Professional color scheme
    - Smooth animations and transitions

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Additional**: GSAP for advanced animations
- **Icons**: Material Icons & Emojis
- **Fonts**: Playfair Display, Space Mono, Inter

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About me section
│   ├── AnimatedBackground.tsx # Background animations
│   ├── Contact.tsx          # Contact form and info
│   ├── Education.tsx        # Education and certifications
│   ├── Experience.tsx       # Work experience timeline
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section with photo
│   ├── Navigation.tsx       # Responsive navigation
│   ├── Portfolio.tsx        # Projects showcase
│   └── Skills.tsx           # Skills with categories
├── hooks/
│   └── useScrollAnimation.ts # Custom scroll animations
└── public/                  # Static assets
```

## 🎨 Design Features

- **Modern Glassmorphism Effects**: Subtle transparency and blur effects
- **Gradient Animations**: Dynamic color transitions
- **Smooth Scroll Navigation**: Seamless section transitions
- **Dark Mode Support**: Professional dark theme
- **Micro-interactions**: Hover effects and animations
- **Professional Typography**: Carefully selected font combinations
- **Accessibility**: Focus states and semantic HTML

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## ✏️ Customization Guide

### 1. Personal Information
Update the following files with your information:

**Hero Section** (`components/Hero.tsx`):
- Replace "Your Name Here" with your actual name
- Update the professional photo URL
- Change designation from "Full Stack Developer" to your title
- Update social media links

**About Section** (`components/About.tsx`):
- Customize the programming journey story
- Update work preferences and interests
- Add your personal hobbies and activities

### 2. Skills & Experience
**Skills** (`components/Skills.tsx`):
- Update skill categories and levels
- Add or remove technologies
- Adjust proficiency percentages

**Experience** (`components/Experience.tsx`):
- Replace with your actual work experience
- Update job titles, companies, and dates
- Modify descriptions and achievements

### 3. Education & Projects
**Education** (`components/Education.tsx`):
- Update with your educational background
- Add certifications and achievements
- Modify GPA and honors

**Portfolio** (`components/Portfolio.tsx`):
- Replace project information
- Update project images and descriptions
- Add your GitHub and live project links

### 4. Contact Information
**Contact** (`components/Contact.tsx`):
- Update email, phone, and WhatsApp numbers
- Modify contact form submission logic
- Update location information

**Footer** (`components/Footer.tsx`):
- Update social media links
- Modify contact information
- Add your actual website URL

### 5. Metadata & SEO
**Layout** (`app/layout.tsx`):
- Update title and description
- Add your website URL
- Update social media handles

## 🎯 Resume Integration

To implement the resume download functionality:

1. Add your resume PDF to the `public` folder
2. Update the `handleResumeDownload` function in `Hero.tsx`:

```typescript
const handleResumeDownload = () => {
  const link = document.createElement('a')
  link.href = '/your-resume.pdf'
  link.download = 'Your-Name-Resume.pdf'
  link.click()
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop build folder
- **GitHub Pages**: Use `next export` for static export
- **Custom Server**: Use `npm run build` and `npm start`

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized animations and lazy loading

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📞 Support

If you need help customizing this portfolio, feel free to reach out through the contact form or create an issue in the repository.

---

**Built with ❤️ using Next.js and modern web technologies**