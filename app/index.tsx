import { THEME } from '@/lib/theme';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Typography } from '@/src/shared/components/Typography';
import { ResponsiveContainer } from '@/src/shared/components/ResponsiveContainer';
import { ResponsiveGrid } from '@/src/shared/components/ResponsiveGrid';
import { Link, Stack } from 'expo-router';
import { 
  ArrowRightIcon, 
  Building2Icon, 
  ChartColumnIcon, 
  ShieldCheckIcon, 
  TrendingUpIcon,
  WalletIcon,
  HomeIcon
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, View, Pressable, ImageBackground } from 'react-native';

const SCREEN_OPTIONS = {
  light: {
    title: 'BWB Digital Assets',
    headerTransparent: false,
    headerShadowVisible: true,
    headerStyle: { backgroundColor: THEME.light.primary },
    headerTintColor: THEME.light.primaryForeground,
    headerTitleStyle: { fontWeight: 'bold' },
  },
  dark: {
    title: 'BWB Digital Assets',
    headerTransparent: false,
    headerShadowVisible: true,
    headerStyle: { backgroundColor: THEME.dark.background },
    headerTintColor: THEME.dark.foreground,
    headerTitleStyle: { fontWeight: 'bold' },
  },
};

export default function Screen() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS[colorScheme ?? 'light']} />
      <ScrollView className="flex-1 bg-background">
        {/* Hero Section */}
        <View className="bg-primary py-12 web:py-20">
          <ResponsiveContainer maxWidth="4xl">
            <View className="items-center">
              <Typography.H1 className="text-primary-foreground text-center mb-4 web:text-5xl">
                Tokenização Imobiliária
              </Typography.H1>
              <Typography.Body className="text-primary-foreground text-center opacity-90 mb-8 web:text-lg web:max-w-2xl">
                Diversifique o seu patrimônio com as melhores oportunidades de investimento do mercado imobiliário
              </Typography.Body>
              
              {/* CTA Buttons */}
              <View className="flex-col gap-4 w-full web:flex-row web:justify-center web:w-auto">
                <Link href="/marketplace" asChild>
                  <Pressable>
                    <Button className="bg-accent hover:bg-accent/90 web:px-8">
                      <Typography.Body className="text-accent-foreground font-semibold">
                        Explorar Oportunidades
                      </Typography.Body>
                    </Button>
                  </Pressable>
                </Link>
                
                <Link href="/auth/login" asChild>
                  <Pressable>
                    <Button variant="outline" className="border-primary-foreground web:px-8">
                      <Typography.Body className="font-semibold">
                        Fazer Login
                      </Typography.Body>
                    </Button>
                  </Pressable>
                </Link>
              </View>
            </View>
          </ResponsiveContainer>
        </View>

        {/* Features Section */}
        <View className="py-12 web:py-20">
          <ResponsiveContainer maxWidth="6xl">
            <Typography.H2 className="text-center mb-8 web:mb-12 web:text-4xl">Por que investir com a BWB?</Typography.H2>
            
            <ResponsiveGrid columns={{ default: 1, md: 2, lg: 4 }} gap={6}>
              <FeatureCard
                icon={ShieldCheckIcon}
                title="Segurança Blockchain"
                description="Tokens registrados em blockchain garantem transparência e imutabilidade"
              />
              
              <FeatureCard
                icon={TrendingUpIcon}
                title="Alta Rentabilidade"
                description="Acesso a imóveis premium com retornos acima da média do mercado"
              />
              
              <FeatureCard
                icon={WalletIcon}
                title="Liquidez Imediata"
                description="Compre e venda seus tokens a qualquer momento no marketplace"
              />
              
              <FeatureCard
                icon={Building2Icon}
                title="Diversificação Fácil"
                description="Invista em múltiplos imóveis a partir de R$ 100"
              />
            </ResponsiveGrid>
          </ResponsiveContainer>
        </View>

        {/* User Type Selection */}
        <View className="py-12 web:py-20 bg-secondary">
          <ResponsiveContainer maxWidth="4xl">
            <Typography.H2 className="text-center mb-8 web:mb-12 web:text-4xl">Como você deseja participar?</Typography.H2>
            
            <View className="flex-col gap-4">
              <UserTypeCard
                title="Investidor"
                description="Descubra e invista em oportunidades imobiliárias tokenizadas"
                href="/marketplace"
                icon={ChartColumnIcon}
              />
              
              <UserTypeCard
                title="Administrador"
                description="Gerencie ofertas e tokenize novos empreendimentos"
                href="/admin"
                icon={Building2Icon}
              />
              
              <UserTypeCard
                title="Incorporadora"
                description="Acompanhe o financiamento e gerencie seus projetos"
                href="/developer"
                icon={HomeIcon}
              />
            </View>
          </ResponsiveContainer>
        </View>

        {/* Stats Section */}
        <View className="py-12 web:py-20">
          <ResponsiveContainer maxWidth="6xl">
            <ResponsiveGrid columns={{ default: 2, md: 4 }} gap={4}>
              <StatCard value="R$ 10M+" label="Volume Tokenizado" />
              <StatCard value="500+" label="Investidores Ativos" />
              <StatCard value="25+" label="Imóveis Disponíveis" />
              <StatCard value="18%" label="Retorno Médio Anual" />
            </ResponsiveGrid>
          </ResponsiveContainer>
        </View>
      </ScrollView>
    </>
  );
}

function FeatureCard({ icon: IconComponent, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 h-full web:hover:shadow-lg web:transition-shadow">
      <View className="flex-col items-center text-center web:items-start web:text-left gap-4">
        <View className="bg-accent/10 p-3 rounded-lg">
          <Icon as={IconComponent} className="size-6 text-accent" />
        </View>
        <View className="flex-1">
          <Typography.H4 className="mb-2">{title}</Typography.H4>
          <Typography.Body variant="secondary">{description}</Typography.Body>
        </View>
      </View>
    </Card>
  );
}

function UserTypeCard({ title, description, href, icon: IconComponent }: {
  title: string;
  description: string;
  href: string;
  icon: any;
}) {
  return (
    <Link href={href} asChild>
      <Card className="p-6 border-2 border-border web:hover:border-accent web:hover:shadow-md web:transition-all web:cursor-pointer">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4 flex-1">
            <Icon as={IconComponent} className="size-8 text-accent" />
            <View className="flex-1">
              <Typography.H4 className="mb-1">{title}</Typography.H4>
              <Typography.Small variant="secondary">{description}</Typography.Small>
            </View>
          </View>
          <Icon as={ArrowRightIcon} className="size-5 text-muted-foreground" />
        </View>
      </Card>
    </Link>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <View className="items-center p-4 web:p-6 bg-card rounded-lg border border-border">
      <Typography.H3 className="text-accent mb-1 web:text-4xl">{value}</Typography.H3>
      <Typography.Small variant="secondary" className="text-center">{label}</Typography.Small>
    </View>
  );
}
