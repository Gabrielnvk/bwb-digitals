import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Input } from '@/src/components/ui/input';
import { Typography } from '@/src/shared/components/Typography';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { 
  MapPinIcon, 
  TrendingUpIcon,
  ClockIcon,
  UsersIcon,
  FileTextIcon,
  BuildingIcon,
  CalendarIcon,
  ChevronRightIcon,
  ShareIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock property details
const PROPERTY_DETAILS = {
  id: '1',
  name: 'Edifício Platinum Tower',
  location: 'Vila Olímpia, São Paulo',
  address: 'Rua Funchal, 418 - Vila Olímpia, São Paulo - SP',
  totalValue: 15000000,
  tokenPrice: 100,
  minInvestment: 100,
  availableTokens: 50000,
  soldTokens: 100000,
  totalTokens: 150000,
  expectedROI: 18.5,
  fundingPercentage: 66.7,
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    'https://images.unsplash.com/photo-1565623006066-82f23c79210b?w=800',
  ],
  type: 'Comercial',
  daysLeft: 15,
  area: '12.500 m²',
  floors: 25,
  units: 120,
  constructionYear: 2024,
  developer: {
    name: 'BWB Incorporadora',
    logo: 'https://via.placeholder.com/100',
    track: '15 anos no mercado',
    delivered: '45 empreendimentos'
  },
  description: 'O Edifício Platinum Tower é um empreendimento comercial de alto padrão localizado no coração da Vila Olímpia. Com 25 andares e vista privilegiada, oferece escritórios modernos com infraestrutura completa.',
  highlights: [
    'Certificação LEED Gold',
    'Heliponto privativo',
    '8 elevadores de alta velocidade',
    'Auditório para 200 pessoas',
    'Academia e spa exclusivos'
  ],
  documents: [
    { name: 'Prospecto de Investimento', type: 'PDF', size: '2.5 MB' },
    { name: 'Laudo de Avaliação', type: 'PDF', size: '1.8 MB' },
    { name: 'Projeto Arquitetônico', type: 'PDF', size: '5.2 MB' },
    { name: 'Estudo de Viabilidade', type: 'PDF', size: '3.1 MB' },
  ],
  timeline: [
    { date: '2024-01', status: 'Início das Obras', completed: true },
    { date: '2024-06', status: 'Fundação Concluída', completed: true },
    { date: '2024-12', status: 'Estrutura 50%', completed: false },
    { date: '2025-06', status: 'Acabamento', completed: false },
    { date: '2025-12', status: 'Entrega', completed: false },
  ]
};

