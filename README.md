# 🎫 Neve Tickets

A modern, fast, and scalable React frontend application for comprehensive ticket management. Built with cutting-edge web technologies to deliver a smooth, responsive user experience for managing support tickets, issues, and task tracking.

### Key Highlights
- ⚡ **Lightning-fast performance** - Vite build tool with hot module replacement
- 🎨 **Beautiful UI** - Tailwind CSS with Radix UI accessible components
- 🔒 **Type-safe** - Full TypeScript support for reliable code
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🚀 **Production-ready** - Optimized build, ready to deploy anywhere

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:5173
```

---

## 📦 Tech Stack

| Technology | Version |
|------------|---------|
| React | 18.3.1 |
| TypeScript | 5.9.2 |
| Vite | 7.1.2 |
| Tailwind CSS | 3.4.17 |
| React Router | 6.30.1 |
| React Query | 5.84.2 |

---

## 📁 Project Structure

```
client/              # React components
├── pages/          # Page components
├── components/     # Reusable UI components
├── hooks/          # Custom hooks
├── lib/            # Utilities
└── data/           # Constants
public/             # Static assets
index.html          # Entry point
```

---

## 🛠️ Available Commands

```bash
pnpm dev            # Development server with hot reload
pnpm build          # Production build
pnpm preview        # Preview production build
pnpm test           # Run tests
pnpm typecheck      # TypeScript checking
pnpm format.fix     # Format code
```

---

## 🔧 Environment Variables

Create `.env` file:
```env
VITE_API_URL=http://localhost:3000
VITE_PUBLIC_BUILDER_KEY=your_key
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🎨 Features

- ✅ Fast development with Vite
- ✅ Type-safe with TypeScript
- ✅ Responsive design (Tailwind CSS)
- ✅ Accessible components (Radix UI)
- ✅ Client-side routing (React Router)
- ✅ Data fetching (React Query)
- ✅ Smooth animations (Framer Motion)
- ✅ 3D graphics support (Three.js)

---

## 📚 Documentation

- [Vite](https://vitejs.dev) - Build tool docs
- [React](https://react.dev) - React documentation
- [TypeScript](https://www.typescriptlang.org) - Type safety guide
- [Tailwind CSS](https://tailwindcss.com) - Styling framework

---

## 🚢 Deployment

Build for production:
```bash
pnpm build
```

Deploy `dist/` folder to:
- **Vercel** | **Netlify** | **GitHub Pages** | **AWS S3**

---

## 📝 License

MIT

---

Made with ❤️ using modern web technologies.
