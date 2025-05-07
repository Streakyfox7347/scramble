
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string | number;
  name: string;
  location: string;
  image?: string;
  description: string;
}

const CourseCard = ({ id, name, location, image, description }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image || "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070"}
            alt={name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold text-xl">{name}</h3>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-gray-600 line-clamp-2 text-sm">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 pt-3 flex justify-between items-center">
        <Button asChild variant="outline" size="sm">
          <Link to={`/courses/${id}/members`}>
            View Members
          </Link>
        </Button>
        
        <Button asChild size="sm">
          <Link to={`/courses/${id}`}>
            Course Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
