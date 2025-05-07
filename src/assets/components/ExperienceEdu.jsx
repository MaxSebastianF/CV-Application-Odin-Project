
export function ExperienceEdu({ editMode, info, onChange }) {
  function handleChange(e){
    const {name,value} = e.target;
    onChange({...info, [name]:value});
  }
    return (
    <>
      <section>
        <h2>Educational Experience</h2>
        {editMode ? (
          <div className="form-group">
            <label htmlFor="school">School</label>
            <input id="school" name="school" value={info.school} onChange={handleChange} autoComplete="school"/>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value= {info.title} onChange={handleChange} autoComplete="school-title"/>
            <label htmlFor="dateEducational">Date</label>
            <input  id="dateEducational" name="date" type="date" date = {info.date} onChange={handleChange} autoComplete="off"/>
          </div>
        ) : (
          <div className="form-group info">
            
            <p>School: 
              <strong>{info.school}</strong>
            </p>
            <p>Title: 
              <strong>{info.title}</strong>
            </p>
            <p>Date: 
              <strong>{info.date}</strong>
            </p>
          </div>
        )}
      </section>
    </>
  );
}
