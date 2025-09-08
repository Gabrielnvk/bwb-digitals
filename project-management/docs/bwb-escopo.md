
## **TL;DR**

* Plataforma de tokenização para captaçao de recursos para incorporadores whitelabel para criar páginas personalizadas na ofertas de investimento em Real Estate.  
* Sistema de três camadas: BWB cria/gerencia páginas e setup dos tokens,  marketplace privado para venda de token das incorporadoras, investidores compram tokens nas páginas das incorporadoras.  
* Mobile-web responsivo.  
* Plataforma integrada com Web3 e métodos de pagamento tradicionais (PIX).  
* Entrega da V1 em 3 meses.

## **PÁGINAS E CONTEÚDOS**

**PÁGINA DE ADMINISTRAÇÃO (Escritório de Advocacia)**

* Interface de criação e configuração de tokens.  
* Construtor de páginas personalizadas com modelos customizáveis.  
* Sistema de gerenciamento de documentos para conformidade legal.  
* Painel de gerenciamento de múltiplos projetos de clientes.  
* Implantação de contratos inteligentes usando modelos pré-definidos.  
* Fluxo de trabalho de conformidade com trilhas de auditoria.  
* Operações em massa para gerenciar múltiplas incorporadoras.  
* Interface de gerenciamento de verificação KYC.  
* Convite para ofertas privadas

**PLATAFORMA DE INVESTIMENTO**

* marketplace personalizado (privado) com suporte a domínio personalizado.  
* Vitrine de propriedades com mapas interativos.  
* Detalhes e termos da oportunidade de investimento.  
* Repositório de documentos (contratos, certificados, planilhas de investimento).  
* Apresentações em vídeo e galerias de imagens.  
* footer com integraçao das redes sociais do incorporador  
* Perfil e portfólio do incorporador.  
* Indicadores de progresso de financiamento em tempo real.  
* Fluxo de integração automatizado para investidores.  
* Conector de perfil (wallet) para compra de tokens

**PÁGINA DO PAINEL DO INVESTIDOR**

* Visão geral do portfólio com o valor total investido.  
* Métricas de desempenho de propriedades individuais.  
* Rastreamento de ROI com gráficos históricos.  
* Rastreamento da evolução do projeto imobiliário.  
* Histórico de transações.  
* Central de gerenciamento de documentos.  
* Saldo da carteira e funções de saque.  
* Análise de investimento e visualização de retornos.  
* Funcionalidade de exportar relatórios.  
* Conector de perfil (wallet) para gerenciamento de tokens

## **EXPERIÊNCIA DO USUÁRIO**

* Integração com autenticação baseada em e-mail ou carteira Web3 via Privy (ou outra carteira com account abstraction).  
* Suporte para Contas Pessoais e Pessoas Jurídicas com múltiplos stakeholders.  
* Integração KYC para conformidade.  
* Compra de tokens simplificada: processo de investimento em poucos cliques.  
* Integração de pagamento PIX via stablecoin BRLA.  
* Não é necessário conhecimento de cripto para investidores.  
* Rastreamento de portfólio em tempo real.  
* Suporte a tema claro/escuro.  
* Design responsivo para celular (web-mobile).

## **DESCRIÇÃO DO DESIGN DO PRODUTO**

* Implementação das diretrizes de marca BWB existentes.  
* Interface moderna e limpa com alternância de modo claro/escuro.  
* Sistema de design baseado em componentes para consistência.  
* Layouts responsivos otimizados para desktop e web móvel.  
* Navegação intuitiva para usuários não técnicos.  
* Hierarquia visual clara para dados financeiros.  
* Gráficos interativos para análise de investimentos.  
* Recursos de acessibilidade para uma base de usuários diversificada, incluindo pessoas jurídicas.

## **DESCRIÇÃO TÉCNICA** 

* **Backend Stack:** Node.js com framework NestJS, banco de dados MongoDB, PrismaORM, TypeScript.  
* **Blockchain:** Rede Base para transações de baixo custo.  
* **Contratos Inteligentes:** NFTs ERC-721 para tokens de propriedade, contratos de divisão para escrow, logicas de retorno do investimento  
* **Infraestrutura de Carteira:** Privy ou similar para abstração de conta e transações permissionadas.  
* **Autenticação:** Carteiras Web3 \+ Login social via abstração de conta.  
* **Frontend:** React com TypeScript, atualizações de dados em tempo real.  
* **Segurança:** Autenticação multifator, armazenamento criptografado, integração com provedor KYC.  
* **Multi-moeda:** Suporte para ativos cripto e BRL via stablecoin BRLA.

## **ROADMAP**

**![][image1]**

## **SCRUM E SPRINTS**

* Ciclos de sprint de 1 semana  
* 1 Standups por semana de 15 min  
* 1x planning e 1x retro por semana (30 min cada)  
* Sessões de planejamento de sprint (ad hoc)  
* Sessões de demonstração com stakeholders (ad hoc)  
* Github / Clickup para gestao de projetos

## **SQUAD**

* Julia Hoffmann (**Product Designer)** \- Product Designer, fundadora da carteira Chainless, especialista em UX de cripto desde 2021

  **Responsabilidade:** Design de UI/UX, fluxos de usuário, implementação do sistema de design.

* Maximiliano Salvatti (**Fullstack Developer)** \- Desenvolvedor Fullstack, mais de 7 anos em cripto, construiu plataformas de negociação

  **Responsabilidade:** APIs de Backend, gerenciamento de banco de dados, integrações (web3 e web2), apoio e revisao de Smart Contract, wallet connect

* Pedro Henrique (**Smart Contract Developer)** \- Engenheiro de Contrato Inteligente, especialista em infraestrutura blockchain na The Graph

  **Responsabilidade:** Contratos de token, sistema de escrow, auditorias, otimização de gás.

* Gabriel Novak (**PM)** \-  Líder de Projeto com vasta experiência em Web3 e tokenização

  **Responsabilidade:** Planejamento de sprint, comunicação com stakeholders, rastreamento de entrega.

* Carlos Eduardo (**Frontend Developer \- Techlead)** \- Líder Técnico, fundador da Volt Brasil, especialista em plataformas whitelabel

  **Responsabilidade:** Desenvolvimento React (front), auxílio na integração, coordenação de equipe.


