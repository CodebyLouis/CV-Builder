export default function WorkExperience({ data, setData }) {
  function updateExperience(index, newObject) {
    const newArray = data.map((experience, i) =>
      i === index ? newObject : experience
    );
    setData(newArray);
  }

  return (
    <div>
      <h2>Your Work Experience</h2>
      {data.map((experience, index) => (
        <WorkExperienceForm
          key={index}
          index={index}
          data={experience}
          updateExperience={updateExperience}
        />
      ))}
      <button
        onClick={() =>
          setData([
            ...data,
            {
              company: "",
              jobTitle: "",
              startDate: "",
              endDate: "",
              isCurrent: false,
            },
          ])
        }
      >
        Add a new experience
      </button>
    </div>
  );
}

function WorkExperienceForm({ index, data, updateExperience }) {
  return (
    <form>
      <label>
        <span>Company name</span>
        <input
          type="text"
          placeholder="Enter company"
          value={data.company}
          onChange={(e) =>
            updateExperience(index, { ...data, company: e.target.value })
          }
        />
      </label>
      <label>
        <span>Job Title</span>
        <input
          type="text"
          placeholder="Enter job title"
          value={data.jobTitle}
          onChange={(e) =>
            updateExperience(index, { ...data, jobTitle: e.target.value })
          }
        />
      </label>
      <label>
        <span>Starting date</span>
        <input
          type="date"
          value={data.startDate}
          onChange={(e) =>
            updateExperience(index, { ...data, startDate: e.target.value })
          }
        />
      </label>
      <label>
        <span>Ending date</span>
        <input
          type="date"
          value={data.endDate}
          onChange={(e) =>
            updateExperience(index, { ...data, endDate: e.target.value })
          }
        />
        <label id="checkbox-label">
          <input
            type="checkbox"
            value={data.isCurrent}
            onChange={() =>
              updateExperience(index, { ...data, isCurrent: !data.isCurrent })
            }
          />
          <span>Current position </span>
        </label>
      </label>
    </form>
  );
}
