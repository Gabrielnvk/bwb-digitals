import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Input } from '@/src/components/ui/input';
import { Switch } from '@/src/components/ui/switch';
import { Typography } from '@/src/shared/components/Typography';
import { Stack, router } from 'expo-router';
import { 
  CheckCircleIcon,
  ChevronRightIcon,
  BuildingIcon,
  CoinsIcon,
  FileTextIcon,
  ImageIcon,
  CalendarIcon,
  UsersIcon,
  AlertCircleIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Step = 'basic' | 'token' | 'documents' | 'design' | 'review';

const STEPS = [
  { id: 'basic', label: 'Informações Básicas', icon: BuildingIcon },
  { id: 'token', label: 'Configuração de Token', icon: CoinsIcon },
  { id: 'documents', label: 'Documentos', icon: FileTextIcon },
  { id: 'design', label: 'Design da Página', icon: ImageIcon },
  { id: 'review', label: 'Revisão', icon: CheckCircleIcon },
];

export default function CreateOfferingScreen() {
  const [currentStep, setCurrentStep] = React.useState<Step>('basic');
  const [formData, setFormData] = React.useState({
    // Basic Info
    propertyName: '',
    propertyType: 'commercial',
    location: '',
    totalValue: '',
    expectedROI: '',
    description: '',
    
    // Token Config
    tokenPrice: '100',
    totalTokens: '',
    minInvestment: '100',
    fundingGoal: '',
    fundingDeadline: '',
    
    // Documents
    prospectus: null,
    valuation: null,
    architectural: null,
    
    // Design
    template: 'modern',
    primaryColor: '#c5a572',
    images: [],
    
    // Settings
    isPublic: true,
    requireKYC: true,
    allowInternational: false,
  });

  const currentStepIndex = STEPS.findIndex(s => s.id === currentStep);
  const progress = ((currentStepIndex + 1) / STEPS.length) * 100;

  const handleNextStep = () => {
    const stepOrder: Step[] = ['basic', 'token', 'documents', 'design', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handlePreviousStep = () => {
    const stepOrder: Step[] = ['basic', 'token', 'documents', 'design', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handlePublish = () => {
    // Simulate publishing
    setTimeout(() => {
      router.replace('/admin');
    }, 1500);
  };

  const renderBasicInfo = () => (
    <View className="gap-4">
      <View>
        <Typography.Label>Nome do Imóvel</Typography.Label>
        <Input
          value={formData.propertyName}
          onChangeText={(text) => setFormData({...formData, propertyName: text})}
          placeholder="Ex: Edifício Corporate Tower"
        />
      </View>

      <View>
        <Typography.Label>Tipo de Imóvel</Typography.Label>
        <View className="flex-row gap-2 mt-2">
          {['commercial', 'residential', 'retail'].map((type) => (
            <Pressable
              key={type}
              onPress={() => setFormData({...formData, propertyType: type})}
              className={`flex-1 p-3 rounded-lg border ${
                formData.propertyType === type 
                  ? 'bg-accent/10 border-accent' 
                  : 'bg-muted border-border'
              }`}
            >
              <Typography.Small className={`text-center font-semibold ${
                formData.propertyType === type ? 'text-accent' : ''
              }`}>
                {type === 'commercial' ? 'Comercial' : 
                 type === 'residential' ? 'Residencial' : 'Varejo'}
              </Typography.Small>
            </Pressable>
          ))}
        </View>
      </View>

      <View>
        <Typography.Label>Localização</Typography.Label>
        <Input
          value={formData.location}
          onChangeText={(text) => setFormData({...formData, location: text})}
          placeholder="Ex: Vila Olímpia, São Paulo - SP"
        />
      </View>

      <View className="flex-row gap-4">
        <View className="flex-1">
          <Typography.Label>Valor Total (R$)</Typography.Label>
          <Input
            value={formData.totalValue}
            onChangeText={(text) => setFormData({...formData, totalValue: text})}
            placeholder="15.000.000"
            keyboardType="numeric"
          />
        </View>
        <View className="flex-1">
          <Typography.Label>ROI Esperado (%)</Typography.Label>
          <Input
            value={formData.expectedROI}
            onChangeText={(text) => setFormData({...formData, expectedROI: text})}
            placeholder="18.5"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View>
        <Typography.Label>Descrição</Typography.Label>
        <Input
          value={formData.description}
          onChangeText={(text) => setFormData({...formData, description: text})}
          placeholder="Descreva o imóvel e seus diferenciais..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          className="min-h-[100px]"
        />
      </View>
    </View>
  );

  const renderTokenConfig = () => (
    <View className="gap-4">
      <Card className="p-4 bg-accent/5 border-accent/20">
        <View className="flex-row items-center gap-2 mb-2">
          <Icon as={AlertCircleIcon} className="size-4 text-accent" />
          <Typography.Body className="text-accent font-semibold">
            Configuração de Tokenização
          </Typography.Body>
        </View>
        <Typography.Small variant="secondary">
          Defina os parâmetros dos tokens que serão emitidos para este imóvel.
        </Typography.Small>
      </Card>

      <View className="flex-row gap-4">
        <View className="flex-1">
          <Typography.Label>Preço por Token (R$)</Typography.Label>
          <Input
            value={formData.tokenPrice}
            onChangeText={(text) => setFormData({...formData, tokenPrice: text})}
            placeholder="100"
            keyboardType="numeric"
          />
        </View>
        <View className="flex-1">
          <Typography.Label>Total de Tokens</Typography.Label>
          <Input
            value={formData.totalTokens}
            onChangeText={(text) => setFormData({...formData, totalTokens: text})}
            placeholder="150.000"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View>
        <Typography.Label>Investimento Mínimo (R$)</Typography.Label>
        <Input
          value={formData.minInvestment}
          onChangeText={(text) => setFormData({...formData, minInvestment: text})}
          placeholder="100"
          keyboardType="numeric"
        />
      </View>

      <View>
        <Typography.Label>Meta de Captação (R$)</Typography.Label>
        <Input
          value={formData.fundingGoal}
          onChangeText={(text) => setFormData({...formData, fundingGoal: text})}
          placeholder="10.000.000"
          keyboardType="numeric"
        />
      </View>

      <View>
        <Typography.Label>Prazo de Captação</Typography.Label>
        <View className="relative">
          <Input
            value={formData.fundingDeadline}
            onChangeText={(text) => setFormData({...formData, fundingDeadline: text})}
            placeholder="DD/MM/AAAA"
            className="pl-10"
          />
          <View className="absolute left-3 top-3">
            <Icon as={CalendarIcon} className="size-4 text-muted-foreground" />
          </View>
        </View>
      </View>

      <View className="gap-3">
        <View className="flex-row justify-between items-center">
          <View className="flex-1 mr-4">
            <Typography.Body className="font-semibold">Oferta Pública</Typography.Body>
            <Typography.Small variant="secondary">
              Visível para todos os investidores
            </Typography.Small>
          </View>
          <Switch
            value={formData.isPublic}
            onValueChange={(value) => setFormData({...formData, isPublic: value})}
          />
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-1 mr-4">
            <Typography.Body className="font-semibold">Exigir KYC</Typography.Body>
            <Typography.Small variant="secondary">
              Investidores devem ser verificados
            </Typography.Small>
          </View>
          <Switch
            value={formData.requireKYC}
            onValueChange={(value) => setFormData({...formData, requireKYC: value})}
          />
        </View>
      </View>
    </View>
  );

  const renderDocuments = () => (
    <View className="gap-4">
      <Typography.Body variant="secondary" className="mb-2">
        Faça upload dos documentos obrigatórios para a oferta
      </Typography.Body>

      {[
        { id: 'prospectus', label: 'Prospecto de Investimento', required: true },
        { id: 'valuation', label: 'Laudo de Avaliação', required: true },
        { id: 'architectural', label: 'Projeto Arquitetônico', required: false },
        { id: 'viability', label: 'Estudo de Viabilidade', required: false },
      ].map((doc) => (
        <Pressable key={doc.id}>
          <Card className="p-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="bg-muted p-3 rounded-lg">
                  <Icon as={FileTextIcon} className="size-5 text-muted-foreground" />
                </View>
                <View>
                  <Typography.Body className="font-semibold">
                    {doc.label}
                    {doc.required && (
                      <Typography.Body className="text-destructive"> *</Typography.Body>
                    )}
                  </Typography.Body>
                  <Typography.Small variant="secondary">
                    PDF, máx. 10MB
                  </Typography.Small>
                </View>
              </View>
              <Icon as={ChevronRightIcon} className="size-5 text-muted-foreground" />
            </View>
          </Card>
        </Pressable>
      ))}
    </View>
  );

  const renderDesign = () => (
    <View className="gap-4">
      <Typography.Body variant="secondary" className="mb-2">
        Personalize a página de oferta do seu imóvel
      </Typography.Body>

      <View>
        <Typography.Label className="mb-2">Escolha um Template</Typography.Label>
        <View className="gap-3">
          {[
            { id: 'modern', label: 'Moderno', description: 'Design limpo e minimalista' },
            { id: 'classic', label: 'Clássico', description: 'Tradicional e elegante' },
            { id: 'premium', label: 'Premium', description: 'Luxuoso e sofisticado' },
          ].map((template) => (
            <Pressable
              key={template.id}
              onPress={() => setFormData({...formData, template: template.id})}
            >
              <Card className={`p-4 border-2 ${
                formData.template === template.id
                  ? 'border-accent bg-accent/5'
                  : 'border-border'
              }`}>
                <Typography.Body className="font-semibold mb-1">
                  {template.label}
                </Typography.Body>
                <Typography.Small variant="secondary">
                  {template.description}
                </Typography.Small>
              </Card>
            </Pressable>
          ))}
        </View>
      </View>

      <View>
        <Typography.Label className="mb-2">Imagens do Imóvel</Typography.Label>
        <Pressable>
          <Card className="p-8 items-center border-2 border-dashed">
            <Icon as={ImageIcon} className="size-8 text-muted-foreground mb-2" />
            <Typography.Body className="font-semibold mb-1">
              Adicionar Imagens
            </Typography.Body>
            <Typography.Small variant="secondary">
              JPG, PNG até 5MB cada
            </Typography.Small>
          </Card>
        </Pressable>
      </View>
    </View>
  );

  const renderReview = () => (
    <View className="gap-4">
      <Card className="p-4 bg-green-50 border-green-200">
        <View className="flex-row items-center gap-2">
          <Icon as={CheckCircleIcon} className="size-5 text-green-600" />
          <Typography.Body className="text-green-900 font-semibold">
            Tudo pronto para publicar!
          </Typography.Body>
        </View>
      </Card>

      <Card className="p-4">
        <Typography.H4 className="mb-3">Resumo da Oferta</Typography.H4>
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Imóvel</Typography.Small>
            <Typography.Small className="font-semibold">
              {formData.propertyName || 'Não informado'}
            </Typography.Small>
          </View>
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Valor Total</Typography.Small>
            <Typography.Small className="font-semibold">
              R$ {formData.totalValue || '0'}
            </Typography.Small>
          </View>
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Preço do Token</Typography.Small>
            <Typography.Small className="font-semibold">
              R$ {formData.tokenPrice}
            </Typography.Small>
          </View>
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Total de Tokens</Typography.Small>
            <Typography.Small className="font-semibold">
              {formData.totalTokens || '0'}
            </Typography.Small>
          </View>
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">ROI Esperado</Typography.Small>
            <Typography.Small className="font-semibold">
              {formData.expectedROI || '0'}% a.a.
            </Typography.Small>
          </View>
        </View>
      </Card>

      <View className="p-4 bg-muted/30 rounded-lg">
        <Typography.Small variant="secondary" className="text-center">
          Ao publicar, a oferta estará disponível para investidores e não poderá ser editada.
          Certifique-se de que todas as informações estão corretas.
        </Typography.Small>
      </View>
    </View>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 'basic':
        return renderBasicInfo();
      case 'token':
        return renderTokenConfig();
      case 'documents':
        return renderDocuments();
      case 'design':
        return renderDesign();
      case 'review':
        return renderReview();
      default:
        return null;
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Criar Nova Oferta',
          headerShown: true,
        }}
      />
      <SafeAreaView className="flex-1 bg-background">
        {/* Progress Bar */}
        <View className="px-4 pt-4">
          <View className="h-2 bg-muted rounded-full overflow-hidden mb-4">
            <View 
              className="h-full bg-accent transition-all"
              style={{ width: `${progress}%` }}
            />
          </View>
          
          {/* Steps */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="mb-6"
          >
            <View className="flex-row gap-4">
              {STEPS.map((step, index) => {
                const isActive = step.id === currentStep;
                const isCompleted = index < currentStepIndex;
                
                return (
                  <Pressable
                    key={step.id}
                    onPress={() => setCurrentStep(step.id as Step)}
                    className={`px-4 py-2 rounded-full flex-row items-center gap-2 ${
                      isActive ? 'bg-accent' : isCompleted ? 'bg-accent/20' : 'bg-muted'
                    }`}
                  >
                    <Icon 
                      as={step.icon} 
                      className={`size-4 ${
                        isActive ? 'text-accent-foreground' : isCompleted ? 'text-accent' : 'text-muted-foreground'
                      }`}
                    />
                    <Typography.Small className={`font-semibold ${
                      isActive ? 'text-accent-foreground' : isCompleted ? 'text-accent' : 'text-muted-foreground'
                    }`}>
                      {step.label}
                    </Typography.Small>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>

        {/* Content */}
        <ScrollView 
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <View className="flex-row gap-3 mt-8 mb-6">
            {currentStep !== 'basic' && (
              <Pressable onPress={handlePreviousStep} className="flex-1">
                <Button variant="outline">
                  <Typography.Body className="font-semibold">Anterior</Typography.Body>
                </Button>
              </Pressable>
            )}
            
            {currentStep !== 'review' ? (
              <Pressable onPress={handleNextStep} className="flex-1">
                <Button className="bg-accent">
                  <Typography.Body className="text-accent-foreground font-semibold">
                    Próximo
                  </Typography.Body>
                </Button>
              </Pressable>
            ) : (
              <Pressable onPress={handlePublish} className="flex-1">
                <Button className="bg-accent">
                  <Typography.Body className="text-accent-foreground font-semibold">
                    Publicar Oferta
                  </Typography.Body>
                </Button>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
