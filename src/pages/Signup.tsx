
import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Signup = () => {
  return (
    <PageContainer>
      <section className="py-12 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-scramble-dark-light border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">Join Scramble</CardTitle>
                <CardDescription className="text-white/70">
                  Create your account and start connecting with courses and fellow golfers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-white">
                        First Name
                      </label>
                      <Input 
                        id="first-name" 
                        placeholder="John" 
                        className="bg-scramble-dark border-slate-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-white">
                        Last Name
                      </label>
                      <Input 
                        id="last-name" 
                        placeholder="Doe" 
                        className="bg-scramble-dark border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      className="bg-scramble-dark border-slate-700 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-white">
                      Password
                    </label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-scramble-dark border-slate-700 text-white"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80"
                    >
                      I agree to the{" "}
                      <Link to="/terms" className="text-scramble-mint hover:underline">
                        terms of service
                      </Link>
                      {" "}and{" "}
                      <Link to="/privacy" className="text-scramble-mint hover:underline">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button className="w-full bg-scramble-mint text-scramble-dark hover:bg-scramble-mint/80">
                    Create Account
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm text-white/70">
                  Already have an account?{" "}
                  <Link to="/login" className="text-scramble-mint hover:underline">
                    Log in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Signup;
