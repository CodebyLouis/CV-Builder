export default function Education(data, setData) {
  return (
    <div>
      <h2>Your Schools:</h2>
      <EducationForm />
      <button>Add an experience</button>
    </div>
  );
}

function EducationForm(data, setdata) {
  return (
    <form>
      <label>
        <span>Degree</span>
        <input type="text" placeholder="Name of your degree" />
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
  );
}
