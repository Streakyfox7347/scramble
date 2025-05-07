import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/layout/PageContainer';
import CourseCard from '@/components/courses/CourseCard';
import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  // Sample courses data
  const courses = [
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
    },
    {
      id: 4,
      name: 'Torrey Pines Golf Course',
      location: 'La Jolla, CA',
      description: 'Home to the famous Farmers Insurance Open, Torrey Pines offers stunning views of the Pacific Ocean and challenging holes for all skill levels.',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070'
    },
    {
      id: 5,
      name: 'Whistling Straits',
      location: 'Kohler, WI',
      description: 'Host of multiple PGA Championships and the 2021 Ryder Cup, this links-style course features beautiful views of Lake Michigan.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7d58e929eac?q=80&w=2070'
    },
    {
      id: 6,
      name: 'Bethpage Black',
      location: 'Farmingdale, NY',
      description: 'This difficult public course has hosted multiple major championships and features a famous warning sign about its difficulty.',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070'
    }
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="bg-golf-green py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Golf Courses
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our comprehensive directory of golf courses and find your next favorite place to play.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search courses by name..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="City, state or zip code..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-golf-green hover:bg-golf-green-dark shrink-0">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">All Courses</h2>
            <p className="text-gray-600">Found {courses.length} courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
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

          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More Courses</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-golf-sand bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see your favorite course?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Help our community grow by adding missing golf courses to our directory.
          </p>
          <Button asChild className="bg-golf-green hover:bg-golf-green-dark">
            <Link to="/add-course">Add a Course</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default Courses;
