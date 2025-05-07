
import React from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import MemberCard from '@/components/members/MemberCard';
import { Button } from '@/components/ui/button';
import { MapPin, User } from 'lucide-react';

const CourseMembers = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Mock course data (would be fetched from API)
  const courseData = {
    id: courseId,
    name: 'Pine Valley Golf Club',
    location: 'Pine Valley, NJ',
    description: 'Consistently ranked as one of the top golf courses in the world, Pine Valley offers a challenging yet rewarding experience for golf enthusiasts.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070'
  };
  
  // Mock members data (would be fetched from API)
  const members = [
    {
      id: 1,
      name: 'John Smith',
      handicap: 8.2,
      profileImage: '',
      snippet: 'Passionate golfer with 15 years experience. Always looking to improve my game and meet fellow golf enthusiasts.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      handicap: 12.5,
      profileImage: '',
      snippet: 'Weekend golfer who loves the challenge and social aspect of the game. Happy to connect with other members!'
    },
    {
      id: 3,
      name: 'Michael Wilson',
      handicap: 5.0,
      profileImage: '',
      snippet: 'Former college player now enjoying recreational golf. Happy to offer tips and advice to fellow golfers.'
    },
    {
      id: 4,
      name: 'Jessica Brown',
      handicap: 14.8,
      profileImage: '',
      snippet: 'Relatively new to golf but improving quickly. Looking for playing partners of similar skill levels.'
    },
    {
      id: 5,
      name: 'Robert Davis',
      handicap: 10.3,
      profileImage: '',
      snippet: 'Golf enthusiast who plays at least twice a week. Always looking for new courses and people to play with.'
    },
    {
      id: 6,
      name: 'Emily Wilson',
      handicap: 16.7,
      profileImage: '',
      snippet: 'Casual golfer who enjoys the social aspects of the game. Looking for relaxed, fun rounds with friendly people.'
    }
  ];
  
  return (
    <PageContainer>
      {/* Course Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/4 h-48 rounded-lg overflow-hidden">
              <img 
                src={courseData.image} 
                alt={courseData.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{courseData.name}</h1>
              
              <div className="flex items-center text-gray-500 my-2">
                <MapPin size={16} className="mr-1" />
                <span>{courseData.location}</span>
              </div>
              
              <p className="text-gray-600 mb-4">
                {courseData.description}
              </p>
              
              <Button asChild variant="outline">
                <Link to={`/courses/${courseId}`}>
                  View Course Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Members Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-semibold flex items-center">
                <User className="mr-2" />
                Members at {courseData.name}
              </h2>
              <p className="text-gray-600">Connect with {members.length} golfers who play at this course</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                handicap={member.handicap}
                profileImage={member.profileImage}
                snippet={member.snippet}
              />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More Members</Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default CourseMembers;
