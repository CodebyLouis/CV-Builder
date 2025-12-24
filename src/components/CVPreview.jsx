export default function CVPreview({ generalInfo, workExperience, education }) {
  return (
    <div>
      <p>{generalInfo.fullName}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.address}</p>
      <p>{workExperience.company}</p>
      <div className="work-experience">
        <h3>Work Experience</h3>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <p>{exp.company}</p>
            <p>{exp.jobTitle}</p>
            <p>
              {exp.startDate} - {exp.isCurrent ? "Current" : exp.endDate}
            </p>
          </div>
        ))}
      </div>
      <div className="education">
        <h3>Education</h3>
        {education.map((educ, index) => (
          <div key={index}>
            <p>{educ.degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
