
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
            <label htmlFor="">School</label>
            <input name="school" value={info.school} onChange={handleChange}/>
            <label htmlFor="">Title</label>
            <input name="title" value= {info.title} onChange={handleChange}/>
            <label htmlFor="">Date</label>
            <input  name="date" type="date" date = {info.date} onChange={handleChange}/>
          </div>
        ) : (
          <div className="form-group info">
            {" "}
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
