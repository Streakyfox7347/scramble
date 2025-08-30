import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle,
  User
} from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      id: '1',
      memberName: 'Mike Chen',
      memberAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      lastMessage: 'Thanks for the invite to Pebble Beach! Looking forward to it.',
      time: '2 hours ago',
      unread: 2,
      online: true
    },
    {
      id: '2', 
      memberName: 'Sarah Johnson',
      memberAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      lastMessage: 'What time works best for you on Thursday?',
      time: '1 day ago',
      unread: 0,
      online: false
    },
    {
      id: '3',
      memberName: 'Tom Wilson', 
      lastMessage: 'Sorry, I have to reschedule our round at Whistling Straits.',
      time: '3 days ago',
      unread: 1,
      online: false
    }
  ];

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Messages</h1>
            <p className="text-muted-foreground">
              Communicate with other members about upcoming rounds and invitations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Conversations
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {conversations.map((conversation, index) => (
                      <div key={conversation.id}>
                        <div className="p-4 hover:bg-muted/50 cursor-pointer transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar className="h-12 w-12">
                                {conversation.memberAvatar ? (
                                  <AvatarImage src={conversation.memberAvatar} alt={conversation.memberName} />
                                ) : (
                                  <AvatarFallback>
                                    <User className="h-6 w-6" />
                                  </AvatarFallback>
                                )}
                              </Avatar>
                              {conversation.online && (
                                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-sm truncate">{conversation.memberName}</h4>
                                {conversation.unread > 0 && (
                                  <Badge variant="default" className="text-xs">
                                    {conversation.unread}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                              <p className="text-xs text-muted-foreground mt-1">{conversation.time}</p>
                            </div>
                          </div>
                        </div>
                        {index < conversations.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Thread */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" alt="Mike Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Mike Chen</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        Online
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Sample Messages */}
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Hi! I saw your invite to Pebble Beach. I'd love to join you!</p>
                        <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Great! How's Thursday at 10 AM for you? The weather looks perfect.</p>
                        <p className="text-xs opacity-75 mt-1">10:32 AM</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Perfect! Thanks for the invite. Looking forward to it.</p>
                        <p className="text-xs text-muted-foreground mt-1">11:15 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                    <Button size="sm" className="px-4">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    New Message
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Mark All Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Messages;