export default function PropertyDetailScreen() {
  const { id } = useLocalSearchParams();
  const [investmentAmount, setInvestmentAmount] = React.useState('1000');
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const calculateTokens = () => {
    const amount = parseFloat(investmentAmount) || 0;
    return Math.floor(amount / PROPERTY_DETAILS.tokenPrice);
  };

  const handleInvest = () => {
    router.push({
      pathname: '/marketplace/invest',
      params: { 
        propertyId: id,
        amount: investmentAmount,
        tokens: calculateTokens().toString()
      }
    });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerRight: () => (
            <Button size="icon" variant="ghost">
              <Icon as={ShareIcon} className="size-5" />
            </Button>
          ),
        }}
      />
      <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
        {/* Image Gallery */}
        <View>
          <Image
            source={{ uri: PROPERTY_DETAILS.images[selectedImageIndex] }}
            style={{ width: '100%', height: 300 }}
            resizeMode="cover"
          />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="absolute bottom-4 left-0 right-0"
          >
            <View className="flex-row gap-2 px-4">
              {PROPERTY_DETAILS.images.map((image, index) => (
                <Pressable 
                  key={index}
                  onPress={() => setSelectedImageIndex(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImageIndex === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <Image
                    source={{ uri: image }}
                    style={{ width: 60, height: 60 }}
                    resizeMode="cover"
                  />
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="px-4 py-6">
          {/* Header Info */}
          <View className="mb-6">
            <Typography.H2 className="mb-2">{PROPERTY_DETAILS.name}</Typography.H2>
            <View className="flex-row items-center gap-1 mb-2">
              <Icon as={MapPinIcon} className="size-4 text-muted-foreground" />
              <Typography.Body variant="secondary">{PROPERTY_DETAILS.location}</Typography.Body>
            </View>
            <View className="flex-row gap-3">
              <View className="bg-accent/10 px-3 py-1 rounded-full">
                <Typography.Small className="text-accent font-semibold">
                  {PROPERTY_DETAILS.type}
                </Typography.Small>
              </View>
              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Typography.Small className="text-green-700 font-semibold">
                  {PROPERTY_DETAILS.expectedROI}% ROI a.a.
                </Typography.Small>
              </View>
            </View>
          </View>

          {/* Investment Calculator Card */}
          <Card className="p-6 mb-6 bg-accent/5 border-accent/20">
            <Typography.H4 className="mb-4">Calculadora de Investimento</Typography.H4>
            
            <View className="gap-4">
              <View>
                <Typography.Label>Valor do Investimento (R$)</Typography.Label>
                <Input
                  value={investmentAmount}
                  onChangeText={setInvestmentAmount}
                  placeholder="0"
                  keyboardType="numeric"
                  className="text-xl font-semibold"
                />
              </View>

              <View className="flex-row justify-between py-3 border-t border-border">
                <Typography.Body>Tokens a receber</Typography.Body>
                <Typography.H4 className="text-accent">{calculateTokens()}</Typography.H4>
              </View>

              <View className="flex-row justify-between">
                <Typography.Body>Retorno anual esperado</Typography.Body>
                <Typography.Body className="text-green-600 font-semibold">
                  R$ {((parseFloat(investmentAmount) || 0) * PROPERTY_DETAILS.expectedROI / 100).toFixed(2)}
                </Typography.Body>
              </View>

              <Pressable onPress={handleInvest}>
                <Button className="bg-accent mt-2">
                  <Typography.Body className="text-accent-foreground font-semibold">
                    Investir Agora
                  </Typography.Body>
                </Button>
              </Pressable>
            </View>
          </Card>

          {/* Funding Progress */}
          <Card className="p-6 mb-6">
            <Typography.H4 className="mb-4">Progresso do Financiamento</Typography.H4>
            
            <View className="mb-4">
              <View className="flex-row justify-between mb-2">
                <Typography.Body>Arrecadado</Typography.Body>
                <Typography.Body className="font-semibold">
                  R$ {((PROPERTY_DETAILS.soldTokens * PROPERTY_DETAILS.tokenPrice) / 1000000).toFixed(1)}M
                </Typography.Body>
              </View>
              <View className="h-3 bg-muted rounded-full overflow-hidden">
                <View 
                  className="h-full bg-accent"
                  style={{ width: `${PROPERTY_DETAILS.fundingPercentage}%` }}
                />
              </View>
              <Typography.Caption className="mt-1">
                {PROPERTY_DETAILS.fundingPercentage}% de R$ {(PROPERTY_DETAILS.totalValue / 1000000).toFixed(1)}M
              </Typography.Caption>
            </View>

            <View className="flex-row justify-between">
              <View className="items-center">
                <Typography.H4>{PROPERTY_DETAILS.soldTokens / 1000}k</Typography.H4>
                <Typography.Caption>Tokens Vendidos</Typography.Caption>
              </View>
              <View className="items-center">
                <Typography.H4>{PROPERTY_DETAILS.availableTokens / 1000}k</Typography.H4>
                <Typography.Caption>Disponíveis</Typography.Caption>
              </View>
              <View className="items-center">
                <Typography.H4>{PROPERTY_DETAILS.daysLeft}</Typography.H4>
                <Typography.Caption>Dias Restantes</Typography.Caption>
              </View>
            </View>
          </Card>

          {/* Property Details */}
          <Card className="p-6 mb-6">
            <Typography.H4 className="mb-4">Sobre o Imóvel</Typography.H4>
            <Typography.Body variant="secondary" className="mb-4">
              {PROPERTY_DETAILS.description}
            </Typography.Body>
            
            <View className="gap-3">
              <View className="flex-row justify-between">
                <Typography.Body variant="secondary">Área Total</Typography.Body>
                <Typography.Body className="font-semibold">{PROPERTY_DETAILS.area}</Typography.Body>
              </View>
              <View className="flex-row justify-between">
                <Typography.Body variant="secondary">Andares</Typography.Body>
                <Typography.Body className="font-semibold">{PROPERTY_DETAILS.floors}</Typography.Body>
              </View>
              <View className="flex-row justify-between">
                <Typography.Body variant="secondary">Unidades</Typography.Body>
                <Typography.Body className="font-semibold">{PROPERTY_DETAILS.units}</Typography.Body>
              </View>
              <View className="flex-row justify-between">
                <Typography.Body variant="secondary">Entrega</Typography.Body>
                <Typography.Body className="font-semibold">{PROPERTY_DETAILS.constructionYear}</Typography.Body>
              </View>
            </View>
          </Card>

          {/* Developer Info */}
          <Card className="p-6 mb-6">
            <Typography.H4 className="mb-4">Incorporadora</Typography.H4>
            <View className="flex-row items-center gap-4">
              <View className="w-16 h-16 bg-muted rounded-lg" />
              <View className="flex-1">
                <Typography.Body className="font-semibold mb-1">
                  {PROPERTY_DETAILS.developer.name}
                </Typography.Body>
                <Typography.Small variant="secondary">
                  {PROPERTY_DETAILS.developer.track} • {PROPERTY_DETAILS.developer.delivered}
                </Typography.Small>
              </View>
            </View>
          </Card>

          {/* Documents */}
          <Card className="p-6">
            <Typography.H4 className="mb-4">Documentos</Typography.H4>
            <View className="gap-3">
              {PROPERTY_DETAILS.documents.map((doc, index) => (
                <Pressable key={index}>
                  <View className="flex-row items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <View className="flex-row items-center gap-3">
                      <Icon as={FileTextIcon} className="size-5 text-muted-foreground" />
                      <View>
                        <Typography.Body className="font-medium">{doc.name}</Typography.Body>
                        <Typography.Caption>{doc.type} • {doc.size}</Typography.Caption>
                      </View>
                    </View>
                    <Icon as={ChevronRightIcon} className="size-5 text-muted-foreground" />
                  </View>
                </Pressable>
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
