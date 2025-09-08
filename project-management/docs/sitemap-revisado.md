# Documentação de Sitemap e Fluxos - Plataforma de Tokenização Imobiliária (Revisada)

## Informações do Projeto

**Nome do Projeto:** Plataforma de Tokenização Imobiliária (Whitelabel)
**Tipo:** Web Application Multi-tenant com Marketplace
**Tecnologia Alvo:** Next.js, React, TypeScript, NestJS, MongoDB, Blockchain (Polygon)
**Público-alvo:** Administradores (Escritórios de Advocacia), Investidores (Público/Privado)

---

## Estrutura do Sitemap Revisada

### Hierarquia de Páginas
```
├── Landing Page (/)
├── Autenticação & KYC
│   ├── Login (/login)
│   ├── Cadastro (/register)
│   ├── Recuperar Senha (/forgot-password)
│   └── Processo KYC (/kyc)
│       ├── Documentos (/kyc/documents)
│       ├── Verificação (/kyc/verification)
│       └── Status (/kyc/status)
├── Admin Dashboard (/admin)
│   ├── Overview (/admin/dashboard)
│   ├── Clientes & KYC (/admin/clients)
│   │   ├── Lista de Clientes (/admin/clients/list)
│   │   ├── Aprovação KYC (/admin/clients/kyc-approval)
│   │   └── Perfil do Cliente (/admin/clients/[id])
│   ├── Originação de Ofertas (/admin/origination)
│   │   ├── Criar Oferta (/admin/origination/create)
│   │   ├── Wizard de Tokenização (/admin/origination/tokenize)
│   │   ├── Gestão de Ofertas (/admin/origination/manage)
│   │   └── Deploy Contratos (/admin/origination/contracts)
│   ├── Compliance (/admin/compliance)
│   │   ├── Relatórios AML (/admin/compliance/aml)
│   │   ├── Auditoria (/admin/compliance/audit)
│   │   └── Documentação Legal (/admin/compliance/legal)
│   └── Configurações (/admin/settings)
├── Marketplace (/marketplace)
│   ├── Ofertas Públicas (/marketplace/public)
│   │   ├── Lista de Ofertas (/marketplace/public/offers)
│   │   ├── Detalhes da Oferta (/marketplace/public/offers/[id])
│   │   ├── Filtros e Busca (/marketplace/public/search)
│   │   └── Investir (/marketplace/public/invest/[id])
│   ├── Ofertas Privadas (/marketplace/private)
│   │   ├── Acesso por Convite (/marketplace/private/invite)
│   │   ├── Ofertas Exclusivas (/marketplace/private/exclusive)
│   │   ├── Detalhes VIP (/marketplace/private/offers/[id])
│   │   └── Investimento Privado (/marketplace/private/invest/[id])
│   └── Comparar Ofertas (/marketplace/compare)
└── Meus Investimentos (/investments)
    ├── Dashboard (/investments/dashboard)
    ├── Portfólio (/investments/portfolio)
    │   ├── Visão Geral (/investments/portfolio/overview)
    │   ├── Por Projeto (/investments/portfolio/projects)
    │   └── Análise ROI (/investments/portfolio/analysis)
    ├── Transações (/investments/transactions)
    │   ├── Histórico (/investments/transactions/history)
    │   ├── Pendentes (/investments/transactions/pending)
    │   └── Extratos (/investments/transactions/statements)
    ├── Wallet Digital (/investments/wallet)
    │   ├── Saldos (/investments/wallet/balance)
    │   ├── Depósitos PIX (/investments/wallet/deposit)
    │   ├── Saques (/investments/wallet/withdraw)
    │   └── Conectar Carteira (/investments/wallet/connect)
    └── Relatórios (/investments/reports)
        ├── Performance (/investments/reports/performance)
        ├── Tributário (/investments/reports/tax)
        └── Exportar Dados (/investments/reports/export)
```

### Descrição das Áreas Principais

## 1. Autenticação & KYC

