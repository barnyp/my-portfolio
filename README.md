# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, shadcn/ui, and Tailwind CSS. Features a dynamic blog system, functional contact form, beautiful UI components, and production-ready Docker deployment for Coolify.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Blog System**: Markdown-based blog with automatic post generation
- **Contact Form**: Functional contact form with email sending via Resend
- **Interactive Sections**: Hero, About, Skills, Portfolio, Services, Testimonials
- **Smooth Animations**: Framer Motion animations and smooth scrolling
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router and React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict typing
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Blog**: Markdown with [gray-matter](https://github.com/jonschlinkert/gray-matter) and [remark](https://remark.js.org/)
- **Email**: [Resend](https://resend.com/) with [React Email](https://react.email/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Docker containerization for Coolify, also ready for Vercel or Netlify

## 📋 Prerequisites

- Node.js 20+ (Node 20-alpine used for Docker image)
- npm, yarn, or pnpm
- Resend API key (for contact form functionality)
- Docker (optional, for containerization)
- Coolify account (optional, for deployment)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio/nextjs-shadcn-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Resend API key to `.env.local`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-portfolio/
├── public/                    # Public assets
│   └── img/                   # Images and assets
├── src/
│   ├── app/
│   │   ├── api/contact/       # Contact form API endpoint
│   │   ├── blog/              # Blog pages and routing
│   │   ├── contact/           # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── emails/            # Email templates
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   │   ├── shared/            # Shared components
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── posts.ts           # Blog post utilities
│       ├── utils.ts           # Utility functions
│       └── markdownToHtml.ts  # Markdown processing
├── content/
│   └── blog/                  # Markdown blog posts
├── docs/                      # Project documentation
│   ├── PRD.md                 # Product requirements
│   ├── arch-diagrams.md       # Architecture diagrams
│   ├── api-specs.md           # API specifications
│   ├── lessons-learned.md     # Development insights
│   └── work-log.md            # Development progress log
├── Dockerfile                 # Docker configuration for production
├── fix-jsx-types.sh           # Script to fix TypeScript JSX types
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration (with standalone output)
└── package.json               # Dependencies and scripts
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Add frontmatter with required fields:
   ```markdown
   ---
   title: 'Your Post Title'
   date: '2024-01-01'
   summary: 'Brief description of the post'
   coverImage: '/img/blog-image.jpg'
   excerpt: 'Short excerpt for the blog listing'
   ---
   
   Your blog content here...
   ```

### Customizing Content

- **Personal Information**: Update `src/components/sections/Hero.tsx` and `About.tsx`
- **Skills**: Modify `src/components/sections/Skills.tsx`
- **Portfolio Items**: Update `src/components/sections/Portfolio.tsx`
- **Services**: Edit `src/components/sections/Services.tsx`

## 🎨 Customization

### Theme Colors
The project uses CSS variables for theming. Customize colors in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* Add your custom colors */
}
```

### Adding Components
Use shadcn/ui to add new components:

```bash
npx shadcn@latest add component-name
```

## 📧 Contact Form Setup

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com/)
   - Create an API key in your dashboard

2. **Configure Environment**
   - Add `RESEND_API_KEY` to your `.env.local`
   - Update the "from" email in `src/app/api/contact/route.ts`

3. **Test the Form**
   - Fill out the contact form on `/contact`
   - Check your email for the test message

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The project works with any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Docker & Deployment

#### Local Docker Testing
- `docker build -t my-portfolio .` - Build the Docker image
- `docker run -p 3000:3000 my-portfolio` - Run the container locally

#### Coolify Deployment
1. Push code to your Git repository
2. In Coolify:
   - Create new application
   - Select repository
   - Build Pack: Dockerfile
   - Port Exposes: 3000
   - Configure environment variables
   - Deploy

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for email functionality | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [shadcn/ui documentation](https://ui.shadcn.com/)
3. Search existing issues or create a new one

---

Built with ❤️ using Next.js and shadcn/ui
