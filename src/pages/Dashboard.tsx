import React, { useRef } from 'react'; // Added useRef for file input
import { Link } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import MemberSidebar from '@/components/profile/MemberSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin } from 'lucide-react';

const Dashboard = () => {
  // 1. Create a reference to the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 2. Function to handle the button click
  // This will programmatically "click" the hidden file input
  const handleEditProfilePictureClick = () => {
    fileInputRef.current?.click();
  };

  // 3. Function to handle when a file is selected by the user
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]; // Get the first file if one was selected
    if (selectedFile) {
      console.log('Selected file for profile picture:', selectedFile.name);
      // At this point, you have the file object.
      // Next steps (not included here, but what you'd do later):
      // - Display a preview of the image on the page.
      // - Send this 'selectedFile' to your Odoo backend using an API call.
    }
  };

  // Mock recent activity data (existing code)
  const recentActivity = [
    { id: 1, type: 'course-view', name: 'Pine Valley Golf Club', date: '2 days ago' },
    { id: 2, type: 'member-contact', name: 'Sarah Johnson', date: '1 week ago' },
    { id: 3, type: 'score-added', course: 'Augusta National', score: 82, date: '1 week ago' },
    { id: 4, type: 'course-view', name: 'Pebble Beach Golf Links', date: '2 weeks ago' }
  ];

  // Mock recommended courses (existing code)
  const recommendedCourses = [
    {
      id: 1,
      name: 'Whistling Straits',
      location: 'Kohler, WI',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070'
    },
    {
      id: 2,
      name: 'Bethpage Black',
      location: 'Farmingdale, NY',
      image: 'https://images.unsplash.com/photo-1535131749006-b7d58e929eac?q=80&w=2070'
    }
  ];

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <MemberSidebar />
            {/* START OF NEW CODE: Add the button and hidden input */}
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={handleEditProfilePictureClick} // Call our function when this button is clicked
                className="w-full"
              >
                Edit Profile Picture
              </Button>
              <input
                type="file" // This makes it a file input
                accept="image/*" // Restrict to image files only
                ref={fileInputRef} // Attach our ref to this input
                onChange={handleFileChange} // Call our function when a file is chosen
                style={{ display: 'none' }} // Hide this input, as we're clicking it programmatically
              />
            </div>
            {/* END OF NEW CODE */}
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Stats Cards */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Rounds Played</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Current Handicap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8.2</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Recent Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">82</div>
                  <p className="text-xs text-gray-500">Pine Valley Golf Club</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start">
                        <div>
                          {activity.type === 'course-view' && (
                            <div className="h-8 w-8 rounded-full bg-golf-sand flex items-center justify-center">
                              <MapPin className="h-4 w-4 text-golf-green" />
                            </div>
                          )}

                          {activity.type === 'member-contact' && (
                            <div className="h-8 w-8 rounded-full bg-golf-sky flex items-center justify-center">
                              <svg className="h-4 w-4 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                          )}

                          {activity.type === 'score-added' && (
                            <div className="h-8 w-8 rounded-full bg-golf-green/20 flex items-center justify-center">
                              <svg className="h-4 w-4 text-golf-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                          )}
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium">
                            {activity.type === 'course-view' && (
                              <>Viewed <span className="text-golf-green">{activity.name}</span></>
                            )}
                            {activity.type === 'member-contact' && (
                              <>Contacted <span className="text-golf-green">{activity.name}</span></>
                            )}
                            {activity.type === 'score-added' && (
                              <>Recorded a <span className="text-golf-green">{activity.score}</span> at <span className="text-golf-green">{activity.course}</span></>
                            )}
                          </p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Courses */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendedCourses.map((course) => (
                      <div key={course.id} className="flex items-center">
                        <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={course.image}
                            alt={course.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1">
                          <h4 className="font-medium">{course.name}</h4>
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin size={14} className="mr-1" />
                            <span>{course.location}</span>
                          </div>
                        </div>

                        <Button asChild variant="outline" size="sm">
                          <Link to={`/courses/${course.id}`}>
                            View
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">
                      Looking for more golf courses to explore?
                    </p>
                    <Button asChild>
                      <Link to="/courses">
                        Browse All Courses
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