### **Login (/login)**
- **Objetivo:** Ponto de entrada único para todos os usuários
- **Métodos de autenticação:**
  - Email/senha tradicional
  - Wallet Web3 (MetaMask, WalletConnect)
  - Login social (Google, LinkedIn)
- **Redirecionamento baseado em role:**
  - Admin → /admin/dashboard
  - Investidor → /marketplace/public (primeira visita) ou /investments/dashboard

### **Processo KYC (/kyc)**
- **Objetivo:** Verificação obrigatória para todos os investidores
- **Fluxo em etapas:**
  1. **Informações básicas** - Nome, CPF, endereço
  2. **Upload de documentos** - RG, CPF, comprovante de renda
  3. **Verificação facial** - Selfie + liveness detection
  4. **Aprovação** - Review pelo admin
- **Níveis de KYC:**
  - **Nível 1:** Até R$ 5.000 (documentos básicos)
  - **Nível 2:** Até R$ 100.000 (verificação completa)
  - **Nível 3:** Ilimitado (verificação presencial)

---

## 2. Admin Dashboard - Originação

### **Clientes & KYC (/admin/clients)**
- **Objetivo:** Gestão centralizada de todos os investidores
- **Funcionalidades:**
  - Lista paginada com filtros (status KYC, nível, data)
  - Aprovação/rejeição de documentos KYC
  - Histórico de investimentos por cliente
  - Comunicação interna (notas e observações)
  - Relatórios de compliance por cliente

### **Originação de Ofertas (/admin/origination)**
- **Objetivo:** Core do negócio - criação e gestão de ofertas tokenizadas
- **Wizard de criação:**
  1. **Dados do projeto** - Nome, descrição, localização, cronograma
  2. **Estrutura financeira** - Valor total, preço do token, quantidade
  3. **Documentação legal** - Contratos, alvarás, memoriais
  4. **Configuração blockchain** - Parâmetros do contrato inteligente
  5. **Modalidade de oferta** - Pública, privada ou mista
  6. **Deploy e publicação** - Ativação no marketplace

- **Gestão de ofertas ativas:**
  - Dashboard com métricas de captação
  - Controle de estoque de tokens
  - Ajustes de preço e condições
  - Pause/resume de ofertas
  - Relatórios de performance

### **Deploy de Contratos (/admin/origination/contracts)**
- **Objetivo:** Gestão técnica dos contratos inteligentes
- **Funcionalidades:**
  - Templates de contratos ERC-721
  - Configuração de parâmetros (supply, metadata, royalties)
  - Deploy na Polygon mainnet/testnet
  - Monitoramento de transações
  - Upgrade de contratos (proxy patterns)

---

## 3. Marketplace de Ofertas

### **Ofertas Públicas (/marketplace/public)**
- **Objetivo:** Vitrine aberta para todos os investidores aprovados no KYC
- **Características:**
  - **Catálogo visual** com cards de projeto
  - **Filtros avançados** - Localização, valor, ROI, prazo
  - **Busca textual** - Por nome, incorporador, região
  - **Ordenação** - Mais populares, menor preço, maior ROI
  - **Mapa interativo** - Visualização geográfica dos projetos

### **Ofertas Privadas (/marketplace/private)**
- **Objetivo:** Área exclusiva para ofertas por convite ou high-end
- **Acesso controlado:**
  - **Sistema de convites** - Admin envia convites específicos
  - **Códigos de acesso** - Entrada via código exclusivo
  - **Lista VIP** - Investidores qualificados automaticamente
- **Funcionalidades especiais:**
  - **Due diligence ampliada** - Documentos adicionais
  - **Condições especiais** - Preços diferenciados, lotes mínimos
  - **Atendimento personalizado** - Chat direto com originador

### **Detalhes da Oferta (/marketplace/[public|private]/offers/[id])**
- **Objetivo:** Página completa de apresentação do projeto
- **Conteúdo:**
  - **Hero section** - Imagens, vídeo, localização no mapa
  - **Informações financeiras** - Preço, quantidade disponível, ROI projetado
  - **Timeline do projeto** - Fases de desenvolvimento
  - **Documentação** - Memorial descritivo, plantas, alvarás
  - **Incorporador** - Histórico, outros projetos, credenciais
  - **Simulador de investimento** - Calculadora de retorno
  - **Área de investimento** - CTA para proceder com compra

