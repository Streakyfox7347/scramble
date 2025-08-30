import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Send, 
  Check, 
  X,
  MessageCircle,
  Star
} from 'lucide-react';

interface Invite {
  id: string;
  type: 'sent' | 'received';
  memberName: string;
  memberAvatar?: string;
  courseName: string;
  date: string;
  time: string;
  status: 'pending' | 'accepted' | 'declined';
  message?: string;
  memberHandicap: number;
  greenFee: number;
  guestFee: number;
}

const ScrambleInvites = () => {
  // Mock data for invites
  const invites: Invite[] = [
    {
      id: '1',
      type: 'received',
      memberName: 'Mike Chen',
      memberAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      courseName: 'Pebble Beach Golf Links',
      date: '2024-09-05',
      time: '10:00 AM',
      status: 'pending',
      message: 'Would love to have you as my guest at Pebble Beach! Great weather forecast for Thursday.',
      memberHandicap: 6.2,
      greenFee: 650,
      guestFee: 325
    },
    {
      id: '2',
      type: 'sent',
      memberName: 'Sarah Johnson',
      memberAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      courseName: 'Augusta National Golf Club',
      date: '2024-09-12',
      time: '2:30 PM',
      status: 'accepted',
      message: 'Excited to play Augusta with you!',
      memberHandicap: 8.4,
      greenFee: 0,
      guestFee: 0
    },
    {
      id: '3',
      type: 'received',
      memberName: 'Tom Wilson',
      courseName: 'Whistling Straits',
      date: '2024-08-28',
      time: '11:15 AM',
      status: 'declined',
      memberHandicap: 12.1,
      greenFee: 450,
      guestFee: 225
    }
  ];

  const pendingReceived = invites.filter(i => i.type === 'received' && i.status === 'pending');
  const pendingSent = invites.filter(i => i.type === 'sent' && i.status === 'pending');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-orange-600 border-orange-600">Pending</Badge>;
      case 'accepted':
        return <Badge variant="default" className="bg-green-600 text-white">Accepted</Badge>;
      case 'declined':
        return <Badge variant="destructive">Declined</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Send className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Sent</p>
                <p className="text-2xl font-bold">{pendingSent.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Received</p>
                <p className="text-2xl font-bold">{pendingReceived.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Star className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="flex items-center gap-2">
          <Send className="h-4 w-4" />
          Send Invite
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Find Members
        </Button>
      </div>

      {/* Recent & Pending Invites */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Recent Invites
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invites.map((invite) => (
              <div key={invite.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      {invite.memberAvatar ? (
                        <AvatarImage src={invite.memberAvatar} alt={invite.memberName} />
                      ) : (
                        <AvatarFallback>{invite.memberName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{invite.memberName}</h4>
                        <Badge variant="secondary" className="text-xs">
                          HCP {invite.memberHandicap}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {invite.type === 'sent' ? 'You invited' : 'Invited you to'} {invite.courseName}
                      </p>
                    </div>
                  </div>
                  {getStatusBadge(invite.status)}
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(invite.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {invite.time}
                  </div>
                  {invite.greenFee > 0 && (
                    <div className="flex items-center gap-1">
                      <span>Guest Fee: ${invite.guestFee}</span>
                      <span className="text-xs text-muted-foreground">(${invite.greenFee} regular)</span>
                    </div>
                  )}
                </div>

                {invite.message && (
                  <div className="bg-muted/50 rounded p-3">
                    <p className="text-sm italic">"{invite.message}"</p>
                  </div>
                )}

                {invite.type === 'received' && invite.status === 'pending' && (
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <X className="h-4 w-4" />
                      Decline
                    </Button>
                    <Button size="sm" variant="ghost" className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      Message
                    </Button>
                  </div>
                )}

                {invite.type === 'sent' && invite.status === 'pending' && (
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      Send Message
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive">
                      Cancel Invite
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Separator className="my-6" />
          
          <Button variant="outline" className="w-full">
            View All Invites
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScrambleInvites;