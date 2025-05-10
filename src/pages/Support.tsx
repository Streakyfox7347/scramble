
import React from 'react';
import { useForm } from "react-hook-form";
import PageContainer from '@/components/layout/PageContainer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Mail, HelpCircle } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Support = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => {
    console.log('Support form submitted:', data);
    
    // In a real app, you'd send this data to your backend
    toast({
      title: "Support request sent",
      description: "Thanks for reaching out! We'll get back to you soon.",
      duration: 5000,
    });
    
    reset();
  };

  return (
    <PageContainer>
      <section className="py-16 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support Center</h1>
            <p className="text-xl text-white/80 mb-8">
              Need help with something? We're here to assist you.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-scramble-dark-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="mr-2" /> 
                Common Resources
              </h2>
              
              <div className="space-y-6 text-white/80">
                <div className="p-6 border border-slate-700 rounded-lg hover:border-scramble-mint transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Browse our FAQ
                  </h3>
                  <p className="mb-4">
                    Find answers to commonly asked questions about Scramble membership and features.
                  </p>
                  <Button asChild variant="outline" className="border-scramble-mint text-white hover:bg-scramble-mint hover:text-scramble-dark">
                    <a href="/faq">Visit FAQ</a>
                  </Button>
                </div>
                
                <div className="p-6 border border-slate-700 rounded-lg hover:border-scramble-mint transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Member Resources
                  </h3>
                  <p className="mb-4">
                    Access guides, tutorials, and resources to make the most of your Scramble membership.
                  </p>
                  <Button asChild variant="outline" className="border-scramble-mint text-white hover:bg-scramble-mint hover:text-scramble-dark">
                    <a href="/members">Members Area</a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="mr-2" /> 
                Contact Support
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name"
                    placeholder="Your name" 
                    className="bg-scramble-dark border-slate-700 text-white"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email"
                    placeholder="your.email@example.com" 
                    className="bg-scramble-dark border-slate-700 text-white"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input 
                    id="subject"
                    placeholder="What is your question about?" 
                    className="bg-scramble-dark border-slate-700 text-white"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Please describe your issue in detail..." 
                    className="bg-scramble-dark border-slate-700 text-white min-h-[120px]"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button type="submit" className="bg-scramble-mint text-scramble-dark hover:bg-scramble-mint/80 w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Support;