---

## 4. Acompanhamento de Investimentos

### **Dashboard (/investments/dashboard)**
- **Objetivo:** Visão consolidada de todos os investimentos
- **Métricas principais:**
  - **Patrimônio total** - Valor investido + valorização
  - **ROI acumulado** - Performance geral
  - **Distribuição** - Por projeto, fase, geografia
  - **Próximos recebimentos** - Cronograma de dividendos
- **Widgets interativos:**
  - Gráfico de evolução patrimonial
  - Top 5 melhores investimentos
  - Alertas e notificações importantes

### **Portfólio (/investments/portfolio)**
- **Objetivo:** Gestão detalhada de cada investimento
- **Visualizações:**
  - **Lista de projetos** - Com status, quantidade de tokens, valor atual
  - **Performance individual** - ROI por projeto, dividendos recebidos
  - **Análise comparativa** - Benchmarking entre investimentos
  - **Projeções** - Simulações de cenários futuros

### **Wallet Digital (/investments/wallet)**
- **Objetivo:** Gestão financeira integrada
- **Funcionalidades:**
  - **Saldos multi-asset** - BRL, BRLA, tokens
  - **Depósitos via PIX** - Conversão automática para BRLA
  - **Saques para conta bancária** - Conversão BRLA → BRL
  - **Conectar wallet externa** - MetaMask, WalletConnect
  - **Histórico completo** - Todas as movimentações

### **Relatórios (/investments/reports)**
- **Objetivo:** Documentação para compliance e IR
- **Tipos de relatório:**
  - **Performance** - Análise de rentabilidade detalhada
  - **Tributário** - Dados para declaração de IR
  - **Extratos mensais** - Movimentações do período
  - **Certificados de investimento** - Comprovantes oficiais

---

## Fluxos de Usuário Revisados

### Fluxo 1: Primeiro Acesso de Investidor
```
Visitante → Landing → "Quero Investir" → Cadastro → KYC (3 etapas) → 
Aprovação Admin → Marketplace Público → [Explorar ofertas] → 
Selecionar projeto → Investir → PIX/Wallet → Confirmação → 
Meus Investimentos
```

**Pontos críticos:**
- KYC obrigatório antes de acessar marketplace
- Aprovação manual pelo admin
- Primeira compra guia para área de investimentos

### Fluxo 2: Investidor Recorrente
```
Login → [Decisão de entrada]
├── Ver investimentos → /investments/dashboard
├── Novas oportunidades → /marketplace/public
└── Oferta específica (bookmark) → /marketplace/offers/[id]
```

**Redundâncias de acesso:**
- Menu principal sempre visível: Marketplace | Meus Investimentos
- Botões de ação rápida no dashboard
- Notificações push para novas ofertas

### Fluxo 3: Admin - Originação de Nova Oferta
```
Admin Login → Dashboard → "Nova Oferta" → Wizard (5 etapas) → 
Preview → Deploy Contrato → Ativação → Marketplace → 
Monitoramento captação
```

**Sub-fluxos:**
- **Gestão de documentos** durante criação
- **Aprovação jurídica** antes do deploy
- **Configuração de modalidade** (público/privado/misto)

### Fluxo 4: Processo de Investimento Completo
```
Investidor → Marketplace → Oferta → [Valor] → [Método pagamento]
├── PIX → QR Code → Confirmação bancária → Conversão BRLA → Mint tokens
└── Wallet → Connect → Approve BRLA → Transfer → Mint tokens

Pós-investimento → Confirmação blockchain → Portfólio → Acompanhamento
```

---

## Regras de Negócio Específicas

### Originação de Ofertas
- **Aprovação obrigatória** - Toda oferta passa por compliance interno
- **Documentação mínima** - Memorial, alvará, registro incorporação
- **Limites por oferta** - Máximo R$ 50MM por projeto
- **Taxa de sucesso** - 2% sobre valor captado

