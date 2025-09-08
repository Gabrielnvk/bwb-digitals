import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Typography } from '@/src/shared/components/Typography';
import { Stack, Link } from 'expo-router';
import { 
  PlusIcon, 
  BuildingIcon, 
  UsersIcon,
  TrendingUpIcon,
  FileTextIcon,
  BellIcon,
  SettingsIcon,
  DollarSignIcon,
  ChartColumnIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ADMIN_STATS = {
  totalOfferings: 12,
  activeOfferings: 8,
  totalInvestors: 1250,
  totalRaised: 45000000,
  pendingKYC: 23,
  recentActivity: [
    { id: '1', type: 'investment', user: 'João Silva', amount: 5000, property: 'Platinum Tower', time: '5 min' },
    { id: '2', type: 'kyc', user: 'Maria Santos', status: 'pending', time: '15 min' },
    { id: '3', type: 'investment', user: 'Pedro Costa', amount: 10000, property: 'Residencial Jardins', time: '1h' },
  ]
};

export default function AdminDashboardScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Painel Administrativo',
          headerRight: () => (
            <View className="flex-row gap-2 mr-4">
              <Button size="icon" variant="ghost">
                <Icon as={BellIcon} className="size-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon as={SettingsIcon} className="size-5" />
              </Button>
            </View>
          ),
        }}
      />
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView 
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4 py-6">
            {/* Welcome Section */}
            <View className="mb-6">
              <Typography.H2 className="mb-2">Bem-vindo, Admin</Typography.H2>
              <Typography.Body variant="secondary">
                Gerencie suas ofertas e acompanhe o desempenho
              </Typography.Body>
            </View>

            {/* Quick Actions */}
            <View className="mb-6">
              <Link href="/admin/create-offering" asChild>
                <Pressable>
                  <Button className="bg-accent mb-4">
                    <View className="flex-row items-center gap-2">
                      <Icon as={PlusIcon} className="size-5 text-accent-foreground" />
                      <Typography.Body className="text-accent-foreground font-semibold">
                        Criar Nova Oferta
                      </Typography.Body>
                    </View>
                  </Button>
                </Pressable>
              </Link>
            </View>

            {/* Stats Grid */}
            <View className="flex-row flex-wrap gap-4 mb-6">
              <StatCard
                icon={BuildingIcon}
                label="Ofertas Ativas"
                value={ADMIN_STATS.activeOfferings}
                total={ADMIN_STATS.totalOfferings}
                color="accent"
              />
              <StatCard
                icon={UsersIcon}
                label="Investidores"
                value={ADMIN_STATS.totalInvestors}
                growth="+12%"
                color="green"
              />
              <StatCard
                icon={DollarSignIcon}
                label="Total Arrecadado"
                value={`R$ ${(ADMIN_STATS.totalRaised / 1000000).toFixed(1)}M`}
                growth="+25%"
                color="green"
              />
              <StatCard
                icon={FileTextIcon}
                label="KYC Pendente"
                value={ADMIN_STATS.pendingKYC}
                urgent
                color="yellow"
              />
            </View>

            {/* Recent Activity */}
            <Card className="p-6 mb-6">
              <Typography.H4 className="mb-4">Atividade Recente</Typography.H4>
              <View className="gap-4">
                {ADMIN_STATS.recentActivity.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </View>
              <Pressable className="mt-4">
                <Typography.Body className="text-accent text-center font-semibold">
                  Ver toda atividade →
                </Typography.Body>
              </Pressable>
            </Card>

            {/* Quick Links */}
            <View className="gap-3">
              <QuickLinkCard
                title="Gerenciar Ofertas"
                description="Visualize e edite suas ofertas ativas"
                icon={BuildingIcon}
                href="/admin/offerings"
              />
              <QuickLinkCard
                title="Aprovações KYC"
                description="23 investidores aguardando aprovação"
                icon={UsersIcon}
                href="/admin/kyc"
                badge="23"
              />
              <QuickLinkCard
                title="Relatórios"
                description="Análises detalhadas e métricas"
                icon={ChartColumnIcon}
                href="/admin/reports"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function StatCard({ 
  icon: IconComponent, 
  label, 
  value, 
  total, 
  growth, 
  urgent,
  color = 'accent' 
}: {
  icon: any;
  label: string;
  value: string | number;
  total?: number;
  growth?: string;
  urgent?: boolean;
  color?: 'accent' | 'green' | 'yellow';
}) {
  const colorClasses = {
    accent: 'bg-accent/10 text-accent',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <Card className="flex-1 min-w-[150px] p-4">
      <View className="flex-row items-start justify-between mb-2">
        <View className={`p-2 rounded-lg ${colorClasses[color].split(' ')[0]}`}>
          <Icon as={IconComponent} className={`size-5 ${colorClasses[color].split(' ')[1]}`} />
        </View>
        {urgent && (
          <View className="bg-yellow-100 px-2 py-1 rounded-full">
            <Typography.Caption className="text-yellow-700 font-semibold">!</Typography.Caption>
          </View>
        )}
      </View>
      <Typography.H3 className="mb-1">
        {value}
        {total && (
          <Typography.Small variant="secondary">/{total}</Typography.Small>
        )}
      </Typography.H3>
      <Typography.Caption>{label}</Typography.Caption>
      {growth && (
        <Typography.Small className="text-green-600 font-semibold">{growth}</Typography.Small>
      )}
    </Card>
  );
}

function ActivityItem({ activity }: { activity: typeof ADMIN_STATS.recentActivity[0] }) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-1">
        {activity.type === 'investment' ? (
          <>
            <Typography.Body className="font-semibold">{activity.user}</Typography.Body>
            <Typography.Small variant="secondary">
              Investiu R$ {activity.amount?.toLocaleString('pt-BR')} em {activity.property}
            </Typography.Small>
          </>
        ) : (
          <>
            <Typography.Body className="font-semibold">{activity.user}</Typography.Body>
            <Typography.Small variant="secondary">
              KYC pendente de aprovação
            </Typography.Small>
          </>
        )}
      </View>
      <Typography.Caption>{activity.time}</Typography.Caption>
    </View>
  );
}

function QuickLinkCard({ 
  title, 
  description, 
  icon: IconComponent, 
  href,
  badge 
}: {
  title: string;
  description: string;
  icon: any;
  href: string;
  badge?: string;
}) {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Card className="p-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3 flex-1">
              <Icon as={IconComponent} className="size-6 text-accent" />
              <View className="flex-1">
                <Typography.Body className="font-semibold">{title}</Typography.Body>
                <Typography.Small variant="secondary">{description}</Typography.Small>
              </View>
            </View>
            {badge && (
              <View className="bg-accent px-3 py-1 rounded-full">
                <Typography.Small className="text-accent-foreground font-semibold">
                  {badge}
                </Typography.Small>
              </View>
            )}
          </View>
        </Card>
      </Pressable>
    </Link>
  );
}
