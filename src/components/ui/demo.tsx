import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Separator } from './separator';
import { Switch } from './switch';
import { Text } from './text';

export function ShadcnDemo() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="space-y-6">
        {/* Header */}
        <View className="space-y-2">
          <Text variant="h1" className="text-center">
            Shadcn/UI Components
          </Text>
          <Text variant="body" className="text-center text-muted-foreground">
            React Native compatible components built with shadcn/ui patterns
          </Text>
        </View>

        <Separator />

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Different button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <View className="flex-row flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </View>
            <View className="flex-row flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </View>
          </CardContent>
        </Card>

        {/* Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Form input components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <View className="space-y-2">
              <Label>Email</Label>
              <Input placeholder="Enter your email" />
            </View>
            <View className="space-y-2">
              <Label>Password</Label>
              <Input placeholder="Enter your password" secureTextEntry />
            </View>
            <View className="space-y-2">
              <Label>Disabled Input</Label>
              <Input placeholder="Disabled input" editable={false} />
            </View>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status and label indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </View>
          </CardContent>
        </Card>

        {/* Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>Toggle component</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row items-center justify-between">
              <Label>Notifications</Label>
              <Switch value={switchValue} onValueChange={setSwitchValue} />
            </View>
          </CardContent>
        </Card>

        {/* Complex Card Example */}
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Current project information and metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <View className="flex-row items-center justify-between">
              <Text variant="body">Development Phase</Text>
              <Badge variant="secondary">In Progress</Badge>
            </View>
            <Separator />
            <View className="space-y-2">
              <Text variant="body">Team Members</Text>
              <View className="flex-row flex-wrap gap-1">
                <Badge variant="outline">John Doe</Badge>
                <Badge variant="outline">Jane Smith</Badge>
                <Badge variant="outline">Mike Johnson</Badge>
              </View>
            </View>
            <Separator />
            <View className="flex-row items-center justify-between">
              <Text variant="body">Auto-deploy</Text>
              <Switch value={true} />
            </View>
          </CardContent>
          <CardFooter>
            <Button className="flex-1">View Details</Button>
          </CardFooter>
        </Card>
      </View>
    </ScrollView>
  );
}





