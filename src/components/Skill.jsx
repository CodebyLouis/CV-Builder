import { FaTrash, FaPlus } from "react-icons/fa";

export default function Skill({ data, setData }) {
  function updateSkill(index, newObject) {
    const newArray = data.map((skill, i) => (i === index ? newObject : skill));
    setData(newArray);
  }

  function deleteSkill(index) {
    const newArray = data.filter((item, i) => i !== index);
    setData(newArray);
  }

  return (
    <div>
      <h2>Your Skills</h2>
      {data.map((skill, index) => (
        <SkillForm
          key={index}
          index={index}
          data={skill}
          updateSkill={updateSkill}
          deleteSkill={deleteSkill}
        />
      ))}
      <button onClick={() => setData([...data, { skill: "" }])}>
        <FaPlus /> Add a new Skill
      </button>
    </div>
  );
}

function SkillForm({ index, data, updateSkill, deleteSkill }) {
  return (
    <div>
      <form id="form-skill">
        <label>
          <span>Skill name</span>
          <input
            placeholder="Skill Name"
            onChange={(e) =>
              updateSkill(index, { ...data, skill: e.target.value })
            }
          ></input>
        </label>
        <div className="input-wrapper">textD</div>
      </form>
      <button className="delete-btn" onClick={() => deleteSkill(index)}>
        <FaTrash />
      </button>
    </div>
  );
}
