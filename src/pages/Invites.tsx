import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import ScrambleInvites from '@/components/invites/ScrambleInvites';

const Invites = () => {
  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Scramble Invites</h1>
            <p className="text-muted-foreground">
              Manage your golf course invitations and connect with members from other courses.
            </p>
          </div>
          
          <ScrambleInvites />
        </div>
      </div>
    </PageContainer>
  );
};

export default Invites;