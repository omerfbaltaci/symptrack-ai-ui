import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Stethoscope, Calendar } from "lucide-react";

const SummaryPage = () => {
  // Mock data
  const summaryData = {
    riskLevel: "Low",
    aiSummary: "Based on your symptoms today, you appear to be experiencing mild tension-related discomfort. Your headache and fatigue symptoms are consistent with stress or dehydration.",
    suggestion: "It is recommended to ensure adequate hydration, take regular breaks, and consider stress management techniques. If symptoms persist or worsen, consult a healthcare professional."
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return {
          bg: "bg-risk-low/10",
          text: "text-risk-low",
          border: "border-risk-low/30",
          icon: "text-risk-low"
        };
      case "medium":
        return {
          bg: "bg-risk-medium/10",
          text: "text-risk-medium",
          border: "border-risk-medium/30",
          icon: "text-risk-medium"
        };
      case "high":
        return {
          bg: "bg-risk-high/10",
          text: "text-risk-high",
          border: "border-risk-high/30",
          icon: "text-risk-high"
        };
      default:
        return {
          bg: "bg-muted",
          text: "text-muted-foreground",
          border: "border-border",
          icon: "text-muted-foreground"
        };
    }
  };

  const riskColors = getRiskColor(summaryData.riskLevel);
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background bg-vignette-primary relative overflow-hidden animate-fade-in">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-gradient-accent opacity-8 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Header */}
      <div className="bg-card/70 backdrop-blur-lg border-b border-border/50 relative z-10 animate-slide-in-up">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="animate-slide-in-left">
              <h1 className="text-3xl font-bold text-foreground mb-2 bg-gradient-hero bg-clip-text text-transparent">Today's Health Summary</h1>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4 text-primary animate-glow-pulse" />
                <span>{today}</span>
              </div>
            </div>
            <div className="text-right animate-slide-in-right">
              <p className="text-sm text-muted-foreground">Last updated</p>
              <p className="font-medium text-foreground">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid gap-8 max-w-4xl mx-auto">
          
          {/* Risk Level Card */}
          <Card className={`${riskColors.bg} border-2 ${riskColors.border} rounded-2xl shadow-float hover:shadow-elegant transition-all duration-500 bg-vignette-secondary backdrop-blur-lg animate-fade-in hover:scale-105`} style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                  <TrendingDown className={`mr-3 h-6 w-6 ${riskColors.icon} animate-glow-pulse`} />
                  Risk Level Assessment
                </CardTitle>
                <Badge className={`${riskColors.bg} ${riskColors.text} border ${riskColors.border} px-4 py-2 text-sm font-medium rounded-xl shadow-glow`}>
                  {summaryData.riskLevel} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your current symptoms indicate a <strong className={riskColors.text}>{summaryData.riskLevel.toLowerCase()} risk level</strong>. 
                Continue monitoring your symptoms and follow the recommendations below.
              </p>
            </CardContent>
          </Card>

          {/* AI Summary Card */}
          <Card className="bg-vignette-primary backdrop-blur-lg border border-border/50 rounded-2xl shadow-float hover:shadow-elegant transition-all duration-500 animate-fade-in hover:scale-105" style={{animationDelay: '0.4s'}}>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <AlertTriangle className="mr-3 h-6 w-6 text-primary animate-glow-pulse" />
                AI Analysis Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/30 bg-gradient-primary opacity-90">
                <p className="text-foreground leading-relaxed">
                  {summaryData.aiSummary}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Suggestion Card */}
          <Card className="bg-vignette-accent backdrop-blur-lg border border-border/50 rounded-2xl shadow-float hover:shadow-elegant transition-all duration-500 animate-fade-in hover:scale-105" style={{animationDelay: '0.6s'}}>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Stethoscope className="mr-3 h-6 w-6 text-primary animate-glow-pulse" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <p className="text-foreground leading-relaxed mb-4">
                  {summaryData.suggestion}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground rounded-lg px-3 py-1 shadow-glow transition-all duration-300 hover:scale-110">
                    Hydration
                  </Badge>
                  <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground rounded-lg px-3 py-1 shadow-glow transition-all duration-300 hover:scale-110">
                    Rest
                  </Badge>
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground rounded-lg px-3 py-1 shadow-glow transition-all duration-300 hover:scale-110">
                    Stress Management
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <button className="bg-gradient-primary hover:shadow-float text-primary-foreground px-8 py-3 rounded-2xl font-medium shadow-elegant transition-all duration-300 hover:scale-105 animate-glow-pulse">
              Update Symptoms
            </button>
            <button className="bg-card/80 backdrop-blur-sm hover:bg-gradient-secondary hover:text-secondary-foreground text-foreground border border-border/50 px-8 py-3 rounded-2xl font-medium shadow-card hover:shadow-float transition-all duration-300 hover:scale-105">
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;