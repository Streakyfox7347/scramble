
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full golf-gradient flex items-center justify-center text-white font-bold text-xl">
            GS
          </div>
          <span className="font-semibold text-xl text-golf-green">GolfSmart</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/courses" className="text-foreground hover:text-golf-green-light transition-colors">
            Courses
          </Link>
          <Link to="/members" className="text-foreground hover:text-golf-green-light transition-colors">
            Members
          </Link>
          <Link to="/add-course" className="text-foreground hover:text-golf-green-light transition-colors">
            Add Course
          </Link>
          <Link to="/contact" className="text-foreground hover:text-golf-green-light transition-colors">
            Contact Us
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-golf-green hover:bg-golf-green-dark">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
