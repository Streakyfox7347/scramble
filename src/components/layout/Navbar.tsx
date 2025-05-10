
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/login');
  };
  
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <img 
              src="/lovable-uploads/0db6af9c-87f1-4a18-9ea7-eaffd7e56706.png" 
              alt="Scramble Logo" 
              className="w-8 h-8"
            />
          </div>
          <span className="font-semibold text-xl text-white">Scramble</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-white hover:text-scramble-mint transition-colors">
            My Dashboard
          </Link>
          <Link to="/courses" className="text-white hover:text-scramble-mint transition-colors">
            Courses
          </Link>
          <Link to="/members" className="text-white hover:text-scramble-mint transition-colors">
            Members
          </Link>
          <Link to="/faq" className="text-white hover:text-scramble-mint transition-colors">
            FAQ
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/support" className="text-white hover:text-scramble-mint transition-colors hidden md:inline-block">
            Support
          </Link>
          <Button asChild variant="outline" className="rounded-full border-scramble-mint text-white hover:bg-scramble-mint hover:text-scramble-dark">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <User size={16} />
              <span>My Account</span>
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-scramble-mint"
            onClick={handleLogout}
          >
            <LogOut size={18} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
