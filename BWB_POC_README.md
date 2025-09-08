# BWB Digital Assets - Real Estate Tokenization POC

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# For iOS
npm run ios

# For Android  
npm run android

# For Web
npm run web
```

## 🎯 What's Implemented

### ✅ Phase 1: Foundation (Completed)
- **BWB Branding**: Custom design system with BWB colors (Navy Blue #1a2b4a & Gold #c5a572)
- **Typography System**: Custom Typography component following brand guidelines
- **Navigation Structure**: Multi-user flow navigation with Expo Router
- **Responsive Design**: Beautiful mobile-first UI with NativeWind (Tailwind for React Native)

### ✅ Core Screens Implemented

#### 🏠 Landing Page (`/`)
- Hero section with value proposition
- Feature highlights (Security, ROI, Liquidity, Diversification)
- User type selection (Investor, Admin, Developer)
- Statistics showcase

#### 💼 Investor Flow
1. **Marketplace** (`/marketplace`)
   - Property grid with filtering
   - Hot opportunities banner
   - Search functionality
   - Card-based property listings

2. **Property Details** (`/marketplace/[id]`)
   - Image gallery
   - Investment calculator
   - Funding progress
   - Property specifications
   - Developer information
   - Document links

3. **Investment Flow** (`/marketplace/invest`)
   - Payment method selection (PIX/Wallet)
   - PIX QR code generation
   - Wallet connection simulation
   - Transaction confirmation
   - Success screen with summary

4. **Portfolio Dashboard** (`/investor/portfolio`)
   - Total portfolio value
   - Performance metrics
   - Investment list with ROI
   - Recent transactions
   - Monthly income tracking

#### 👔 Admin Flow
1. **Admin Dashboard** (`/admin`)
   - Overview statistics
   - Recent activity feed
   - Quick actions
   - KYC pending notifications

#### 🏗️ Developer Flow
1. **Developer Dashboard** (`/developer`)
   - Active projects overview
   - Funding progress tracking
   - Project management cards
   - Quick action links

#### 🔐 Authentication
1. **Login Screen** (`/auth/login`)
   - Web3 wallet connection (MetaMask/WalletConnect)
   - Traditional email/password login
   - Beautiful UI with brand colors

## 🎨 Design Features

- **Premium Feel**: Glass morphism effects, subtle gradients
- **Brand Colors**: Deep Navy Blue (#1a2b4a) and Gold/Bronze (#c5a572)
- **Responsive**: Works beautifully on all screen sizes
- **Animations**: Smooth transitions and micro-interactions
- **Dark Mode**: Full theme support (automatic)

## 📱 Key User Flows

### Investor Journey
1. Browse marketplace → View property details → Calculate investment
2. Choose payment method → Complete transaction → View in portfolio
3. Track performance → Monitor monthly income

### Admin Journey
1. View dashboard → Create new offering → Configure tokens
2. Monitor KYC approvals → Track performance

### Developer Journey
1. View project status → Edit custom landing pages
2. Track funding progress → Communicate with investors

## 🧩 Technical Stack

- **Framework**: React Native with Expo
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router (file-based routing)
- **UI Components**: React Native Reusables (Shadcn for React Native)
- **Icons**: Lucide React Native
- **State**: React Hooks & Context

## 📂 Project Structure

```
app/
├── index.tsx              # Landing page
├── auth/
│   └── login.tsx         # Authentication
├── marketplace/
│   ├── index.tsx         # Property listings
│   ├── [id].tsx         # Property details
│   └── invest.tsx       # Investment flow
├── investor/
│   └── portfolio.tsx    # Portfolio dashboard
├── admin/
│   └── index.tsx        # Admin dashboard
└── developer/
    └── index.tsx        # Developer dashboard

src/
├── components/ui/        # Reusable UI components
├── shared/
│   └── components/
│       └── Typography.tsx # Custom typography
└── domains/             # Domain-driven structure
```

## 🎯 Next Steps

### To Complete the POC:
1. **Mock Authentication Flow**: Complete Web3 wallet integration simulation
2. **Offering Creation Wizard**: Multi-step form for admins
3. **Custom Landing Page Builder**: Drag-and-drop for developers
4. **Mock Data Service**: Centralized data management

### Future Enhancements:
- Real blockchain integration
- PIX payment gateway
- KYC/AML integration
- Document management system
- Analytics dashboard
- Multi-language support

## 🎮 Demo Flow

1. Start at landing page
2. Click "Explorar Oportunidades" to browse marketplace
3. Select a property to view details
4. Use investment calculator and click "Investir Agora"
5. Complete payment flow (choose PIX for visual demo)
6. View success screen
7. Check portfolio dashboard

## 🔥 Hot Features

- **Investment Calculator**: Real-time ROI calculations
- **PIX Integration**: QR code generation for payments
- **Web3 Ready**: Wallet connection UI prepared
- **Beautiful Cards**: Premium property showcases
- **Responsive Design**: Perfect on all devices

## 📝 Notes

- All data is mocked for POC purposes
- Blockchain interactions are simulated
- PIX payments show UI flow only
- Focus on UX and visual excellence

---

Built with ❤️ for BWB Digital Assets
