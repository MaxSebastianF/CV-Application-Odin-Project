export function ExperienceJob({ editMode, info, onChange }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onChange({ ...info, [name]: value });
  }

  return (
    <>
      <section>
        <h2>Job Experience</h2>
        {editMode ? (
          <div className="form-group">
            <label htmlFor="company">Company name</label>
            <input type="text" />
            <label htmlFor="position">position</label>
            <input type="text" />
            <label htmlFor="responsability">responsabilities</label>
            <input type="text" />
            <label htmlFor="date">Date</label>
            <input type="date" />
          </div>
        ) : (
          <div className="form-group info">
            <p>
              Company: <strong>{info.company}</strong>
            </p>
            <p>
              Position: <strong>{info.position}</strong>
            </p>
            <p>
              Responsibilities: <strong>{info.responsibilities}</strong>
            </p>
            <p>
              Date:{" "}
              <strong>
                {info.from} - {info.until}
              </strong>
            </p>
          </div>
        )}
      </section>
    </>
  );
}
