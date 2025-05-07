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
            <input name="name" value={info.name} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input name="email" value={info.email} onChange={handleChange} />
            <label htmlFor="phone">Phone</label>
            <input name="phone" value={info.phone} onChange={handleChange} />
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
  