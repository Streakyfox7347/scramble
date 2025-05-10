
import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import MemberCard from '@/components/members/MemberCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const Members = () => {
  // Mock members data
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
      <section className="py-12 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Scramble Members Directory
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Connect with other golfers in our community and find your next playing partners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-scramble-dark-light border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search members by name..."
                    className="pl-10 bg-scramble-dark border-slate-700 text-white"
                  />
                </div>
              </div>
              <Button className="bg-scramble-mint text-scramble-dark hover:bg-scramble-mint/80">
                <Filter className="mr-2 h-4 w-4" />
                Filter Members
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">All Members</h2>
            <p className="text-white/60">Connect with {members.length} golfers in our community</p>
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
            <Button variant="outline" className="border-scramble-mint text-white hover:bg-scramble-mint hover:text-scramble-dark">
              Load More Members
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Members;
