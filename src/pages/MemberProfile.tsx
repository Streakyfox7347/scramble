
import React from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Phone, Calendar } from 'lucide-react';

const MemberProfile = () => {
  const { memberId } = useParams<{ memberId: string }>();
  
  // Mock member data (would be fetched from API)
  const memberData = {
    id: memberId,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    handicap: 8.2,
    homeCourse: 'Pine Valley Golf Club',
    availability: 'Weekends, Wednesday afternoons',
    about: `Passionate golfer with 15 years experience. I started playing golf in college and have been hooked ever since. 
            I enjoy the challenge of the game and am always looking to improve my skills. I'm a member at Pine Valley 
            but enjoy traveling to play new courses whenever I can. I'm looking to connect with fellow golf enthusiasts 
            for regular games and friendly competition.`,
    profileImage: '',
    yearsPlaying: 15,
    favoriteClub: 'Titleist T200 7-iron',
    achievements: [
      'Club Champion 2020',
      'Hole-in-one on Pine Valley #7',
      'Broke 80 for first time in 2018'
    ]
  };
  
  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Summary */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden">
              <div className="bg-golf-green p-6 text-white text-center">
                <Avatar className="h-24 w-24 mx-auto border-2 border-white">
                  {memberData.profileImage ? (
                    <AvatarImage src={memberData.profileImage} alt={memberData.name} />
                  ) : (
                    <AvatarFallback className="bg-white text-golf-green">
                      <User size={32} />
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <h1 className="text-2xl font-bold mt-4">{memberData.name}</h1>
                <div className="mt-2">
                  <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm">
                    Handicap: {memberData.handicap}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Home Course</div>
                    <div className="font-medium">{memberData.homeCourse}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Years Playing</div>
                    <div className="font-medium">{memberData.yearsPlaying} years</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Favorite Club</div>
                    <div className="font-medium">{memberData.favoriteClub}</div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <Button className="w-full bg-golf-green hover:bg-golf-green-dark flex items-center gap-2">
                  <Phone size={16} />
                  <span>Contact {memberData.name.split(' ')[0]}</span>
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Right Column - Details */}
          <div className="md:col-span-2">
            <Card className="mb-8">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {memberData.about}
                </p>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-golf-green mr-2 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium">{memberData.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-golf-green mr-2 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Phone</div>
                        <div className="font-medium">{memberData.phone}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-golf-green mr-2 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Availability</div>
                        <div className="font-medium">{memberData.availability}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                  
                  <ul className="space-y-2">
                    {memberData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-golf-green mr-2"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default MemberProfile;
