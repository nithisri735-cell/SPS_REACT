import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="app">
      <Header />

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          practiceCount={practiceCount}
        />
      )}

      <button onClick={() => setPracticeCount(practiceCount + 1)}>
        Complete Practice
      </button>

      <button onClick={() => setPracticeCount(0)}>
        Reset
      </button>

      <Footer />
    </div>
  );
}

export default App;