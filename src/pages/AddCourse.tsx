
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  courseName: z.string().min(2, {
    message: 'Course name must be at least 2 characters.',
  }),
  address: z.string().min(5, {
    message: 'Address must be at least 5 characters.',
  }),
  city: z.string().min(2, {
    message: 'City must be at least 2 characters.',
  }),
  state: z.string().min(2, {
    message: 'State/Region must be at least 2 characters.',
  }),
  country: z.string().min(2, {
    message: 'Country must be at least 2 characters.',
  }),
  website: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  description: z.string().optional(),
});

const AddCourse = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      website: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Course submitted!",
      description: "Thank you for adding " + values.courseName + " to our directory.",
    });
    form.reset();
  }

  return (
    <PageContainer>
      <section className="bg-golf-green py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Add a Golf Course
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Help our community grow by adding your favorite golf course to our directory
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Augusta National Golf Club" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://www.augustanational.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="2604 Washington Road" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input placeholder="Augusta" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State/Region *</FormLabel>
                        <FormControl>
                          <Input placeholder="Georgia" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country *</FormLabel>
                        <FormControl>
                          <Input placeholder="United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about this golf course..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Include details like course difficulty, notable holes, or amenities
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <FormLabel className="block mb-2">Course Image (Optional)</FormLabel>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div className="flex flex-col items-center">
                      <svg className="h-8 w-8 text-gray-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="text-center">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          Choose File
                        </Button>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG or JPEG (max 5MB)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-golf-green hover:bg-golf-green-dark"
                  >
                    Submit Course
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default AddCourse;