### Marketplace
- **Ofertas públicas** - Acessíveis após KYC nível 1
- **Ofertas privadas** - Requer convite + KYC nível 2+
- **Estoque dinâmico** - Tokens disponíveis em tempo real
- **Preço fixo** - Sem leilões, preço definido pelo originador

### Investimentos
- **Investimento mínimo** - R$ 1.000 por projeto
- **Máximo por investidor** - Baseado no nível KYC
- **Lock-up period** - 6 meses mínimo para revenda
- **Dividendos** - Distribuição trimestral via BRLA

---

## Componentes Técnicos Específicos

### Componentes de Originação
- `OfferWizard` - Criação step-by-step
- `ContractDeployer` - Interface para blockchain
- `DocumentVault` - Upload e gestão de docs
- `ComplianceChecker` - Validações automáticas

### Componentes de Marketplace
- `OfferCard` - Card visual das ofertas
- `FilterSidebar` - Filtros avançados
- `InvestmentSimulator` - Calculadora ROI
- `InviteGate` - Controle acesso privado

### Componentes de Investimentos
- `PortfolioChart` - Gráficos de performance
- `WalletInterface` - Gestão multi-asset
- `TransactionStatus` - Status blockchain
- `ReportGenerator` - Geração de relatórios

---

## APIs Revisadas

### Originação
- `POST /admin/offers` - Criar nova oferta
- `GET /admin/offers` - Listar ofertas gerenciadas
- `PUT /admin/offers/[id]/status` - Ativar/pausar oferta
- `POST /admin/contracts/deploy` - Deploy contrato

### Marketplace
- `GET /marketplace/public` - Ofertas públicas
- `GET /marketplace/private` - Ofertas privadas (com auth)
- `POST /marketplace/invites/validate` - Validar convite
- `GET /offers/[id]/details` - Detalhes completos

### Investimentos
- `GET /investments/portfolio` - Portfólio do usuário
- `POST /investments/buy` - Executar investimento
- `GET /investments/transactions` - Histórico
- `POST /wallet/deposit` - PIX deposit
- `POST /wallet/withdraw` - Saque BRL

---

## Observações para a LLM

1. **Foco na originação** - Admin é o centro de controle de todo o processo
2. **Marketplace como vitrine** - Interface simples e atrativa para investidores
3. **KYC é gatekeeper** - Ninguém acessa marketplace sem aprovação
4. **Ofertas privadas são premium** - UX diferenciada para high-end
5. **Investimentos são relacionamento** - Dashboard rico para retenção
6. **Compliance first** - Toda ação passa por validações regulatórias
7. **Mobile-responsive** - Muitos acessos via celular
8. **Real-time updates** - WebSockets para estoque e preços
9. **Security paramount** - MFA, criptografia, auditoria
10. **Blockchain abstraction** - Esconder complexidade do usuário final

---

## Dados de Exemplo

### Oferta Tokenizada
```json
{
  "id": "offer_789",
  "name": "Residencial Green Valley",
  "type": "public", // public | private | mixed
  "status": "active", // draft | active | paused | sold_out | completed
  "financial": {
    "totalValue": 25000000,
    "tokenPrice": 5000,
    "totalSupply": 5000,
    "available": 3250,
    "sold": 1750,
    "minInvestment": 5000
  },
  "blockchain": {
    "contractAddress": "0xABC...123",
    "network": "polygon",
    "tokenStandard": "ERC-721"
  },
  "access": {
    "kycLevel": 1,
    "inviteRequired": false,
    "vipOnly": false
  }
}
```

### Investidor Portfolio
```json
{
  "userId": "user_456",
  "portfolio": {
    "totalInvested": 75000,
    "currentValue": 82500,
    "totalROI": 10.0,
    "positions": [
      {
        "offerId": "offer_789",
        "tokensOwned": 10,
        "investedAmount": 50000,
        "currentValue": 55000,
        "roi": 10.0
      }
    ]
  },
  "wallet": {
    "brlBalance": 5000,
    "brlaBalance": 15000,
    "connectedWallet": "0x123...ABC"
  }
}
```
