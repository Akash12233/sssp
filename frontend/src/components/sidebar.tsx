import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, Brain, BookOpen, Moon } from "lucide-react";


const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Real-time Aanalysis", href: "/realtime", icon: BarChart2 },
  { name: "Sleep Analysis", href: "/sleeptracker", icon: Brain },
  { name: "Education", href: "/education", icon: BookOpen },
];

export default function Sidebar() {
  const location = useLocation(); // Correctly use useLocation()

  return (
    <div className="w-64 min-h-screen bg-sidebar border-r border-border">
      <div className="flex items-center gap-2 px-6 py-4">
        <Moon className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-primary text-white">SomniSense</h1>
      </div>

      <nav className="px-4 py-4 mt-8 text-lg text-white space-y-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-lg
                ${
                  location.pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                }`}
            >
              <Icon className="h-6 w-6" />
              {item.name}
            </Link>
          );
        })}
      </nav>

    </div>
  );
}
