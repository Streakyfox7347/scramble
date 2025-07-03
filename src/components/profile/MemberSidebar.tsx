
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { User, Edit, FileText } from 'lucide-react';

interface MemberSidebarProps {
  name?: string;
  handicap?: number;
  profileImage?: string;
}

const MemberSidebar = ({
  name = 'John Doe',
  handicap = 12.5,
  profileImage,
}: MemberSidebarProps) => {
  return (
    <Card className="w-full bg-white shadow-md">
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="h-24 w-24 border-2 border-golf-green">
            {profileImage ? (
              <AvatarImage src={profileImage} alt={name} />
            ) : (
              <AvatarFallback className="bg-golf-green-light text-white">
                <User size={32} />
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="mt-4 text-center">
            <h3 className="font-semibold text-lg" style={{ color: '#94d1bd' }}>{name}</h3>
            <div className="flex items-center justify-center mt-1 text-gray-600">
              <span className="font-medium">Handicap:</span>
              <span className="ml-2">{handicap}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Edit size={16} />
            <span>Edit Profile Picture</span>
          </Button>
          
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <Edit size={16} />
            <span>Edit Handicap</span>
          </Button>
          
          <Button variant="outline" size="sm" className="w-full flex items-center justify-start gap-2">
            <FileText size={16} />
            <span>View/Edit All Details</span>
          </Button>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-golf-sand bg-opacity-30 border-t border-golf-sand">
        <h4 className="font-medium text-sm text-golf-green mb-2">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-600">Home Course:</span>
            <p className="font-medium truncate">Pine Valley</p>
          </div>
          <div>
            <span className="text-gray-600">Rounds:</span>
            <p className="font-medium">24</p>
          </div>
          <div>
            <span className="text-gray-600">Best Score:</span>
            <p className="font-medium">78</p>
          </div>
          <div>
            <span className="text-gray-600">Member Since:</span>
            <p className="font-medium">2023</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MemberSidebar;
