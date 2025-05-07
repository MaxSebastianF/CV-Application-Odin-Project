import { useState } from "react";
import { PersonalInfo } from "./assets/components/PersonalInfo";
import { ExperienceEdu } from "./assets/components/ExperienceEdu";
import { ExperienceJob } from "./assets/components/ExperienceJob";

export default function App() {
  const [editMode, setEditMode] = useState(true);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  function handleToggleEdit() {
    setEditMode(!editMode);
  }

  return (
    <>
      <h1>Formulario de CV</h1>
      <form className="form">
        <PersonalInfo
          editMode={editMode}
          info={personalInfo}
          onChange={setPersonalInfo}
        />
        <ExperienceEdu
          editMode={editMode}
          info={education}
          onChange={setEducation}
        />
        <ExperienceJob
          editMode={editMode}
          info={experience}
          onChange={setExperience}
        />
        <button type="button" onClick={handleToggleEdit}>
          {editMode ? "Submit" : "Edit"}
        </button>
      </form>
    </>
  );
}
