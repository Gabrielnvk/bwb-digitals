import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Typography } from '@/src/shared/components/Typography';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { 
  QrCodeIcon,
  WalletIcon,
  CheckCircleIcon,
  CopyIcon,
  TimerIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type PaymentMethod = 'pix' | 'wallet';
type PaymentStep = 'selection' | 'processing' | 'confirmation';

export default function InvestmentFlowScreen() {
  const { propertyId, amount, tokens } = useLocalSearchParams();
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentMethod | null>(null);
  const [currentStep, setCurrentStep] = React.useState<PaymentStep>('selection');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const PIX_CODE = '00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-426614174000';
  const WALLET_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc9e7595f6E123';

  const handlePaymentSelection = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setCurrentStep('processing');
    
    // Simulate payment processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (method === 'wallet') {
        // Simulate wallet connection and transaction
        setTimeout(() => {
          setCurrentStep('confirmation');
        }, 2000);
      }
    }, 1500);
  };

  const handlePixPayment = () => {
    setIsProcessing(true);
    // Simulate PIX confirmation
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('confirmation');
    }, 3000);
  };

  const handleCopyToClipboard = (text: string) => {
    // In a real app, you'd use Clipboard API
    console.log('Copied:', text);
  };

  const renderPaymentSelection = () => (
    <View className="px-4 py-6">
      <Typography.H2 className="mb-2">Escolha a forma de pagamento</Typography.H2>
      <Typography.Body variant="secondary" className="mb-6">
        Valor do investimento: R$ {amount}
      </Typography.Body>

      {/* Payment Methods */}
      <View className="gap-4 mb-6">
        <Pressable onPress={() => handlePaymentSelection('pix')}>
          <Card className="p-4 border-2 border-border hover:border-accent">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <View className="bg-accent/10 p-3 rounded-lg">
                  <Icon as={QrCodeIcon} className="size-6 text-accent" />
                </View>
                <View>
                  <Typography.H4>PIX</Typography.H4>
                  <Typography.Small variant="secondary">
                    Pagamento instantâneo via QR Code
                  </Typography.Small>
                </View>
              </View>
              <Icon as={ArrowRightIcon} className="size-5 text-muted-foreground" />
            </View>
          </Card>
        </Pressable>

        <Pressable onPress={() => handlePaymentSelection('wallet')}>
          <Card className="p-4 border-2 border-border hover:border-accent">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <View className="bg-accent/10 p-3 rounded-lg">
                  <Icon as={WalletIcon} className="size-6 text-accent" />
                </View>
                <View>
                  <Typography.H4>Carteira Digital</Typography.H4>
                  <Typography.Small variant="secondary">
                    Pague com BRLA ou stablecoins
                  </Typography.Small>
                </View>
              </View>
              <Icon as={ArrowRightIcon} className="size-5 text-muted-foreground" />
            </View>
          </Card>
        </Pressable>
      </View>

      {/* Security Notice */}
      <Card className="p-4 bg-green-50 border-green-200">
        <View className="flex-row items-start gap-3">
          <Icon as={ShieldCheckIcon} className="size-5 text-green-600 mt-0.5" />
          <View className="flex-1">
            <Typography.Body className="text-green-900 font-semibold mb-1">
              Pagamento Seguro
            </Typography.Body>
            <Typography.Small className="text-green-700">
              Seus pagamentos são protegidos por contratos inteligentes auditados e você recebe seus tokens automaticamente.
            </Typography.Small>
          </View>
        </View>
      </Card>
    </View>
  );

  const renderPixPayment = () => (
    <View className="px-4 py-6">
      <Typography.H2 className="mb-2">Pagamento via PIX</Typography.H2>
      <Typography.Body variant="secondary" className="mb-6">
        Escaneie o QR Code ou copie o código PIX
      </Typography.Body>

      {/* QR Code */}
      <Card className="p-6 items-center mb-6">
        <View className="bg-black p-4 rounded-lg mb-4">
          <Image
            source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${PIX_CODE}` }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        
        <Typography.H3 className="text-accent mb-2">R$ {amount}</Typography.H3>
        <Typography.Small variant="secondary" className="mb-4">
          Valor a ser pago
        </Typography.Small>

        {/* Copy PIX Code */}
        <Pressable 
          onPress={() => handleCopyToClipboard(PIX_CODE)}
          className="bg-muted p-3 rounded-lg w-full"
        >
          <View className="flex-row items-center justify-center gap-2">
            <Icon as={CopyIcon} className="size-4 text-foreground" />
            <Typography.Small className="font-semibold">Copiar código PIX</Typography.Small>
          </View>
        </Pressable>
      </Card>

      {/* Timer */}
      <Card className="p-4 bg-yellow-50 border-yellow-200 mb-6">
        <View className="flex-row items-center gap-3">
          <Icon as={TimerIcon} className="size-5 text-yellow-600" />
          <View className="flex-1">
            <Typography.Body className="text-yellow-900 font-semibold">
              Tempo restante: 14:53
            </Typography.Body>
            <Typography.Small className="text-yellow-700">
              Complete o pagamento para garantir seus tokens
            </Typography.Small>
          </View>
        </View>
      </Card>

      {/* Confirm Button */}
      <Pressable onPress={handlePixPayment} disabled={isProcessing}>
        <Button className="bg-accent" disabled={isProcessing}>
          {isProcessing ? (
            <ActivityIndicator color="white" />
          ) : (
            <Typography.Body className="text-accent-foreground font-semibold">
              Confirmar Pagamento
            </Typography.Body>
          )}
        </Button>
      </Pressable>
    </View>
  );

  const renderWalletPayment = () => (
    <View className="px-4 py-6">
      <Typography.H2 className="mb-2">Conectando sua carteira...</Typography.H2>
      <Typography.Body variant="secondary" className="mb-6">
        Confirme a transação em sua carteira
      </Typography.Body>

      <Card className="p-6 items-center">
        <ActivityIndicator size="large" color="#c5a572" className="mb-4" />
        <Typography.Body className="text-center mb-2">
          Aguardando confirmação da MetaMask
        </Typography.Body>
        <Typography.Small variant="secondary" className="text-center">
          Uma janela deve abrir em seu navegador
        </Typography.Small>
      </Card>

      <View className="mt-6 p-4 bg-muted/30 rounded-lg">
        <Typography.Caption className="text-center mb-2">Detalhes da Transação</Typography.Caption>
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Contrato:</Typography.Small>
            <Typography.Small className="font-mono">{WALLET_ADDRESS.slice(0, 10)}...</Typography.Small>
          </View>
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Valor:</Typography.Small>
            <Typography.Small className="font-semibold">{amount} BRLA</Typography.Small>
          </View>
          <View className="flex-row justify-between">
            <Typography.Small variant="secondary">Gas estimado:</Typography.Small>
            <Typography.Small>~12.50 BRLA</Typography.Small>
          </View>
        </View>
      </View>
    </View>
  );

  const renderConfirmation = () => (
    <View className="px-4 py-6">
      <View className="items-center mb-6">
        <View className="bg-green-100 p-4 rounded-full mb-4">
          <Icon as={CheckCircleIcon} className="size-12 text-green-600" />
        </View>
        <Typography.H2 className="mb-2">Investimento Confirmado!</Typography.H2>
        <Typography.Body variant="secondary" className="text-center">
          Você agora é proprietário de {tokens} tokens
        </Typography.Body>
      </View>

      <Card className="p-6 mb-6">
        <Typography.H4 className="mb-4">Resumo do Investimento</Typography.H4>
        <View className="gap-3">
          <View className="flex-row justify-between">
            <Typography.Body variant="secondary">Valor investido</Typography.Body>
            <Typography.Body className="font-semibold">R$ {amount}</Typography.Body>
          </View>
          <View className="flex-row justify-between">
            <Typography.Body variant="secondary">Tokens adquiridos</Typography.Body>
            <Typography.Body className="font-semibold">{tokens}</Typography.Body>
          </View>
          <View className="flex-row justify-between">
            <Typography.Body variant="secondary">Preço por token</Typography.Body>
            <Typography.Body className="font-semibold">R$ 100</Typography.Body>
          </View>
          <View className="border-t border-border pt-3">
            <View className="flex-row justify-between">
              <Typography.Body variant="secondary">ROI esperado</Typography.Body>
              <Typography.Body className="text-green-600 font-semibold">18.5% a.a.</Typography.Body>
            </View>
          </View>
        </View>
      </Card>

      <View className="gap-3">
        <Pressable onPress={() => router.push('/investor/portfolio')}>
          <Button className="bg-accent">
            <Typography.Body className="text-accent-foreground font-semibold">
              Ver Meu Portfólio
            </Typography.Body>
          </Button>
        </Pressable>
        
        <Pressable onPress={() => router.push('/marketplace')}>
          <Button variant="outline">
            <Typography.Body className="font-semibold">
              Continuar Investindo
            </Typography.Body>
          </Button>
        </Pressable>
      </View>
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Finalizar Investimento',
          headerShown: true,
        }}
      />
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView 
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          {currentStep === 'selection' && renderPaymentSelection()}
          {currentStep === 'processing' && paymentMethod === 'pix' && renderPixPayment()}
          {currentStep === 'processing' && paymentMethod === 'wallet' && renderWalletPayment()}
          {currentStep === 'confirmation' && renderConfirmation()}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
