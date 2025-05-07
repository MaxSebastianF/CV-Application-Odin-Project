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
            <input id="company" type="text" name="company" value={info.company} onChange={handleChange} autoComplete="organization"/>
            <label htmlFor="position">position</label>
            <input id="position" type="text" name="position" value={info.position} onChange={handleChange} autoComplete="organization-position"/>
            <label htmlFor="responsibilities">responsabilities</label>
            <input id="responsibilities" type="text" name="responsibilities" value={info.responsibilities} onChange={handleChange} autoComplete="organization-responsability"/>
            <label htmlFor="from">From</label>
            <input id="from" type="date" name="from" value={info.from} onChange={handleChange} autoComplete="off"/>
            <label htmlFor="until">Until</label>
            <input id="until" type="date" name="until" value={info.until} onChange={handleChange} autoComplete="off"/>
          </div>
        ) : (
          <div className="form-group info">
            <p>
              Company: <strong> {info.company}</strong>
            </p>
            <p>
              Position: <strong> {info.position}</strong>
            </p>
            <p>
              Responsibilities: <strong> {info.responsibilities}</strong>
            </p>
            <p>
              Date:{" "}
              <strong>
                {info.from}  -  {info.until}
              </strong>
            </p>
          </div>
        )}
      </section>
    </>
  );
}
