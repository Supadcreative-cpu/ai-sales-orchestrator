import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { 
  Users, 
  MessageSquare, 
  Clock, 
  ShieldAlert, 
  ChevronRight,
  UserPlus,
  BadgeCheck,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const AGENTS = [
  { name: 'Alex Thompson', role: 'Support Lead', status: 'Online', chats: 3, avatar: 'AT' },
  { name: 'Sarah Wilson', role: 'Sales Specialist', status: 'In a chat', chats: 5, avatar: 'SW' },
  { name: 'John Doe', role: 'Support Agent', status: 'Offline', chats: 0, avatar: 'JD' },
];

const PENDING_HANDOVERS = [
  { customer: 'David Beckham', issue: 'Complex pricing inquiry', priority: 'High', time: '5m ago' },
  { customer: 'Victoria A.', issue: 'Bulk order negotiation', priority: 'Medium', time: '12m ago' },
];

const HumanSupport = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Support Center</h1>
        </div>

        {/* Handover Queue */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              Priority Handover
            </h3>
            <Badge className="bg-red-500/10 text-red-600 border-none rounded-full px-2 h-5">2 Active</Badge>
          </div>
          
          <div className="space-y-3">
            {PENDING_HANDOVERS.map((item, i) => (
              <Card key={i} className="p-4 border-none bg-red-500/5 rounded-2xl shadow-sm border border-red-500/10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-bold">{item.customer}</p>
                    <p className="text-[10px] text-muted-foreground">{item.issue}</p>
                  </div>
                  <Badge className={cn(
                    "text-[8px] h-4 uppercase",
                    item.priority === 'High' ? "bg-red-500 text-white" : "bg-yellow-500 text-white"
                  )}>
                    {item.priority}
                  </Badge>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Waiting for {item.time}
                  </span>
                  <button className="text-[10px] font-bold text-primary hover:underline uppercase tracking-wider">Take Conversation</button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Team Status</h3>
            <button className="p-2 rounded-lg bg-primary/10 text-primary">
              <UserPlus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {AGENTS.map((agent, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-border flex items-center justify-center font-bold text-muted-foreground relative">
                    {agent.avatar}
                    <div className={cn(
                      "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
                      agent.status === 'Online' ? "bg-green-500" : 
                      agent.status === 'In a chat' ? "bg-yellow-500" : "bg-gray-400"
                    )} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-bold">{agent.name}</p>
                      <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <p className="text-[10px] text-muted-foreground">{agent.role}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-medium text-muted-foreground">{agent.status}</span>
                  {agent.chats > 0 && (
                    <span className="text-[10px] font-bold text-primary">{agent.chats} active chats</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default HumanSupport;
