# BWB Digital Assets - Real Estate Tokenization POC Development Prompt

## 🎯 POC Overview

Create a beautiful, mobile-responsive POC for BWB Digital Assets - a real estate tokenization platform that demonstrates three key user flows through mockups and UI/UX excellence.

### Core Value Proposition
"Diversifique o seu patrimônio com as melhores oportunidades de investimento do mercado imobiliário" - Enable investors to diversify their portfolio through tokenized real estate investments.

## 🎨 Design System & Branding

### Brand Guidelines (from https://bwbi.com.br/)
- **Primary Colors**: 
  - Deep Navy Blue (#1a2b4a - background)
  - Gold/Bronze (#c5a572 - accents, buttons)
  - White (#ffffff - text on dark)
  - Light Gray (#f5f5f5 - light backgrounds)

- **Typography**:
  - Modern, clean sans-serif fonts
  - Strong hierarchy with bold headings
  - Professional and trustworthy tone

- **Visual Style**:
  - Sophisticated and premium feel
  - Glass morphism effects on cards
  - Subtle gradients and shadows
  - Professional real estate imagery with blue overlay

### UI Inspiration (from https://urbe.me)
- Clean card-based layouts for property listings
- Interactive maps for property locations
- Progress bars for funding status
- Modern dashboard with clear metrics
- Web and Mobile responsive design
- You MUST use the components of the React Native Reusables UI Library (It's the React Native version of the Shadcn): https://reactnativereusables.com/docs 
- You MUST the Shadcn Blocks as design references for both Mobile and Web versions work seamlessly: https://ui.shadcn.com/blocks

## 👥 User Personas & Flows

### 1. **Law Firm Admin (Token Creator)**
**Goal**: Create and manage tokenized real estate offerings

**User Flow**:
```
Login → Admin Dashboard → Create New Offering → Configure Token Parameters → 
Design Custom Page → Preview → Publish → Monitor Performance
```

**Key Screens**:
- Admin Dashboard (overview of all offerings)
- Offering Creation Wizard (step-by-step)
- Token Configuration (supply, price, terms)
- Page Builder (drag-drop customization)
- Analytics Dashboard

### 2. **Investor (Token Buyer)**
**Goal**: Discover and invest in real estate opportunities

**User Flow**:
```
Landing → Browse Marketplace → View Property Details → Investment Simulator → 
Mock Web3 Login → Investment Amount → Confirm Purchase → Portfolio Dashboard
```

**Key Screens**:
- Marketplace (grid of opportunities)
- Property Detail Page (comprehensive info)
- Investment Calculator
- Purchase Flow (with PIX/BRLA simulation)
- Portfolio Dashboard (holdings & performance)

### 3. **Real Estate Developer (Offering Owner)**
**Goal**: Showcase property and track fundraising

**User Flow**:
```
Custom Landing Page → Project Showcase → Funding Progress → 
Investor Analytics → Document Repository
```

**Key Screens**:
- Custom branded property page
- Funding progress dashboard
- Investor list and analytics

## 🛠️ Technical Implementation

### Stack
- **Framework**: React Native (Expo)
- **Styling**: NativeWind (Tailwind for React Native)
- **Navigation**: Expo Router
- **State**: React Context + Hooks
- **Components**: Custom UI library following design system

### Mock Implementations
1. **Authentication**:
   - Mock Web3 wallet connection UI
   - Simulated MetaMask/WalletConnect flow
   - Email/password as fallback

2. **Blockchain Interactions**:
   - Animated transaction confirmations
   - Mock token balance updates
   - Simulated gas fee calculations

3. **Payment Flow**:
   - PIX QR code generation (static)
   - BRLA conversion animation
   - Mock payment confirmation

## 📱 Core Features to Implement

### Admin Dashboard
```typescript
// Key Features
- Offering creation wizard (5 steps)
- Token parameter configuration
- Custom page builder with templates
- KYC approval interface (mock)
- Analytics and reporting dashboard
```

### Marketplace
```typescript
// Key Features
- Property grid with filters
- Search by location, price, ROI
- Interactive map view
- "Hot opportunities" section
- Public/Private offering tabs
```

### Property Detail Page
```typescript
// Key Features
- Hero image gallery
- Investment calculator
- Project timeline
- Document viewer (PDFs)
- Live funding progress
- Developer profile
- Location map
```

### Investment Flow
```typescript
// Key Features
- Investment amount selector
- Payment method choice (PIX/Wallet)
- Terms acceptance
- Transaction animation
- Success confirmation
```

### Portfolio Dashboard
```typescript
// Key Features
- Total portfolio value
- Individual property performance
- ROI charts and metrics
- Transaction history
- Upcoming dividends
- Export reports button
```

## 🎯 Deliverables

### Phase 1: Foundation (Week 1)
1. Project setup with Expo and NativeWind
2. Design system implementation
3. Navigation structure
4. Mock authentication flow

### Phase 2: Core Screens (Week 2)
1. Marketplace implementation
2. Property detail pages
3. Investment flow
4. Admin dashboard basic

### Phase 3: Polish & Demo (Week 3)
1. Animations and transitions
2. Mock data population
3. Admin features completion
4. Demo preparation

## 📊 Success Metrics

1. **Visual Excellence**: Professional UI matching BWB brand
2. **User Flow Clarity**: Intuitive navigation for all personas
3. **Mobile Responsiveness**: Perfect on all screen sizes
4. **Demo Ready**: Smooth presentation flow
5. **Engagement**: Interactive elements that wow

## 🚀 Getting Started

```bash
# Clone the repository
git clone [repo-url]

# Install dependencies
cd bwb-digitals
npm install

# Start development
npm start
```

## 📝 Key Design Decisions

1. **Mobile-First**: All interfaces optimized for mobile
2. **Dark Theme**: Premium feel with navy blue base
3. **Card-Based**: Consistent card patterns throughout
4. **Micro-Interactions**: Subtle animations for engagement
5. **Real Content**: Use realistic property data and images

## 🎨 Component Library

Create reusable components:
- `PropertyCard`: Marketplace listing item
- `InvestmentCalculator`: ROI simulator
- `ProgressBar`: Funding status indicator
- `MetricCard`: Dashboard statistics
- `TokenDisplay`: Token balance/price display
- `TransactionModal`: Payment flow overlay

## 📱 Screen Priorities

### Must Have (MVP)
1. Landing page
2. Marketplace
3. Property detail
4. Investment flow
5. Portfolio dashboard
6. Admin dashboard

### Nice to Have
1. KYC process screens
2. Document management
3. Notifications
4. Settings/Profile

## 🔗 Mock Data Structure

```typescript
interface Property {
  id: string;
  name: string;
  location: string;
  totalValue: number;
  tokenPrice: number;
  availableTokens: number;
  soldTokens: number;
  expectedROI: number;
  images: string[];
  developer: Developer;
  documents: Document[];
}

interface Investment {
  propertyId: string;
  tokens: number;
  investedAmount: number;
  currentValue: number;
  purchaseDate: Date;
}
```

## 🎯 Final Notes

- Focus on **visual impact** and **smooth UX**
- All data should be **mocked but realistic**
- Emphasize the **premium investment** feel
- Make it **demo-friendly** with clear user journeys
- Ensure **Brazilian market** context (R$, PIX, Portuguese hints)

This POC should effectively communicate the platform's value proposition and demonstrate how tokenization makes real estate investment more accessible and liquid.
