import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Typography } from '@/src/shared/components/Typography';
import { Stack, Link } from 'expo-router';
import { 
  TrendingUpIcon,
  TrendingDownIcon,
  DollarSignIcon,
  BuildingIcon,
  CalendarIcon,
  DownloadIcon,
  PieChartIcon,
  ActivityIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock portfolio data
const PORTFOLIO_DATA = {
  totalValue: 125000,
  totalInvested: 100000,
  totalReturn: 25000,
  percentageReturn: 25,
  monthlyIncome: 1850,
  investments: [
    {
      id: '1',
      propertyName: 'Edifício Platinum Tower',
      location: 'Vila Olímpia, SP',
      tokens: 500,
      investedAmount: 50000,
      currentValue: 62500,
      roi: 25,
      monthlyIncome: 925,
      status: 'active'
    },
    {
      id: '2',
      propertyName: 'Residencial Jardins',
      location: 'Jardins, SP',
      tokens: 120,
      investedAmount: 30000,
      currentValue: 34500,
      roi: 15,
      monthlyIncome: 450,
      status: 'active'
    },
    {
      id: '3',
      propertyName: 'Shopping Boulevard',
      location: 'Moema, SP',
      tokens: 40,
      investedAmount: 20000,
      currentValue: 28000,
      roi: 40,
      monthlyIncome: 475,
      status: 'active'
    }
  ],
  recentTransactions: [
    { id: '1', type: 'dividend', property: 'Platinum Tower', amount: 925, date: '2024-03-01' },
    { id: '2', type: 'purchase', property: 'Shopping Boulevard', amount: -20000, date: '2024-02-15' },
    { id: '3', type: 'dividend', property: 'Residencial Jardins', amount: 450, date: '2024-02-01' },
    { id: '4', type: 'sale', property: 'Office Park', amount: 15000, date: '2024-01-20' },
  ],
  performanceData: [
    { month: 'Jan', value: 100000 },
    { month: 'Fev', value: 105000 },
    { month: 'Mar', value: 110000 },
    { month: 'Abr', value: 115000 },
    { month: 'Mai', value: 120000 },
    { month: 'Jun', value: 125000 },
  ]
};

export default function PortfolioScreen() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'1M' | '3M' | '6M' | '1A'>('6M');

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Meu Portfólio',
          headerRight: () => (
            <Button size="icon" variant="ghost" className="mr-4">
              <Icon as={DownloadIcon} className="size-5" />
            </Button>
          ),
        }}
      />
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView 
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4 py-6">
            {/* Portfolio Summary */}
            <Card className="p-6 mb-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <Typography.Caption className="mb-2">Valor Total do Portfólio</Typography.Caption>
              <Typography.H1 className="text-accent mb-4">
                R$ {PORTFOLIO_DATA.totalValue.toLocaleString('pt-BR')}
              </Typography.H1>
              
              <View className="flex-row gap-4">
                <View className="flex-1">
                  <View className="flex-row items-center gap-1 mb-1">
                    <Icon 
                      as={PORTFOLIO_DATA.percentageReturn > 0 ? ArrowUpIcon : ArrowDownIcon} 
                      className={`size-4 ${PORTFOLIO_DATA.percentageReturn > 0 ? 'text-green-600' : 'text-red-600'}`}
                    />
                    <Typography.Body className={`font-semibold ${
                      PORTFOLIO_DATA.percentageReturn > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {PORTFOLIO_DATA.percentageReturn > 0 ? '+' : ''}{PORTFOLIO_DATA.percentageReturn}%
                    </Typography.Body>
                  </View>
                  <Typography.Caption>Retorno Total</Typography.Caption>
                </View>
                
                <View className="flex-1">
                  <Typography.Body className="font-semibold mb-1">
                    R$ {PORTFOLIO_DATA.monthlyIncome.toLocaleString('pt-BR')}
                  </Typography.Body>
                  <Typography.Caption>Renda Mensal</Typography.Caption>
                </View>
              </View>
            </Card>

            {/* Quick Stats */}
            <View className="flex-row flex-wrap gap-4 mb-6">
              <QuickStat
                icon={DollarSignIcon}
                label="Investido"
                value={`R$ ${(PORTFOLIO_DATA.totalInvested / 1000).toFixed(0)}k`}
                color="primary"
              />
              <QuickStat
                icon={TrendingUpIcon}
                label="Lucro"
                value={`R$ ${(PORTFOLIO_DATA.totalReturn / 1000).toFixed(0)}k`}
                color="green"
              />
              <QuickStat
                icon={BuildingIcon}
                label="Imóveis"
                value={PORTFOLIO_DATA.investments.length.toString()}
                color="accent"
              />
              <QuickStat
                icon={PieChartIcon}
                label="Tokens"
                value="660"
                color="primary"
              />
            </View>

            {/* Performance Chart Placeholder */}
            <Card className="p-6 mb-6">
              <View className="flex-row justify-between items-center mb-4">
                <Typography.H4>Desempenho</Typography.H4>
                <View className="flex-row gap-2">
                  {(['1M', '3M', '6M', '1A'] as const).map((period) => (
                    <Pressable
                      key={period}
                      onPress={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-full ${
                        selectedPeriod === period ? 'bg-accent' : 'bg-muted'
                      }`}
                    >
                      <Typography.Small className={
                        selectedPeriod === period ? 'text-accent-foreground font-semibold' : ''
                      }>
                        {period}
                      </Typography.Small>
                    </Pressable>
                  ))}
                </View>
              </View>
              
              {/* Chart Placeholder */}
              <View className="h-48 bg-muted/30 rounded-lg items-center justify-center">
                <Icon as={ActivityIcon} className="size-8 text-muted-foreground mb-2" />
                <Typography.Small variant="secondary">Gráfico de Performance</Typography.Small>
              </View>
            </Card>

            {/* Investments List */}
            <View className="mb-6">
              <Typography.H4 className="mb-4">Meus Investimentos</Typography.H4>
              <View className="gap-4">
                {PORTFOLIO_DATA.investments.map((investment) => (
                  <InvestmentCard key={investment.id} investment={investment} />
                ))}
              </View>
            </View>

            {/* Recent Transactions */}
            <Card className="p-6">
              <View className="flex-row justify-between items-center mb-4">
                <Typography.H4>Transações Recentes</Typography.H4>
                <Pressable>
                  <Typography.Small className="text-accent font-semibold">
                    Ver todas →
                  </Typography.Small>
                </Pressable>
              </View>
              
              <View className="gap-3">
                {PORTFOLIO_DATA.recentTransactions.map((transaction) => (
                  <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function QuickStat({ 
  icon: IconComponent, 
  label, 
  value, 
  color = 'primary' 
}: {
  icon: any;
  label: string;
  value: string;
  color?: 'primary' | 'accent' | 'green';
}) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    green: 'bg-green-100 text-green-600'
  };

  return (
    <Card className="flex-1 min-w-[140px] p-4">
      <View className={`p-2 rounded-lg self-start mb-2 ${colorClasses[color].split(' ')[0]}`}>
        <Icon as={IconComponent} className={`size-5 ${colorClasses[color].split(' ')[1]}`} />
      </View>
      <Typography.H4 className="mb-1">{value}</Typography.H4>
      <Typography.Caption>{label}</Typography.Caption>
    </Card>
  );
}

function InvestmentCard({ investment }: { investment: typeof PORTFOLIO_DATA.investments[0] }) {
  const profit = investment.currentValue - investment.investedAmount;
  const isPositive = profit > 0;

  return (
    <Link href={`/marketplace/${investment.id}`} asChild>
      <Pressable>
        <Card className="p-4">
          <View className="flex-row justify-between mb-3">
            <View className="flex-1">
              <Typography.Body className="font-semibold mb-1">
                {investment.propertyName}
              </Typography.Body>
              <Typography.Small variant="secondary">{investment.location}</Typography.Small>
            </View>
            <View className="items-end">
              <Typography.H4 className="mb-1">
                R$ {investment.currentValue.toLocaleString('pt-BR')}
              </Typography.H4>
              <View className="flex-row items-center gap-1">
                <Icon 
                  as={isPositive ? ArrowUpIcon : ArrowDownIcon} 
                  className={`size-3 ${isPositive ? 'text-green-600' : 'text-red-600'}`} 
                />
                <Typography.Small className={`font-semibold ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? '+' : ''}{investment.roi}%
                </Typography.Small>
              </View>
            </View>
          </View>
          
          <View className="flex-row gap-4">
            <View>
              <Typography.Caption>Tokens</Typography.Caption>
              <Typography.Body className="font-semibold">{investment.tokens}</Typography.Body>
            </View>
            <View>
              <Typography.Caption>Investido</Typography.Caption>
              <Typography.Body className="font-semibold">
                R$ {(investment.investedAmount / 1000).toFixed(0)}k
              </Typography.Body>
            </View>
            <View>
              <Typography.Caption>Renda/mês</Typography.Caption>
              <Typography.Body className="font-semibold">
                R$ {investment.monthlyIncome}
              </Typography.Body>
            </View>
          </View>
        </Card>
      </Pressable>
    </Link>
  );
}

function TransactionItem({ transaction }: { transaction: typeof PORTFOLIO_DATA.recentTransactions[0] }) {
  const isIncome = transaction.amount > 0;
  const typeIcons = {
    dividend: DollarSignIcon,
    purchase: BuildingIcon,
    sale: TrendingUpIcon
  };

  const typeLabels = {
    dividend: 'Dividendo',
    purchase: 'Compra',
    sale: 'Venda'
  };

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <View className={`p-2 rounded-lg ${
          transaction.type === 'dividend' ? 'bg-green-100' : 'bg-muted'
        }`}>
          <Icon 
            as={typeIcons[transaction.type as keyof typeof typeIcons]} 
            className={`size-4 ${
              transaction.type === 'dividend' ? 'text-green-600' : 'text-muted-foreground'
            }`} 
          />
        </View>
        <View>
          <Typography.Body className="font-medium">
            {typeLabels[transaction.type as keyof typeof typeLabels]}
          </Typography.Body>
          <Typography.Small variant="secondary">{transaction.property}</Typography.Small>
        </View>
      </View>
      
      <View className="items-end">
        <Typography.Body className={`font-semibold ${
          isIncome ? 'text-green-600' : 'text-foreground'
        }`}>
          {isIncome ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
        </Typography.Body>
        <Typography.Caption>{transaction.date}</Typography.Caption>
      </View>
    </View>
  );
}
