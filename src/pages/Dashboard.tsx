import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  MessageSquare, 
  ShoppingBag, 
  Users, 
  ArrowUpRight, 
  Bell,
  Search,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const Dashboard = () => {
  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Overview</h1>
            <p className="text-sm text-muted-foreground">Good morning, Nike Store</p>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <Users className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* AI Performance Quick Glance */}
        <div className="bg-gradient-to-br from-primary to-secondary p-5 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Sparkles className="w-20 h-20" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-md">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider opacity-80">AI Performance</span>
            </div>
            <h2 className="text-3xl font-bold mb-1">84.2%</h2>
            <p className="text-sm opacity-90">Conversations closed by AI today</p>
            
            <div className="mt-6 flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-[10px] opacity-70 uppercase">Daily Revenue</span>
                <p className="text-xl font-bold">$1,240.50</p>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] backdrop-blur-md">
                <ArrowUpRight className="w-3 h-3" />
                +12.5%
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search orders or chats..." 
            className="w-full h-10 pl-10 pr-4 bg-muted/50 border-none rounded-xl text-sm focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 rounded-2xl border-none bg-card/50 backdrop-blur-sm shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-[10px] text-green-500 font-bold">+5</span>
            </div>
            <p className="text-2xl font-bold">28</p>
            <p className="text-xs text-muted-foreground">Active Chats</p>
          </Card>
          <Card className="p-4 rounded-2xl border-none bg-card/50 backdrop-blur-sm shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-purple-500" />
              </div>
              <span className="text-[10px] text-green-500 font-bold">+12</span>
            </div>
            <p className="text-2xl font-bold">142</p>
            <p className="text-xs text-muted-foreground">Total Orders</p>
          </Card>
        </div>

        {/* Mini Chart */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Sales Activity</h3>
            <button className="text-xs text-primary font-medium">View Detailed</button>
          </div>
          <Card className="p-4 rounded-2xl border-none bg-card/50 backdrop-blur-sm shadow-sm h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="oklch(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="oklch(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="oklch(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorSales)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Notifications / Activities */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Recent AI Actions</h3>
          {[
            { user: "Sarah J.", action: "Negotiated Sneakers from $120 to $105", time: "2m ago", status: "success" },
            { user: "Mike R.", action: "Placed an order for Wireless Headphones", time: "15m ago", status: "order" },
            { user: "Unknown", action: "AI requested human assistance for size inquiry", time: "1h ago", status: "help" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border">
                {item.status === 'success' ? <Sparkles className="w-5 h-5 text-yellow-500" /> : 
                 item.status === 'order' ? <ShoppingBag className="w-5 h-5 text-green-500" /> : 
                 <Users className="w-5 h-5 text-blue-500" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-semibold">{item.user}</p>
                  <span className="text-[10px] text-muted-foreground">{item.time}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-tight">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
