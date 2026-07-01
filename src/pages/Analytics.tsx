import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronLeft,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const salesData = [
  { name: 'Week 1', sales: 4000, ai: 2400 },
  { name: 'Week 2', sales: 3000, ai: 1398 },
  { name: 'Week 3', sales: 2000, ai: 9800 },
  { name: 'Week 4', sales: 2780, ai: 3908 },
];

const pieData = [
  { name: 'AI Handled', value: 75, color: 'oklch(var(--primary))' },
  { name: 'Human Handled', value: 25, color: 'oklch(var(--secondary))' },
];

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Analytics</h1>
        </div>

        {/* Date Filter */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-muted/50">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Last 30 Days</span>
          </div>
          <button className="text-xs text-primary font-bold">Change</button>
        </div>

        {/* Main Stats Card */}
        <Card className="p-6 rounded-3xl border-none bg-gradient-to-br from-card to-muted shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
              <div className="flex items-end gap-2">
                <h2 className="text-3xl font-bold">$24,580.00</h2>
                <span className="text-xs text-green-500 font-bold flex items-center mb-1">
                  <ArrowUpRight className="w-3 h-3" /> +18%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Conversion Rate</p>
                <div className="flex items-center gap-1">
                  <h3 className="text-xl font-bold">12.4%</h3>
                  <span className="text-[10px] text-red-500 flex items-center">
                    <ArrowDownRight className="w-2 h-2" /> 2%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Avg. Order Value</p>
                <div className="flex items-center gap-1">
                  <h3 className="text-xl font-bold">$84.50</h3>
                  <span className="text-[10px] text-green-500 flex items-center">
                    <ArrowUpRight className="w-2 h-2" /> 5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Sales Performance Chart */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Sales Performance</h3>
          <Card className="p-4 rounded-2xl border-none bg-card/50 backdrop-blur-sm shadow-sm h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(var(--border))" />
                <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                />
                <Bar dataKey="sales" fill="oklch(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="ai" fill="oklch(var(--secondary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] text-muted-foreground">Manual</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-[10px] text-muted-foreground">AI Assisted</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Efficiency Pie Chart */}
        <div className="grid grid-cols-1 gap-6 pb-4">
          <Card className="p-6 rounded-3xl border-none bg-card/50 backdrop-blur-sm shadow-sm flex items-center">
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-lg">AI Efficiency</h3>
              <p className="text-xs text-muted-foreground">Percentage of chats successfully resolved by AI without human intervention.</p>
              <div className="pt-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span>AI Autonomy</span>
                  <span className="font-bold">75%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
            <div className="w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={35}
                    outerRadius={50}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Analytics;
