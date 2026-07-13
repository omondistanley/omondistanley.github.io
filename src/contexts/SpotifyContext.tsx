import React, { createContext, useContext, ReactNode } from 'react';

interface SpotifyContextType {
  isPlaying: boolean | null;
}

const SpotifyContext = createContext<SpotifyContextType | undefined>(undefined);

export const useSpotify = (): SpotifyContextType => {
  const context = useContext(SpotifyContext);
  if (context === undefined) {
    throw new Error('useSpotify must be used within a SpotifyProvider');
  }
  return context;
};

interface SpotifyProviderProps {
  children: ReactNode;
}

// Spotify integration disabled for this fork. The provider is kept so the
// component tree (Navbar, Sidebar, Layout) stays identical to the original
// format. To re-enable, restore the polling logic from the upstream repo
// and point it at your own Spotify account.
export const SpotifyProvider: React.FC<SpotifyProviderProps> = ({ children }) => {
  return (
    <SpotifyContext.Provider value={{ isPlaying: false }}>
      {children}
    </SpotifyContext.Provider>
  );
};
