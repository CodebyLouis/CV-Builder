import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import CVPreview from "./components/CVPreview";
import { useState } from "react";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skill from "./components/Skill";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);

  return (
    <main>
      <h1>CV Builder</h1>
      <p>Let's start building!</p>
      <div className="main-content">
        <div className="builder">
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
          <WorkExperience data={workExperience} setData={setWorkExperience} />
          <Education data={education} setData={setEducation} />
          <Skill data={skill} setData={setSkill} />
        </div>
        <div className="cv-viewer">
          <CVPreview
            generalInfo={generalInfo}
            workExperience={workExperience}
            education={education}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
