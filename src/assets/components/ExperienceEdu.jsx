
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
          <>
            <span htmlFor="">School</span>
            <input name="school" value={info.school} onChange={handleChange}/>
            <span htmlFor="">Titulo</span>
            <input name="title" value= {info.title} onChange={handleChange}/>
            <span htmlFor="">Fecha</span>
            <input  name="date" type="date" date = {info.date} onChange={handleChange}/>
          </>
        ) : (
          <>
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
          </>
        )}
      </section>
    </>
  );
}
