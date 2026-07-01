import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { 
  User, 
  Settings, 
  CreditCard, 
  Share2, 
  Link as LinkIcon, 
  LogOut, 
  ChevronRight,
  Moon,
  Bell,
  Globe,
  Store,
  Bot
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const navigate = useNavigate();

  const MENU_SECTIONS = [
    {
      title: "Store Management",
      items: [
        { icon: Store, label: "Business Profile", desc: "Update your store info", path: "/profile/edit" },
        { icon: LinkIcon, label: "Store Integrations", desc: "Connect WhatsApp, Instagram...", path: "/integrations", badge: "3 Connected" },
        { icon: Bot, label: "AI Negotiation", desc: "Set limits and strategies", path: "/settings/negotiation" },
      ]
    },
    {
      title: "Settings & Security",
      items: [
        { icon: Bell, label: "Notifications", desc: "Manage your alerts", path: "/settings/notifications" },
        { icon: Globe, label: "Language", desc: "English (US)", path: "/settings/language" },
        { icon: Moon, label: "Dark Mode", desc: "Appearance preferences", toggle: true },
      ]
    },
    {
      title: "Account",
      items: [
        { icon: CreditCard, label: "Subscription", desc: "Manage your Pro plan", path: "/settings/billing", badge: "Pro" },
        { icon: Share2, label: "Refer & Earn", desc: "Invite other vendors", path: "/refer" },
      ]
    }
  ];

  return (
    <MobileLayout>
      <div className="p-6 space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center py-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl shadow-primary/20 rotate-3">
              <Store className="w-12 h-12 text-white -rotate-3" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center text-muted-foreground shadow-sm">
              <Settings className="w-4 h-4" />
            </button>
          </div>
          <h2 className="text-xl font-bold">Nike Authorized Store</h2>
          <p className="text-sm text-muted-foreground mb-4">premium-partner-8291</p>
          <div className="flex gap-4">
            <div className="flex flex-col items-center px-4">
              <span className="text-lg font-bold">1.2k</span>
              <span className="text-[10px] text-muted-foreground uppercase">Sales</span>
            </div>
            <div className="w-px h-8 bg-border self-center" />
            <div className="flex flex-col items-center px-4">
              <span className="text-lg font-bold">4.9</span>
              <span className="text-[10px] text-muted-foreground uppercase">Rating</span>
            </div>
            <div className="w-px h-8 bg-border self-center" />
            <div className="flex flex-col items-center px-4">
              <span className="text-lg font-bold">98%</span>
              <span className="text-[10px] text-muted-foreground uppercase">AI Solved</span>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        {MENU_SECTIONS.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">{section.title}</h3>
            <div className="bg-muted/30 rounded-3xl border border-border/50 overflow-hidden">
              {section.items.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => !item.toggle && navigate(item.path || '#')}
                  className={cn(
                    "flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer",
                    i !== section.items.length - 1 && "border-b border-border/50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <Badge variant="secondary" className="text-[8px] h-4 rounded-md uppercase font-bold px-1.5">{item.badge}</Badge>
                    )}
                    {item.toggle ? (
                      <Switch checked={true} />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button 
          onClick={() => navigate('/login')}
          className="w-full py-4 flex items-center justify-center gap-2 text-red-500 font-bold bg-red-500/5 rounded-2xl border border-red-500/10 mb-8"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </MobileLayout>
  );
};

export default Profile;
