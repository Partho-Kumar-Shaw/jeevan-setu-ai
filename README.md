# Jeevan Setu AI

**A modern, intelligent healthcare platform built with cutting-edge frontend technologies**

Jeevan Setu AI is a comprehensive frontend-focused web application designed to provide AI-powered healthcare solutions. The platform leverages React, TypeScript, and modern UI frameworks to deliver a seamless user experience for health assessment, patient care management, and healthcare provider connectivity.

🌐 **Live Demo**: [jeevan-setu-ai-six.vercel.app](https://jeevan-setu-ai-six.vercel.app)

## 🎯 Project Vision

Our mission is to democratize healthcare by:
- Providing intelligent, accessible health assessment tools through an intuitive web interface
- Enabling early disease detection through AI-powered symptom analysis
- Connecting patients with appropriate healthcare resources
- Delivering data-driven health insights with beautiful, responsive UI
- Making healthcare information accessible, affordable, and equitable

## ✨ Key Features

### 🏥 Health Assessment Interface
- **AI-Powered Symptom Checker**: Interactive form-based symptom analyzer with real-time validation
- **Medical History Tracking**: Secure digital health records management UI
- **Risk Assessment Dashboard**: Personalized health risk evaluation visualizations
- **Health Metrics Dashboard**: Beautiful charts and visualizations for health tracking

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive interface built with Tailwind CSS
- **Accessible Components**: WCAG-compliant UI components using Radix UI primitives
- **Dark/Light Mode**: Seamless theme switching for user comfort
- **Smooth Animations**: Elegant animations powered by Framer Motion

### 📊 Analytics & Visualization
- **Health Dashboards**: Interactive charts using Recharts for health metrics visualization
- **Data Tables**: Advanced table components with sorting, filtering, and pagination
- **Real-time Updates**: Live data synchronization using React Query
- **Personalized Recommendations**: AI-driven health insights with beautiful presentation

### 🔗 Provider Network Interface
- **Provider Directory**: Search and filter healthcare providers by specialty and location
- **Appointment Booking**: Intuitive booking interface for scheduling consultations
- **Communication Hub**: Integrated messaging interface for patient-provider communication
- **Telemedicine Support**: Video consultation interface

### 🔐 Security & Privacy
- **Client-side Validation**: Zod schema validation for all user inputs
- **Secure State Management**: Protected sensitive data handling with React hooks
- **Environment Configuration**: Secure API endpoint management
- **User Privacy Controls**: Granular permission UI for health data access

## 🛠️ Technology Stack

### Core Frontend
- **Framework**: React 19.2.0 with modern hooks and concurrent features
- **Routing**: TanStack Router 1.170.16 with file-based routing
- **State Management**: TanStack React Query 5.101.1 for server state, React Context API for UI state
- **Language**: TypeScript 5.8.3 for type safety
- **Build Tool**: Vite 8.0.16 with hot module replacement

### UI & Styling
- **Component Library**: Radix UI (15+ accessible component primitives)
- **Styling Framework**: Tailwind CSS 4.2.1 with Vite integration
- **Icon Library**: Lucide React 0.575.0
- **Form Handling**: React Hook Form 7.71.2 + Zod 3.24.2
- **UI Command Palette**: cmdk 1.1.1

### Visualization & Animation
- **Charts**: Recharts 2.15.4 for data visualization
- **Animations**: Framer Motion 12.42.0 for smooth UI transitions
- **Carousels**: Embla Carousel React 8.6.0
- **Resizable Panels**: react-resizable-panels 4.6.5

### Utilities & Integrations
- **Date Handling**: date-fns 4.1.0
- **Notification System**: Sonner 2.0.7 for toast notifications
- **OTP Input**: input-otp 1.4.2
- **Drawer Component**: vaul 1.1.2
- **CSS Utilities**: clsx 2.1.1, tailwind-merge 3.5.0
- **CLI Utility**: cmdk for command palette

### Development Tools
- **Linting**: ESLint 9.32.0 with TypeScript support
- **Code Formatting**: Prettier 3.7.3
- **Package Manager**: Bun (see bunfig.toml)
- **Type Safety**: TypeScript ESLint 8.56.1

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: 18.0 or higher (or Bun 1.0+)
- **npm** or **Bun**: Latest version for package management
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Partho-Kumar-Shaw/jeevan-setu-ai.git
cd jeevan-setu-ai
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun (recommended for faster installation):
```bash
bun install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=30000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true

# AI/LLM Integration (Optional)
VITE_OPENAI_API_KEY=your_api_key_here
VITE_MEDICAL_API_KEY=your_medical_api_key

# Telemedicine
VITE_WEBRTC_STUN_SERVERS=stun:stun.l.google.com:19302

# Application
VITE_APP_NAME="Jeevan Setu AI"
VITE_APP_DESCRIPTION="Intelligent Healthcare Platform"
```

### 4. Development Server

Using npm:
```bash
npm run dev
```

Or using Bun:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory.

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
jeevan-setu-ai/
├── src/
│   ├── routes/                          # File-based routing (TanStack Router)
│   │   ├── __root.tsx                   # Root layout wrapper
│   │   ├── index.tsx                    # Home page (/)
│   │   ├── about.tsx                    # About page
│   │   ├── health/
│   │   │   ├── index.tsx                # Health dashboard (/health)
│   │   │   ├── assessment.tsx           # Symptom checker (/health/assessment)
│   │   │   ├── history.tsx              # Medical history (/health/history)
│   │   │   └── $id.tsx                  # Individual health record detail
│   │   ├── providers/
│   │   │   ├── index.tsx                # Provider directory (/providers)
│   │   │   ├── search.tsx               # Provider search (/providers/search)
│   │   │   └── $id.tsx                  # Provider details (/providers/:id)
│   │   ├── appointments/
│   │   │   ├── index.tsx                # My appointments (/appointments)
│   │   │   └── book.tsx                 # Book appointment (/appointments/book)
│   │   ├── profile.tsx                  # User profile (/profile)
│   │   ├── settings.tsx                 # Settings (/settings)
│   │   └── _layout.tsx                  # Shared layout
│   │
│   ├── components/                      # Reusable React components
│   │   ├── ui/                          # Radix UI wrapper components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── alert.tsx
│   │   │   └── [other UI components]
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── health/
│   │   │   ├── symptom-checker-form.tsx
│   │   │   ├── health-metrics-chart.tsx
│   │   │   ├── health-card.tsx
│   │   │   └── risk-assessment.tsx
│   │   ├── providers/
│   │   │   ├── provider-card.tsx
│   │   │   ├── provider-filter.tsx
│   │   │   └── provider-list.tsx
│   │   ├── common/
│   │   │   ├── loading.tsx
│   │   │   ├── error-boundary.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── empty-state.tsx
│   │   └── [feature components]
│   │
│   ├── services/                        # API and external service integrations
│   │   ├── api-client.ts                # Axios/Fetch wrapper
│   │   ├── health-service.ts            # Health endpoints
│   │   ├── provider-service.ts          # Provider endpoints
│   │   ├── auth-service.ts              # Authentication
│   │   └── [domain services]
│   │
│   ├── hooks/                           # Custom React hooks
│   │   ├── use-health-data.ts
│   │   ├── use-providers.ts
│   │   ├── use-form-validation.ts
│   │   ├── use-local-storage.ts
│   │   └── [custom hooks]
│   │
│   ├── context/                         # React Context providers
│   │   ├── auth-context.tsx
│   │   ├── theme-context.tsx
│   │   └── [feature contexts]
│   │
│   ├── utils/                           # Utility functions
│   │   ├── cn.ts                        # Class name utilities
│   │   ├── format.ts                    # Data formatting
│   │   ├── validation.ts                # Form validation schemas
│   │   └── [utility functions]
│   │
│   ├── types/                           # TypeScript type definitions
│   │   ├── health.ts
│   │   ├── provider.ts
│   │   ├── user.ts
│   │   └── [domain types]
│   │
│   ├── styles/                          # Global styles
│   │   ├── globals.css                  # Tailwind directives
│   │   └── animations.css               # Custom animations
│   │
│   ├── App.tsx                          # Root component
│   ├── main.tsx                         # Entry point
│   └── routeTree.gen.ts                 # Auto-generated route tree (TanStack)
│
├── public/                              # Static assets
│   ├── favicon.ico
│   ├── logos/
│   └── [static files]
│
├── .github/
│   └── workflows/                       # CI/CD pipelines
│       ├── build.yml
│       └── deploy.yml
│
├── components.json                      # shadcn component config
├── package.json                         # Project dependencies
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite configuration
├── tailwind.config.ts                   # Tailwind CSS configuration
├── eslint.config.js                     # ESLint configuration
├── .prettierrc                          # Prettier formatting
├── bunfig.toml                          # Bun configuration
├── .gitignore
├── AGENTS.md                            # Lovable AI integration notes
├── LICENSE
└── README.md                            # This file
```

## 🎨 UI Components

The project uses **Radix UI** as the foundation for all accessible components, wrapped with Tailwind CSS styling. Key components available:

- **Forms**: Input, Select, Checkbox, Radio, Toggle, Textarea
- **Dialogs**: Dialog, Alert Dialog, Popover, Drawer
- **Navigation**: Menubar, Dropdown Menu, Context Menu, Navigation Menu
- **Data Display**: Tabs, Accordion, Carousel, Scroll Area
- **Feedback**: Toast (via Sonner), Progress
- **Utilities**: Avatar, Badge, Separator, Tooltip

All components are designed to be accessible and customizable through Tailwind CSS classes.

## 🎯 Key Features Implementation

### Health Assessment Flow
1. User fills symptom checker form with validation
2. Form data sent to AI analysis service
3. Real-time risk assessment displayed
4. Historical tracking with charts
5. Personalized recommendations shown

### Provider Discovery
1. Search and filter providers by specialty, location, ratings
2. View provider profiles and availability
3. Book appointments through intuitive UI
4. Manage appointments with reminders

### Dashboard
1. View health metrics with interactive charts
2. Track medical history
3. Access health records
4. Receive personalized health insights

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Tablet**: 768px to 1919px
- **Mobile**: Below 768px




## 🚀 Deployment


Live demo is deployed at: [jeevan-setu-ai-six.vercel.app](https://jeevan-setu-ai-six.vercel.app)


## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/jeevan-setu-ai.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes and Commit**
   ```bash
   npm run format
   npm run lint
   git add .
   git commit -m "feat: description of your feature"
   ```

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Provide clear description of changes
   - Reference related issues
   - Ensure linting passes


## 📞 Contact & Links

- **Email**: parthokumarshaw@gmail.com
- **GitHub**: [@Partho-Kumar-Shaw](https://github.com/Partho-Kumar-Shaw)
- **Live Demo**: [jeevan-setu-ai-six.vercel.app](https://jeevan-setu-ai-six.vercel.app)
- **Repository**: [github.com/Partho-Kumar-Shaw/jeevan-setu-ai](https://github.com/Partho-Kumar-Shaw/jeevan-setu-ai)

---

**Made with ❤️ by Partho Kumar Shaw**

*Last Updated: July 25, 2026*
