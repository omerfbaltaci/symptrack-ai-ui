import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Stethoscope, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Instant Risk Analysis",
      description: "AI-powered assessment of your symptoms to identify potential health risks instantly."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Smart Suggestions",
      description: "Personalized recommendations based on your symptoms and health history."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Symptom Journal",
      description: "Track your health journey with intelligent logging and pattern recognition."
    }
  ];

  return (
    <div className="min-h-screen bg-background bg-vignette-primary relative overflow-hidden animate-fade-in">
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-accent opacity-8 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-card/60 backdrop-blur-lg animate-slide-in-up">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">SympTrack</span>
            </div>
            <nav className="flex items-center space-x-4 animate-slide-in-right">
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/auth')}
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-primary hover:shadow-glow text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/auth')}
              >
                Register
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6">
        <div className="py-20 text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight bg-gradient-hero bg-clip-text text-transparent">
            AI-Powered Symptom Tracking
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            An intelligent assistant that takes your health seriously
          </p>
          <Button 
            className="bg-gradient-hero hover:shadow-float text-primary-foreground px-8 py-6 text-lg rounded-2xl font-medium shadow-elegant transition-all duration-300 hover:scale-105 animate-glow-pulse"
            onClick={() => navigate('/auth')}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`border-border/50 bg-card/80 backdrop-blur-lg rounded-2xl shadow-card hover:shadow-float transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-vignette-secondary`} style={{animationDelay: `${0.5 + index * 0.2}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-secondary rounded-2xl shadow-glow animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;