import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Input } from '@/src/components/ui/input';
import { Typography } from '@/src/shared/components/Typography';
import { ResponsiveContainer } from '@/src/shared/components/ResponsiveContainer';
import { ResponsiveGrid } from '@/src/shared/components/ResponsiveGrid';
import { Stack, Link } from 'expo-router';
import { 
  SearchIcon, 
  MapPinIcon, 
  TrendingUpIcon,
  ClockIcon,
  FilterIcon,
  GridIcon,
  MapIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable, FlatList, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock data for properties
const MOCK_PROPERTIES = [
  {
    id: '1',
    name: 'Edifício Platinum Tower',
    location: 'Vila Olímpia, São Paulo',
    totalValue: 15000000,
    tokenPrice: 100,
    availableTokens: 50000,
    soldTokens: 100000,
    expectedROI: 18.5,
    fundingPercentage: 66.7,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    type: 'Comercial',
    daysLeft: 15,
    isHot: true,
  },
  {
    id: '2',
    name: 'Residencial Jardins',
    location: 'Jardins, São Paulo',
    totalValue: 8500000,
    tokenPrice: 250,
    availableTokens: 10000,
    soldTokens: 24000,
    expectedROI: 15.2,
    fundingPercentage: 70.6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    type: 'Residencial',
    daysLeft: 30,
    isHot: false,
  },
  {
    id: '3',
    name: 'Shopping Boulevard',
    location: 'Moema, São Paulo',
    totalValue: 25000000,
    tokenPrice: 500,
    availableTokens: 20000,
    soldTokens: 30000,
    expectedROI: 22.3,
    fundingPercentage: 60,
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800',
    type: 'Varejo',
    daysLeft: 45,
    isHot: true,
  },
];

export default function MarketplaceScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [viewMode, setViewMode] = React.useState<'grid' | 'map'>('grid');
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Marketplace',
          headerShown: true,
        }}
      />
      <SafeAreaView className="flex-1 bg-background">
        {/* Search and Filters */}
        <View className="border-b border-border">
          <ResponsiveContainer maxWidth="6xl" className="py-4">
            <View className="flex-row gap-2">
              <View className="flex-1 relative web:max-w-md">
                <Input
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Buscar por localização, nome..."
                  className="pl-10"
                />
                <View className="absolute left-3 top-3">
                  <Icon as={SearchIcon} className="size-4 text-muted-foreground" />
                </View>
              </View>
              
              <Pressable onPress={() => setShowFilters(!showFilters)}>
                <Button size="icon" variant="outline">
                  <Icon as={FilterIcon} className="size-5" />
                </Button>
              </Pressable>
              
              <Pressable onPress={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}>
                <Button size="icon" variant="outline">
                  <Icon as={viewMode === 'grid' ? MapIcon : GridIcon} className="size-5" />
                </Button>
              </Pressable>
            </View>
          </ResponsiveContainer>
        </View>

        {/* Hot Opportunities Banner */}
        <View className="bg-accent/10 border-b border-accent/20">
          <ResponsiveContainer maxWidth="6xl" className="py-3">
            <View className="flex-row items-center gap-2">
              <Icon as={TrendingUpIcon} className="size-4 text-accent" />
              <Typography.Small className="text-accent font-semibold">
                3 oportunidades quentes disponíveis agora!
              </Typography.Small>
            </View>
          </ResponsiveContainer>
        </View>

        {/* Property List */}
        {Platform.OS === 'web' ? (
          <ScrollView className="flex-1">
            <ResponsiveContainer maxWidth="6xl" className="py-6">
              <ResponsiveGrid columns={{ default: 1, md: 2, lg: 3 }} gap={4}>
                {MOCK_PROPERTIES.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </ResponsiveGrid>
            </ResponsiveContainer>
          </ScrollView>
        ) : (
          <FlatList
            data={MOCK_PROPERTIES}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16, gap: 16 }}
            renderItem={({ item }) => <PropertyCard property={item} />}
            ItemSeparatorComponent={() => <View className="h-4" />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </>
  );
}

function PropertyCard({ property }: { property: typeof MOCK_PROPERTIES[0] }) {
  return (
    <Link href={`/marketplace/${property.id}`} asChild>
      <Pressable className="h-full">
        <Card className="overflow-hidden h-full web:hover:shadow-xl web:transition-shadow web:cursor-pointer">
          {/* Image */}
          <View className="relative">
            <Image
              source={{ uri: property.image }}
              style={{ width: '100%', height: 200 }}
              resizeMode="cover"
            />
            {property.isHot && (
              <View className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full">
                <Typography.Small className="text-accent-foreground font-semibold">
                  🔥 Hot
                </Typography.Small>
              </View>
            )}
            <View className="absolute bottom-3 left-3 bg-background/90 px-3 py-1 rounded-lg">
              <Typography.Small className="font-semibold">{property.type}</Typography.Small>
            </View>
          </View>

          {/* Content */}
          <View className="p-4 flex-1">
            <View className="flex-1">
              <Typography.H4 className="mb-1">{property.name}</Typography.H4>
              <View className="flex-row items-center gap-1 mb-3">
                <Icon as={MapPinIcon} className="size-3 text-muted-foreground" />
                <Typography.Small variant="secondary">{property.location}</Typography.Small>
              </View>

              {/* Stats Grid */}
              <View className="flex-row flex-wrap gap-4 mb-4">
                <View className="flex-1">
                  <Typography.Caption>Valor do Token</Typography.Caption>
                  <Typography.Price className="text-lg">R$ {property.tokenPrice}</Typography.Price>
                </View>
                <View className="flex-1">
                  <Typography.Caption>ROI Esperado</Typography.Caption>
                  <Typography.Body className="text-green-600 font-semibold">
                    {property.expectedROI}% a.a.
                  </Typography.Body>
                </View>
              </View>
            </View>

            {/* Funding Progress */}
            <View className="mb-3">
              <View className="flex-row justify-between mb-1">
                <Typography.Caption>Financiamento</Typography.Caption>
                <Typography.Caption>{property.fundingPercentage.toFixed(1)}%</Typography.Caption>
              </View>
              <View className="h-2 bg-muted rounded-full overflow-hidden">
                <View 
                  className="h-full bg-accent"
                  style={{ width: `${property.fundingPercentage}%` }}
                />
              </View>
            </View>

            {/* Bottom Info */}
            <View className="flex-row justify-between items-center">
              <Typography.Small variant="secondary">
                R$ {(property.totalValue / 1000000).toFixed(1)}M total
              </Typography.Small>
              <View className="flex-row items-center gap-1">
                <Icon as={ClockIcon} className="size-3 text-muted-foreground" />
                <Typography.Small variant="secondary">
                  {property.daysLeft} dias restantes
                </Typography.Small>
              </View>
            </View>
          </View>
        </Card>
      </Pressable>
    </Link>
  );
}
