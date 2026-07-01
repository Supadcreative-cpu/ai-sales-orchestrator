import React, { useState, useRef, useEffect } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { 
  Send, 
  Mic, 
  Image as ImageIcon, 
  Plus, 
  ChevronLeft,
  MoreVertical,
  Bot,
  User,
  Sparkles,
  CheckCheck,
  Tag,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_MESSAGES = [
  { id: 1, text: "Hello! I'm interested in the Nike Air Max sneakers. Do you have them in size 42?", sender: 'customer', time: '10:30 AM' },
  { id: 2, text: "Hello! Yes, we do have the Nike Air Max in size 42. They are currently priced at $120. Would you like to proceed with an order?", sender: 'ai', time: '10:31 AM', isAI: true },
  { id: 3, text: "Can you give me a discount? $120 is a bit high for me.", sender: 'customer', time: '10:32 AM' },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [negotiationStatus, setNegotiationStatus] = useState('Active'); // Active, Offer Made, Accepted, Human Needed
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'ai', // Assuming user is acting as AI/Owner for this demo, or we can make it toggle
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAI: true
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    
    // Simulate Customer Response
    setIsTyping(true);
    setTimeout(() => {
      const customerResponse = {
        id: messages.length + 2,
        text: "That sounds fair. What are the delivery options?",
        sender: 'customer',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, customerResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const offerDiscount = () => {
    setNegotiationStatus('Offer Made');
    const offerMessage = {
      id: messages.length + 1,
      text: "I can offer you a 10% discount, bringing the price down to $108. How does that sound?",
      sender: 'ai',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAI: true,
      isOffer: true
    };
    setMessages([...messages, offerMessage]);
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen bg-background">
        {/* Chat Header */}
        <div className="p-4 flex items-center justify-between border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full hover:bg-muted">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Sarah Jenkins</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">Active Negotiation</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-[10px] py-0 px-2 border-primary/30 text-primary flex gap-1 items-center">
              <Sparkles className="w-2.5 h-2.5" /> AI Enabled
            </Badge>
            <button className="p-2 rounded-full hover:bg-muted">
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Negotiation Bar */}
        <div className="px-4 py-2 bg-primary/5 flex items-center justify-between border-b border-primary/10">
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium">Nike Air Max (Size 42)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-primary">$120.00</span>
            {negotiationStatus === 'Active' && (
              <Button 
                size="sm" 
                variant="outline" 
                className="h-7 text-[10px] px-3 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                onClick={offerDiscount}
              >
                Offer Discount
              </Button>
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-6 pb-20"
        >
          {messages.map((msg, i) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex w-full max-w-[85%]",
                msg.sender === 'ai' ? "ml-auto justify-end" : "mr-auto justify-start"
              )}
            >
              <div className={cn("flex flex-col gap-1", msg.sender === 'ai' ? "items-end" : "items-start")}>
                <div className={cn(
                  "p-3 rounded-2xl relative",
                  msg.sender === 'ai' 
                    ? "bg-primary text-white rounded-tr-none shadow-md shadow-primary/20" 
                    : "bg-muted text-foreground rounded-tl-none"
                )}>
                  {msg.isAI && (
                    <div className="absolute -left-2 -top-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center shadow-md">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                
                {/* Product Card Attachment Demo */}
                {i === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full mt-2"
                  >
                    <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm rounded-xl">
                      <div className="flex p-2 gap-3">
                        <img 
                          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ea87a80-49c9-4b15-b15e-ff5a3fc9c2ee/sneakers-product-3c3db8c5-1782350717200.webp" 
                          className="w-16 h-16 rounded-lg object-cover" 
                          alt="Product"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate">Nike Air Max Plus</p>
                          <p className="text-[10px] text-muted-foreground mb-1">Stock: 12 units</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-primary">$120.00</p>
                            <Badge className="text-[8px] h-4 bg-green-500/20 text-green-600 border-none">Available</Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}

                <div className="flex items-center gap-1.5 px-1">
                  <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                  {msg.sender === 'ai' && <CheckCheck className="w-3 h-3 text-primary" />}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex mr-auto justify-start max-w-[85%]">
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border bg-card/80 backdrop-blur-lg sticky bottom-0 z-20 pb-28">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <Input 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Message customer..." 
                className="h-11 rounded-2xl bg-muted border-none pr-10 focus-visible:ring-1 focus-visible:ring-primary shadow-inner"
              />
              <button className="absolute right-3 top-3 text-muted-foreground">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            <Button 
              size="icon" 
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className={cn(
                "h-11 w-11 rounded-2xl transition-all duration-300 shadow-lg shadow-primary/20",
                !inputText.trim() ? "bg-muted text-muted-foreground" : "bg-primary text-white scale-105 active:scale-95"
              )}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
            {["Suggest Reply", "Send Product", "Request Info", "Handover to Human"].map((action) => (
              <button 
                key={action}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 hover:bg-primary hover:text-white transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ChatInterface;
