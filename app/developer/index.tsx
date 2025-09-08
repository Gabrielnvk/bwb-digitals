import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Typography } from '@/src/shared/components/Typography';
import { Stack, Link } from 'expo-router';
import { 
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  ClockIcon,
  FileTextIcon,
  ShareIcon,
  ChartColumnIcon,
  DollarSignIcon,
  CalendarIcon,
  EditIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock developer data
const DEVELOPER_DATA = {
  companyName: 'BWB Incorporadora',
  activeProjects: [
    {
      id: '1',
      name: 'Edifício Platinum Tower',
      status: 'funding',
      fundingProgress: 66.7,
      totalValue: 15000000,
      raisedAmount: 10000000,
      investors: 150,
      daysLeft: 15,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      customPageUrl: '/developer/project/1'
    },
    {
      id: '2',
      name: 'Residencial Jardins',
      status: 'construction',
      fundingProgress: 100,
      totalValue: 8500000,
      raisedAmount: 8500000,
      investors: 85,
      completionPercentage: 45,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      customPageUrl: '/developer/project/2'
    }
  ],
  totalProjects: 15,
  totalInvestors: 1250,
  totalRaised: 125000000,
  averageROI: 18.5
};

export default function DeveloperDashboardScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Painel da Incorporadora',
          headerShown: true,
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
              <Typography.H2 className="mb-2">Olá, {DEVELOPER_DATA.companyName}</Typography.H2>
              <Typography.Body variant="secondary">
                Gerencie seus projetos e acompanhe o desempenho
              </Typography.Body>
            </View>

            {/* Stats Overview */}
            <View className="flex-row flex-wrap gap-4 mb-6">
              <StatCard
                icon={BuildingIcon}
                label="Projetos Ativos"
                value={DEVELOPER_DATA.activeProjects.length}
                color="accent"
              />
              <StatCard
                icon={UsersIcon}
                label="Total de Investidores"
                value={DEVELOPER_DATA.totalInvestors.toLocaleString()}
                color="primary"
              />
              <StatCard
                icon={DollarSignIcon}
                label="Total Captado"
                value={`R$ ${(DEVELOPER_DATA.totalRaised / 1000000).toFixed(0)}M`}
                color="green"
              />
              <StatCard
                icon={TrendingUpIcon}
                label="ROI Médio"
                value={`${DEVELOPER_DATA.averageROI}%`}
                color="green"
              />
            </View>

            {/* Active Projects */}
            <View className="mb-6">
              <View className="flex-row justify-between items-center mb-4">
                <Typography.H3>Projetos Ativos</Typography.H3>
                <Link href="/developer/new-project" asChild>
                  <Pressable>
                    <Typography.Small className="text-accent font-semibold">
                      Novo Projeto →
                    </Typography.Small>
                  </Pressable>
                </Link>
              </View>

              <View className="gap-4">
                {DEVELOPER_DATA.activeProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </View>
            </View>

            {/* Quick Actions */}
            <View className="gap-3">
              <QuickActionCard
                title="Central de Documentos"
                description="Gerencie contratos e documentos legais"
                icon={FileTextIcon}
                href="/developer/documents"
              />
              <QuickActionCard
                title="Relatórios Financeiros"
                description="Análises detalhadas de captação e distribuição"
                icon={ChartColumnIcon}
                href="/developer/reports"
              />
              <QuickActionCard
                title="Comunicação com Investidores"
                description="Envie atualizações e novidades"
                icon={UsersIcon}
                href="/developer/communications"
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
  color = 'accent' 
}: {
  icon: any;
  label: string;
  value: string | number;
  color?: 'primary' | 'accent' | 'green';
}) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    green: 'bg-green-100 text-green-600'
  };

  return (
    <Card className="flex-1 min-w-[150px] p-4">
      <View className={`p-2 rounded-lg self-start mb-2 ${colorClasses[color].split(' ')[0]}`}>
        <Icon as={IconComponent} className={`size-5 ${colorClasses[color].split(' ')[1]}`} />
      </View>
      <Typography.H4 className="mb-1">{value}</Typography.H4>
      <Typography.Caption>{label}</Typography.Caption>
    </Card>
  );
}

function ProjectCard({ project }: { project: typeof DEVELOPER_DATA.activeProjects[0] }) {
  const isFunding = project.status === 'funding';

  return (
    <Card className="overflow-hidden">
      <View className="relative">
        <Image
          source={{ uri: project.image }}
          style={{ width: '100%', height: 150 }}
          resizeMode="cover"
        />
        <View className={`absolute top-3 right-3 px-3 py-1 rounded-full ${
          isFunding ? 'bg-accent' : 'bg-primary'
        }`}>
          <Typography.Small className="text-white font-semibold">
            {isFunding ? 'Captando' : 'Em Construção'}
          </Typography.Small>
        </View>
      </View>

      <View className="p-4">
        <View className="flex-row justify-between items-start mb-3">
          <View className="flex-1">
            <Typography.H4 className="mb-1">{project.name}</Typography.H4>
            <View className="flex-row items-center gap-4">
              <View className="flex-row items-center gap-1">
                <Icon as={UsersIcon} className="size-3 text-muted-foreground" />
                <Typography.Small variant="secondary">
                  {project.investors} investidores
                </Typography.Small>
              </View>
              {isFunding && (
                <View className="flex-row items-center gap-1">
                  <Icon as={ClockIcon} className="size-3 text-muted-foreground" />
                  <Typography.Small variant="secondary">
                    {project.daysLeft} dias restantes
                  </Typography.Small>
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="mb-4">
          <View className="flex-row justify-between mb-1">
            <Typography.Caption>
              {isFunding ? 'Captação' : 'Construção'}
            </Typography.Caption>
            <Typography.Caption>
              {isFunding ? `${project.fundingProgress}%` : `${project.completionPercentage}%`}
            </Typography.Caption>
          </View>
          <View className="h-2 bg-muted rounded-full overflow-hidden">
            <View 
              className="h-full bg-accent"
              style={{ 
                width: `${isFunding ? project.fundingProgress : project.completionPercentage}%` 
              }}
            />
          </View>
          {isFunding && (
            <Typography.Caption className="mt-1">
              R$ {(project.raisedAmount / 1000000).toFixed(1)}M de R$ {(project.totalValue / 1000000).toFixed(1)}M
            </Typography.Caption>
          )}
        </View>

        {/* Actions */}
        <View className="flex-row gap-2">
          <Link href={project.customPageUrl} asChild>
            <Pressable className="flex-1">
              <Button variant="outline" size="sm">
                <View className="flex-row items-center gap-2">
                  <Icon as={EditIcon} className="size-4" />
                  <Typography.Small className="font-semibold">Editar Página</Typography.Small>
                </View>
              </Button>
            </Pressable>
          </Link>
          
          <Pressable>
            <Button variant="outline" size="sm">
              <Icon as={ShareIcon} className="size-4" />
            </Button>
          </Pressable>
        </View>
      </View>
    </Card>
  );
}

function QuickActionCard({ 
  title, 
  description, 
  icon: IconComponent, 
  href 
}: {
  title: string;
  description: string;
  icon: any;
  href: string;
}) {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Card className="p-4">
          <View className="flex-row items-center gap-3">
            <View className="bg-accent/10 p-3 rounded-lg">
              <Icon as={IconComponent} className="size-6 text-accent" />
            </View>
            <View className="flex-1">
              <Typography.Body className="font-semibold mb-1">{title}</Typography.Body>
              <Typography.Small variant="secondary">{description}</Typography.Small>
            </View>
          </View>
        </Card>
      </Pressable>
    </Link>
  );
}
