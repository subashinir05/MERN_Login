import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  return (
    <div>
      <h1>Welcome, {location.state.id}!</h1>
      <p>Thank you for signing in.</p>
    </div>
  );
}

export default Home;
