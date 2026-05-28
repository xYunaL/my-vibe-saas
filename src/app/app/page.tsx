"use client";

import { useEffect, useState } from "react";
import { AppHeader, type TabId } from "@/components/layout/AppHeader";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";
import { ChatRoom } from "@/features/chat/ChatRoom";
import { MemeFeed } from "@/features/memes/MemeFeed";
import { F1101Guide } from "@/features/f1guide/F1101Guide";
import { PitWallPage } from "@/features/pitwall/PitWallPage";
import { defaultGarageTeamId } from "@/lib/teams";
import { getUserProfile, saveUserProfile } from "@/lib/storage";
import type { UserProfile } from "@/lib/types";

export default function AppPage() {
  const [activeTab, setActiveTab] = useState<TabId>("main-straight");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);
  const [garageTeamId, setGarageTeamId] = useState<string>(() =>
    defaultGarageTeamId(null)
  );

  // Load saved profile on first mount; open onboarding if none exists.
  // localStorage is client-only, so this must run in an effect (a lazy
  // useState initializer would mismatch during server prerender).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const saved = getUserProfile();
    if (saved) {
      setProfile(saved);
      setGarageTeamId(defaultGarageTeamId(saved));
    } else {
      setOnboardingOpen(true);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function handleComplete(next: UserProfile) {
    saveUserProfile(next);
    setProfile(next);
    setGarageTeamId(defaultGarageTeamId(next));
    setOnboardingOpen(false);
    setEditingProfile(false);
    if (!editingProfile) setActiveTab("main-straight");
  }

  function openProfileEdit() {
    setEditingProfile(true);
    setOnboardingOpen(true);
  }

  return (
    <div className="carbon-grid flex flex-1 flex-col">
      <AppHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        profile={profile}
        onProfileClick={openProfileEdit}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
        {activeTab === "main-straight" && (
          <ChatRoom roomType="global" profile={profile} />
        )}
        {activeTab === "garage" && (
          <ChatRoom
            roomType="team"
            profile={profile}
            activeTeamId={garageTeamId}
            onTeamChange={setGarageTeamId}
          />
        )}
        {activeTab === "meme" && <MemeFeed profile={profile} />}
        {activeTab === "f1-101" && <F1101Guide />}
        {activeTab === "pit-wall" && <PitWallPage />}
      </main>

      {onboardingOpen && (
        <OnboardingModal
          initialProfile={editingProfile ? profile : null}
          onClose={() => {
            setOnboardingOpen(false);
            setEditingProfile(false);
          }}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}
