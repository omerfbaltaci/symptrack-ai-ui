import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Heart, Brain } from "lucide-react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/20 items-center justify-center p-12">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-8 space-x-4">
            <div className="p-6 bg-primary/20 rounded-2xl">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <div className="p-6 bg-secondary/40 rounded-2xl">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <div className="p-6 bg-primary/20 rounded-2xl">
              <Brain className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-muted-foreground">
            Join thousands of users who trust SympTrack for intelligent health monitoring and personalized care insights.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 rounded-3xl shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to SympTrack</h1>
              <p className="text-muted-foreground">AI-powered health tracking</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 rounded-2xl">
                <TabsTrigger value="login" className="rounded-xl">Login</TabsTrigger>
                <TabsTrigger value="register" className="rounded-xl">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    className="rounded-xl border-border/50 bg-input focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    className="rounded-xl border-border/50 bg-input focus:ring-primary"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base font-medium">
                  Login
                </Button>
                <div className="text-center">
                  <Button variant="link" className="text-muted-foreground hover:text-primary">
                    Forgot your password?
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    type="text" 
                    placeholder="Enter your full name"
                    className="rounded-xl border-border/50 bg-input focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerEmail">Email</Label>
                  <Input 
                    id="registerEmail" 
                    type="email" 
                    placeholder="Enter your email"
                    className="rounded-xl border-border/50 bg-input focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerPassword">Password</Label>
                  <Input 
                    id="registerPassword" 
                    type="password" 
                    placeholder="Create a password"
                    className="rounded-xl border-border/50 bg-input focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password"
                    className="rounded-xl border-border/50 bg-input focus:ring-primary"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base font-medium">
                  Register
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;