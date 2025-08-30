import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { User, Edit, FileText, Save, X } from 'lucide-react';

interface MemberSidebarProps {
  name?: string;
  handicap?: number;
  profileImage?: string;
}

const MemberSidebar = ({
  name = 'John Doe',
  handicap = 12.5,
  profileImage,
}: MemberSidebarProps) => {
  const [isEditingHandicap, setIsEditingHandicap] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [currentHandicap, setCurrentHandicap] = useState(handicap);
  const [currentName, setCurrentName] = useState(name);
  const [currentProfileImage, setCurrentProfileImage] = useState(profileImage);
  
  // Quick stats state
  const [homeCourse, setHomeCourse] = useState('Pine Valley');
  const [rounds, setRounds] = useState(24);
  const [bestScore, setBestScore] = useState(78);
  const memberSince = '2023'; // Non-editable, based on join date

  const handleSaveHandicap = () => {
    setIsEditingHandicap(false);
    // Add your save logic here
  };

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    // Add your save logic here
  };

  const handleSaveDetails = () => {
    setIsEditingDetails(false);
    // Add your save logic here
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Card className="w-full bg-white shadow-md">
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="h-24 w-24 border-2 border-primary">
            {currentProfileImage ? (
              <AvatarImage src={currentProfileImage} alt={currentName} />
            ) : (
              <AvatarFallback className="bg-primary/20 text-primary">
                <User size={32} />
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="mt-4 text-center">
            {isEditingDetails ? (
              <div className="space-y-2">
                <Input
                  value={currentName}
                  onChange={(e) => setCurrentName(e.target.value)}
                  className="text-center"
                />
                <Button size="sm" onClick={handleSaveDetails} className="mr-2">
                  <Save size={16} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => setIsEditingDetails(false)}>
                  <X size={16} />
                </Button>
              </div>
            ) : (
              <h3 className="font-semibold text-lg text-primary">{currentName}</h3>
            )}
            
            <div className="flex items-center justify-center mt-1 text-muted-foreground">
              <span className="font-medium">Handicap:</span>
              {isEditingHandicap ? (
                <div className="ml-2 flex items-center gap-2">
                  <Input
                    type="number"
                    value={currentHandicap}
                    onChange={(e) => setCurrentHandicap(Number(e.target.value))}
                    className="w-20 h-8"
                    step="0.1"
                  />
                  <Button size="sm" onClick={handleSaveHandicap}>
                    <Save size={14} />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setIsEditingHandicap(false)}>
                    <X size={14} />
                  </Button>
                </div>
              ) : (
                <span className="ml-2 text-primary font-medium">{currentHandicap}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {isEditingProfile ? (
            <div className="space-y-2">
              <Label htmlFor="profile-upload">Upload New Profile Picture</Label>
              <Input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleSaveProfile}>
                  <Save size={16} className="mr-2" />
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={() => setIsEditingProfile(false)}>
                  <X size={16} className="mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full flex items-center justify-start gap-2"
              onClick={() => setIsEditingProfile(true)}
            >
              <Edit size={16} />
              <span>Edit Profile Picture</span>
            </Button>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-start gap-2"
            onClick={() => setIsEditingHandicap(true)}
          >
            <Edit size={16} />
            <span>Edit Handicap</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-start gap-2"
            onClick={() => setIsEditingDetails(true)}
          >
            <FileText size={16} />
            <span>View/Edit All Details</span>
          </Button>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-card border-t border-border">
        <h4 className="font-semibold text-base text-foreground mb-3">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-foreground font-medium block mb-1">Home Course:</span>
            {isEditingDetails ? (
              <Input
                value={homeCourse}
                onChange={(e) => setHomeCourse(e.target.value)}
                className="mt-1 h-8"
              />
            ) : (
              <p className="font-semibold text-primary text-base">{homeCourse}</p>
            )}
          </div>
          <div>
            <span className="text-foreground font-medium block mb-1">Rounds:</span>
            {isEditingDetails ? (
              <Input
                type="number"
                value={rounds}
                onChange={(e) => setRounds(Number(e.target.value))}
                className="mt-1 h-8"
              />
            ) : (
              <p className="font-semibold text-primary text-base">{rounds}</p>
            )}
          </div>
          <div>
            <span className="text-foreground font-medium block mb-1">Best Score:</span>
            {isEditingDetails ? (
              <Input
                type="number"
                value={bestScore}
                onChange={(e) => setBestScore(Number(e.target.value))}
                className="mt-1 h-8"
              />
            ) : (
              <p className="font-semibold text-primary text-base">{bestScore}</p>
            )}
          </div>
          <div>
            <span className="text-foreground font-medium block mb-1">Member Since:</span>
            <p className="font-semibold text-primary text-base">{memberSince}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MemberSidebar;
