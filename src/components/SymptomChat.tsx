import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Bot, Calendar } from "lucide-react";

const SymptomChat = () => {
  const [message, setMessage] = useState("");

  // Mock data for past entries
  const pastEntries = [
    { id: 1, date: "Today", symptoms: "Headache, Fatigue", risk: "Low" },
    { id: 2, date: "Yesterday", symptoms: "Mild fever, Cough", risk: "Medium" },
    { id: 3, date: "2 days ago", symptoms: "Sore throat", risk: "Low" },
    { id: 4, date: "3 days ago", symptoms: "Stomach pain", risk: "Low" },
    { id: 5, date: "1 week ago", symptoms: "Back pain", risk: "Low" }
  ];

  // Mock conversation data
  const conversation = [
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm here to help you track your symptoms. How are you feeling today?"
    },
    {
      id: 2,
      type: "user",
      message: "I've been having a persistent headache and feeling quite tired."
    },
    {
      id: 3,
      type: "bot",
      message: "I understand you're experiencing a headache and fatigue. Can you tell me when these symptoms started and rate the severity of your headache on a scale of 1-10?"
    },
    {
      id: 4,
      type: "user",
      message: "The headache started this morning, I'd say it's about a 6/10. The fatigue has been ongoing for 2 days."
    },
    {
      id: 5,
      type: "bot",
      message: "Thank you for the details. Have you experienced any other symptoms like nausea, sensitivity to light, or fever?"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-risk-low/20 text-risk-low border-risk-low/30";
      case "medium":
        return "bg-risk-medium/20 text-risk-medium border-risk-medium/30";
      case "high":
        return "bg-risk-high/20 text-risk-high border-risk-high/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background bg-vignette-primary flex relative overflow-hidden animate-fade-in">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-1/4 h-1/4 bg-gradient-accent opacity-10 rounded-full blur-2xl animate-float"></div>
      
      {/* Left Panel - Past Entries */}
      <div className="w-80 bg-card/70 backdrop-blur-lg border-r border-border/50 p-6 relative z-10 animate-slide-in-left">
        <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-primary animate-glow-pulse" />
          Past Entries
        </h2>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-3">
            {pastEntries.map((entry, index) => (
              <Card key={entry.id} className={`cursor-pointer hover:shadow-float transition-all duration-300 hover:-translate-y-1 border-border/50 rounded-2xl bg-card/80 backdrop-blur-sm bg-vignette-secondary animate-fade-in hover:scale-105`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-foreground">{entry.date}</span>
                    <span className={`px-2 py-1 text-xs rounded-lg border ${getRiskColor(entry.risk)}`}>
                      {entry.risk}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.symptoms}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Panel - Chat Interface */}
      <div className="flex-1 flex flex-col relative z-10 animate-slide-in-right">
        {/* Header */}
        <div className="bg-card/70 backdrop-blur-lg border-b border-border/50 p-6 animate-slide-in-up">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground bg-gradient-hero bg-clip-text text-transparent">{today}</h1>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Bot className="h-5 w-5 text-primary animate-glow-pulse" />
              <span className="text-sm">AI Assistant Active</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-6 bg-vignette-accent">
          <div className="space-y-4 max-w-4xl mx-auto">
            {conversation.map((msg, index) => (
              <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`flex items-start space-x-3 max-w-2xl ${msg.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className={`p-2 rounded-2xl shadow-glow ${msg.type === "user" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}`}>
                    {msg.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-4 rounded-2xl shadow-card backdrop-blur-sm transition-all duration-300 hover:scale-105 ${msg.type === "user" ? "bg-gradient-primary text-primary-foreground ml-auto" : "bg-card/80 border border-border/50"}`}>
                    <p className={`text-sm leading-relaxed ${msg.type === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-card/70 backdrop-blur-lg border-t border-border/50 p-6 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-4">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your symptoms..."
                className="flex-1 rounded-2xl border-border/50 bg-input/80 backdrop-blur-sm focus:ring-primary transition-all duration-300 focus:scale-105"
                onKeyPress={(e) => e.key === "Enter" && message.trim() && setMessage("")}
              />
              <Button 
                className="bg-gradient-accent hover:shadow-glow text-accent-foreground rounded-2xl px-6 transition-all duration-300 hover:scale-105"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChat;