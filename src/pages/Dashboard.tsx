import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import MemberSidebar from '@/components/profile/MemberSidebar';
import ScrambleInvites from '@/components/invites/ScrambleInvites';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, Users, MessageCircle } from 'lucide-react';

const Dashboard = () => {
  // Mock recent activity data
  const recentActivity = [
    { id: 1, type: 'course-view', name: 'Pine Valley Golf Club', date: '2 days ago' },
    { id: 2, type: 'member-contact', name: 'Sarah Johnson', date: '1 week ago' },
    { id: 3, type: 'score-added', course: 'Augusta National', score: 82, date: '1 week ago' },
    { id: 4, type: 'course-view', name: 'Pebble Beach Golf Links', date: '2 weeks ago' }
  ];

  // Mock recommended courses
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
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-6 text-foreground">My Dashboard</h1>

            {/* Quick Stats Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Rounds Played</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">24</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Current Handicap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">8.2</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Invites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">3</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Recent Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">82</div>
                  <p className="text-xs text-muted-foreground">Pine Valley Golf Club</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Tabs */}
            <Tabs defaultValue="invites" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="invites" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Scramble Invites
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Recent Activity
                </TabsTrigger>
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Recommended
                </TabsTrigger>
              </TabsList>

              <TabsContent value="invites">
                <ScrambleInvites />
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
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
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <MapPin className="h-4 w-4 text-primary" />
                              </div>
                            )}

                            {activity.type === 'member-contact' && (
                              <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <Users className="h-4 w-4 text-blue-600" />
                              </div>
                            )}

                            {activity.type === 'score-added' && (
                              <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                <Calendar className="h-4 w-4 text-green-600" />
                              </div>
                            )}
                          </div>

                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-foreground">
                              {activity.type === 'course-view' && (
                                <>Viewed <span className="text-primary">{activity.name}</span></>
                              )}
                              {activity.type === 'member-contact' && (
                                <>Contacted <span className="text-primary">{activity.name}</span></>
                              )}
                              {activity.type === 'score-added' && (
                                <>Recorded a <span className="text-primary">{activity.score}</span> at <span className="text-primary">{activity.course}</span></>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
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
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
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
                            <h4 className="font-medium text-foreground">{course.name}</h4>
                            <div className="flex items-center text-muted-foreground text-sm">
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
                      <p className="text-sm text-muted-foreground mb-3">
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
