import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, MessageSquare, ShoppingBag, Settings, User, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, showNav = true }) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: ShoppingBag, label: 'Orders', path: '/orders' },
    { icon: BarChart3, label: 'Stats', path: '/analytics' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground max-w-md mx-auto shadow-xl relative overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {showNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-card/80 backdrop-blur-lg border-t border-border flex justify-around items-center py-3 px-2 z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center gap-1 transition-all duration-300",
                  isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {location.pathname === item.path && (
                <span className="absolute -top-1 w-1 h-1 rounded-full bg-primary animate-pulse" />
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileLayout;
