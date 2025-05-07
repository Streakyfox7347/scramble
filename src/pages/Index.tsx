
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import CourseCard from '@/components/courses/CourseCard';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  // Sample featured courses
  const featuredCourses = [
    {
      id: 1,
      name: 'Pine Valley Golf Club',
      location: 'Pine Valley, NJ',
      description: 'Consistently ranked as one of the top golf courses in the world, Pine Valley offers a challenging yet rewarding experience for golf enthusiasts.',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070'
    },
    {
      id: 2,
      name: 'Augusta National',
      location: 'Augusta, GA',
      description: 'Home of the Masters Tournament, this legendary course features immaculately manicured fairways and the famous Amen Corner.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7d58e929eac?q=80&w=2070'
    },
    {
      id: 3,
      name: 'Pebble Beach Golf Links',
      location: 'Pebble Beach, CA',
      description: 'This iconic coastal course offers breathtaking views of the Pacific Ocean along with challenging play for golfers of all skill levels.',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070'
    }
  ];

  return (
    <PageContainer fullWidth darkBackground>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070')] bg-cover bg-center">
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                GOLF MORE, PAY LESS
              </h1>
              <p className="text-xl mb-8 text-scramble-text-muted max-w-lg">
                Scramble creates a community of golfers, opening doors 
                to other courses and discounted green fees through
                member connections
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="scramble-button">
                  JOIN OUR COMMUNITY
                </Button>
                <Button className="scramble-button">
                  REGISTER YOUR INTEREST
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Courses</h2>
              <p className="text-scramble-text-muted mt-2">Discover top-rated golf courses in your area</p>
            </div>
            <Button asChild variant="outline" className="border-scramble-mint text-white hover:bg-scramble-mint hover:text-scramble-dark">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>

          <Separator className="bg-slate-700 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                name={course.name}
                location={course.location}
                description={course.description}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-scramble-dark-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Use Scramble?</h2>
            <p className="text-scramble-text-muted max-w-2xl mx-auto">
              Our platform helps you enhance your golfing experience by connecting you with courses and fellow golfers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-slate-700 bg-scramble-dark text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-scramble-mint rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scramble-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Discover Courses</h3>
              <p className="text-scramble-text-muted">
                Find and explore new golf courses in your area or anywhere you plan to travel
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-700 bg-scramble-dark text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-scramble-mint rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scramble-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Connect with Golfers</h3>
              <p className="text-scramble-text-muted">
                Meet and connect with fellow golf enthusiasts who share your passion for the game
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-700 bg-scramble-dark text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-scramble-mint rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scramble-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Track Progress</h3>
              <p className="text-scramble-text-muted">
                Keep track of your golf scores, handicap, and improvement over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-scramble-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to improve your golf experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-scramble-text-muted">
            Join our community of golf enthusiasts and take your game to the next level.
          </p>
          <Button className="scramble-button-filled">
            JOIN OUR COMMUNITY
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default Index;
