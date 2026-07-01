import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  Truck,
  Package,
  Calendar
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const ORDERS = [
  { id: 'ORD-8291', customer: 'Sarah Jenkins', product: 'Nike Air Max Plus', price: 108.00, status: 'Processing', date: '2024-05-12', method: 'Card' },
  { id: 'ORD-8290', customer: 'Mike Ross', product: 'Wireless Headphones', price: 75.50, status: 'Shipped', date: '2024-05-11', method: 'Wallet' },
  { id: 'ORD-8289', customer: 'Emma Watson', product: 'Smart Watch', price: 145.00, status: 'Delivered', date: '2024-05-10', method: 'Cash' },
  { id: 'ORD-8288', customer: 'David Gandy', product: 'Leather Boots', price: 210.00, status: 'Cancelled', date: '2024-05-10', method: 'Card' },
];

const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Orders</h1>

        {/* Search and Filter */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full h-9 pl-10 pr-4 bg-muted border-none rounded-lg text-sm"
            />
          </div>
          <button className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Processing', 'Shipped', 'Delivered'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
                activeTab === tab 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "bg-muted text-muted-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4 pb-4">
          {ORDERS.filter(o => activeTab === 'All' || o.status === activeTab).map((order) => (
            <Card key={order.id} className="p-4 border-none bg-card/50 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden relative group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Package className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{order.id}</p>
                    <p className="text-[10px] text-muted-foreground">{order.customer}</p>
                  </div>
                </div>
                <Badge className={cn(
                  "text-[8px] h-5 rounded-full border-none",
                  order.status === 'Processing' ? "bg-blue-500/10 text-blue-500" :
                  order.status === 'Shipped' ? "bg-purple-500/10 text-purple-500" :
                  order.status === 'Delivered' ? "bg-green-500/10 text-green-500" :
                  "bg-red-500/10 text-red-500"
                )}>
                  {order.status}
                </Badge>
              </div>

              <div className="flex justify-between items-end border-t border-border/50 pt-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-muted-foreground">{order.product}</p>
                  <p className="text-sm font-bold text-primary">${order.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end gap-0.5">
                    <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                      <Calendar className="w-2.5 h-2.5" />
                      {order.date}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                      <Clock className="w-2.5 h-2.5" />
                      Paid via {order.method}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default OrderManagement;
