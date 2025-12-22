export default function CVPreview({ generalInfo, workExperience }) {
  return (
    <div>
      <p>{generalInfo.fullName}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.address}</p>
      <p>{workExperience.company}</p>
      <div>
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
    </div>
  );
}
