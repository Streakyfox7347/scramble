
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { User, Phone } from 'lucide-react';

interface MemberCardProps {
  id: string | number;
  name: string;
  handicap: number;
  profileImage?: string;
  snippet?: string;
}

const MemberCard = ({ id, name, handicap, profileImage, snippet }: MemberCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-center space-x-4 mb-3">
          <Avatar className="h-12 w-12 border border-golf-green">
            {profileImage ? (
              <AvatarImage src={profileImage} alt={name} />
            ) : (
              <AvatarFallback className="bg-golf-green-light text-white">
                <User size={20} />
              </AvatarFallback>
            )}
          </Avatar>
          
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="text-sm text-gray-500">
              Handicap: <span className="font-medium">{handicap}</span>
            </div>
          </div>
        </div>
        
        {snippet && (
          <div className="text-gray-600 text-sm mb-2">
            <p className="line-clamp-3">{snippet}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 pt-3 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <Phone size={16} />
          <span>Contact Member</span>
        </Button>
        
        <Button asChild size="sm">
          <Link to={`/members/${id}`}>
            View Profile
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
