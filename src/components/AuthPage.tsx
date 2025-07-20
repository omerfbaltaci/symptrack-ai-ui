import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Heart, Brain } from "lucide-react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/chat");
  };

  const handleRegister = () => {
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-background bg-vignette-secondary flex relative overflow-hidden animate-fade-in">
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-primary opacity-15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-gradient-accent opacity-10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-vignette-primary items-center justify-center p-12 relative z-10 animate-slide-in-left">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-8 space-x-4">
            <div className="p-6 bg-gradient-primary rounded-2xl shadow-glow animate-float">
              <Shield className="h-12 w-12 text-primary-foreground" />
            </div>
            <div className="p-6 bg-gradient-secondary rounded-2xl shadow-glow animate-float" style={{animationDelay: '0.5s'}}>
              <Heart className="h-12 w-12 text-secondary-foreground" />
            </div>
            <div className="p-6 bg-gradient-accent rounded-2xl shadow-glow animate-float" style={{animationDelay: '1s'}}>
              <Brain className="h-12 w-12 text-accent-foreground" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Your Health, Our Priority
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Join thousands of users who trust SympTrack for intelligent health monitoring and personalized care insights.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10 animate-slide-in-right">
        <Card className="w-full max-w-md bg-card/90 backdrop-blur-lg border-border/50 rounded-3xl shadow-float bg-vignette-accent animate-scale-in" style={{animationDelay: '0.4s'}}>
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
                <Button 
                  onClick={handleLogin}
                  className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground rounded-xl py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                >
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
                <Button 
                  onClick={handleRegister}
                  className="w-full bg-gradient-secondary hover:shadow-glow text-secondary-foreground rounded-xl py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                >
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