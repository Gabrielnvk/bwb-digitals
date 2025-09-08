import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Icon } from '@/src/components/ui/icon';
import { Input } from '@/src/components/ui/input';
import { Typography } from '@/src/shared/components/Typography';
import { Link, Stack, router } from 'expo-router';
import { WalletIcon, MailIcon, KeyIcon } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEmailLogin = async () => {
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/marketplace');
    }, 1500);
  };

  const handleWalletConnect = async () => {
    setIsLoading(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/marketplace');
    }, 2000);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Entrar',
          headerShown: true,
        }}
      />
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView 
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center px-6 py-12">
            <View className="mb-8">
              <Typography.H1 className="text-center mb-2">Bem-vindo de volta</Typography.H1>
              <Typography.Body variant="secondary" className="text-center">
                Entre para acessar suas oportunidades de investimento
              </Typography.Body>
            </View>

            {/* Web3 Login */}
            <Card className="p-6 mb-6">
              <Typography.H4 className="mb-4 text-center">Conectar Carteira</Typography.H4>
              
              <Pressable onPress={handleWalletConnect} disabled={isLoading}>
                <Button 
                  className="bg-accent hover:bg-accent/90 mb-3"
                  disabled={isLoading}
                >
                  <View className="flex-row items-center gap-2">
                    <Icon as={WalletIcon} className="size-5 text-accent-foreground" />
                    <Typography.Body className="text-accent-foreground font-semibold">
                      MetaMask
                    </Typography.Body>
                  </View>
                </Button>
              </Pressable>
              
              <Pressable onPress={handleWalletConnect} disabled={isLoading}>
                <Button 
                  variant="outline"
                  disabled={isLoading}
                >
                  <View className="flex-row items-center gap-2">
                    <Icon as={WalletIcon} className="size-5" />
                    <Typography.Body className="font-semibold">
                      WalletConnect
                    </Typography.Body>
                  </View>
                </Button>
              </Pressable>
            </Card>

            <View className="flex-row items-center gap-4 mb-6">
              <View className="flex-1 h-[1px] bg-border" />
              <Typography.Small variant="secondary">ou</Typography.Small>
              <View className="flex-1 h-[1px] bg-border" />
            </View>

            {/* Traditional Login */}
            <Card className="p-6">
              <Typography.H4 className="mb-4 text-center">Login Tradicional</Typography.H4>
              
              <View className="gap-4">
                <View>
                  <Typography.Label>E-mail</Typography.Label>
                  <View className="relative">
                    <Input
                      value={email}
                      onChangeText={setEmail}
                      placeholder="seu@email.com"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      className="pl-10"
                    />
                    <View className="absolute left-3 top-3">
                      <Icon as={MailIcon} className="size-4 text-muted-foreground" />
                    </View>
                  </View>
                </View>

                <View>
                  <Typography.Label>Senha</Typography.Label>
                  <View className="relative">
                    <Input
                      value={password}
                      onChangeText={setPassword}
                      placeholder="••••••••"
                      secureTextEntry
                      className="pl-10"
                    />
                    <View className="absolute left-3 top-3">
                      <Icon as={KeyIcon} className="size-4 text-muted-foreground" />
                    </View>
                  </View>
                </View>

                <Link href="/auth/forgot-password" asChild>
                  <Pressable>
                    <Typography.Small className="text-accent text-right">
                      Esqueceu sua senha?
                    </Typography.Small>
                  </Pressable>
                </Link>

                <Pressable onPress={handleEmailLogin} disabled={isLoading}>
                  <Button 
                    className="bg-primary"
                    disabled={isLoading}
                  >
                    <Typography.Body className="text-primary-foreground font-semibold">
                      {isLoading ? 'Entrando...' : 'Entrar'}
                    </Typography.Body>
                  </Button>
                </Pressable>
              </View>
            </Card>

            <View className="mt-6">
              <Typography.Body variant="secondary" className="text-center">
                Não tem uma conta?{' '}
                <Link href="/auth/register" asChild>
                  <Pressable>
                    <Typography.Body className="text-accent font-semibold">
                      Cadastre-se
                    </Typography.Body>
                  </Pressable>
                </Link>
              </Typography.Body>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
