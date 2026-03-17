import { useState } from "react";
import Profile from './components/Profile';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && <Profile />}
      {/* {showProfile ? <Profile /> : null} */}

    </div>
  );
}

export default App;
