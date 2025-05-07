export function PersonalInfo({ editMode, info, onChange }) {
    function handleChange(e) {
      const { name, value } = e.target;
      onChange({ ...info, [name]: value });
    }
  
    return (
      <section>
        <h2>Personal Info</h2>
        {editMode ? (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={info.name} onChange={handleChange} autoComplete="name"/>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={info.email} onChange={handleChange} autoComplete="email"/>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={info.phone} onChange={handleChange} autoComplete="phone"/>
          </div>
        ) : (
          <div className="form-group info">
            <p><strong>Name:</strong> {info.name}</p>
            <p><strong>Email:</strong> {info.email}</p>
            <p><strong>Phone:</strong> {info.phone}</p>
          </div>
        )}
      </section>
    );
  }
  