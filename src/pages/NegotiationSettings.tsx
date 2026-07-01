import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { 
  Settings, 
  Save, 
  Sparkles, 
  Info, 
  CheckCircle2,
  DollarSign,
  Percent,
  ToggleLeft as Toggle,
  ChevronLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const NegotiationSettings = () => {
  const navigate = useNavigate();
  const [minPricePercent, setMinPricePercent] = useState([20]);
  const [autoApprove, setAutoApprove] = useState(true);

  return (
    <MobileLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold">AI Settings</h1>
          </div>
          <Button size="sm" className="gap-2 rounded-xl">
            <Save className="w-4 h-4" /> Save
          </Button>
        </div>

        {/* Global Controls */}
        <Card className="p-5 border-none bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold">AI Negotiation</p>
                <p className="text-[10px] text-muted-foreground">Master toggle for automation</p>
              </div>
            </div>
            <Switch checked={autoApprove} onCheckedChange={setAutoApprove} />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            "When enabled, AI will interact with customers and offer discounts within your specified limits."
          </p>
        </Card>

        {/* Default Pricing Strategy */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">Default Strategy</h3>
            <Info className="w-3.5 h-3.5 text-muted-foreground" />
          </div>

          <div className="space-y-6 bg-muted/30 p-5 rounded-3xl border border-border/50">
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-semibold">Max Discount Allowed</label>
                <span className="text-sm font-bold text-primary">{minPricePercent}%</span>
              </div>
              <Slider 
                value={minPricePercent} 
                onValueChange={setMinPricePercent}
                max={50} 
                step={1} 
                className="py-4"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Conservative (5%)</span>
                <span>Aggressive (50%)</span>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="space-y-3">
              <label className="text-sm font-semibold">Initial Offer Behavior</label>
              <div className="grid grid-cols-2 gap-3">
                {['Wait for request', 'Proactive'].map((opt) => (
                  <button 
                    key={opt}
                    className={cn(
                      "p-3 rounded-2xl text-xs font-bold border-2 transition-all text-center",
                      opt === 'Wait for request' 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-transparent bg-muted text-muted-foreground"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Specific Limits */}
        <div className="space-y-4 pb-10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Product Limits</h3>
            <button className="text-xs text-primary font-bold">Manage All</button>
          </div>
          
          {[
            { name: "Nike Air Max Plus", price: "$120", limit: "15%" },
            { name: "Wireless Headphones", price: "$85", limit: "20%" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground">Base Price: {item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[10px] rounded-lg">{item.limit}</Badge>
                <ChevronLeft className="w-4 h-4 rotate-180 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default NegotiationSettings;
