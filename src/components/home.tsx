import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import FeaturedSummaries from "./home/FeaturedSummaries";
import MarketplacePreview from "./home/MarketplacePreview";
import ReadingGroupsSection from "./home/ReadingGroupsSection";
import Footer from "./layout/Footer";

const Home = () => {
  // Mock user state - in a real app, this would come from authentication context
  const [user, setUser] = React.useState({
    name: "کاربر مهمان",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
    isAuthenticated: false,
    isPremium: false,
  });

  // Mock search handler
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // In a real app, this would navigate to search results page with the query
  };

  // Mock handlers for hero section buttons
  const handleExplore = () => {
    console.log("Explore books clicked");
    // In a real app, this would navigate to the books exploration page
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
    // In a real app, this would navigate to the registration page
  };

  // Mock handler for marketplace view all button
  const handleViewAllMarketplace = () => {
    console.log("View all marketplace listings clicked");
    // In a real app, this would navigate to the marketplace page
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar user={user} onSearch={handleSearch} />

      {/* Hero Section */}
      <HeroSection onExplore={handleExplore} onSignUp={handleSignUp} />

      {/* Featured Summaries */}
      <FeaturedSummaries />

      {/* Marketplace Preview */}
      <MarketplacePreview onViewAllClick={handleViewAllMarketplace} />

      {/* Reading Groups */}
      <ReadingGroupsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
