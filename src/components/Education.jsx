import { FaTrash, FaPlus } from "react-icons/fa";

export default function Education({ data, setData }) {
  function updateEducation(index, newObject) {
    const newArray = data.map((education, i) =>
      i === index ? newObject : education
    );
    setData(newArray);
  }

  function deleteEducation(index) {
    const newArray = data.filter((item, i) => i !== index);
    setData(newArray);
  }

  return (
    <div>
      <h2>Your Schools</h2>
      {data.map((education, index) => (
        <EducationForm
          key={index}
          index={index}
          data={education}
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
        />
      ))}
      <button
        onClick={() =>
          setData([
            ...data,
            {
              degree: "",
              school: "",
              localisation: "",
              startDate: "",
              endDate: "",
            },
          ])
        }
      >
        Add an experience
      </button>
    </div>
  );
}

function EducationForm({ index, data, updateEducation, deleteEducation }) {
  return (
    <div>
      <button className="delete-btn" onClick={() => deleteEducation(index)}>
        <FaTrash />
      </button>
      <form>
        <label>
          <span>Degree</span>
          <input
            type="text"
            placeholder="Name of your degree"
            value={data.degree}
            onChange={(e) =>
              updateEducation(index, { ...data, degree: e.target.value })
            }
          />
        </label>
        <label>
          <span>School</span>
          <input type="text" placeholder="Name of your school" />
        </label>
        <label>
          <span>Localisation</span>
          <input type="text" placeholder="City, Country" />
        </label>
        <label>
          <span>Start Date</span>
          <input type="date" />
        </label>
        <label>
          <span>End Date</span>
          <input type="date" />
        </label>
      </form>
    </div>
  );
}
