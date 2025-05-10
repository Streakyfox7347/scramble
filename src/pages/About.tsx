
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <PageContainer>
      <section className="py-16 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Scramble</h1>
            <p className="text-xl text-white/80 mb-8">
              Connecting golfers and courses for an enhanced golfing experience
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-scramble-dark-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-white/80 mb-8">
              At Scramble, we believe that golf should be accessible to everyone. Our mission is to create a community of golfers
              that opens doors to other courses and provides discounted green fees through member connections.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-6 mt-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-scramble-dark p-6 rounded-lg">
                <div className="w-12 h-12 bg-scramble-mint text-scramble-dark rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold text-white mb-3">Join the Community</h3>
                <p className="text-white/70">Sign up and become a member of our growing network of golf enthusiasts.</p>
              </div>
              <div className="bg-scramble-dark p-6 rounded-lg">
                <div className="w-12 h-12 bg-scramble-mint text-scramble-dark rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold text-white mb-3">Connect with Courses</h3>
                <p className="text-white/70">Browse our directory of partner golf courses and discover new places to play.</p>
              </div>
              <div className="bg-scramble-dark p-6 rounded-lg">
                <div className="w-12 h-12 bg-scramble-mint text-scramble-dark rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold text-white mb-3">Enjoy the Benefits</h3>
                <p className="text-white/70">Get access to discounted green fees and exclusive offers through our network.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-scramble-mint text-scramble-dark hover:bg-scramble-mint/80">
                <Link to="/signup">Join Scramble Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
