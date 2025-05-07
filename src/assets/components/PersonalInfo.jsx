export function PersonalInfo({ editMode, info, onChange }) {
    function handleChange(e) {
      const { name, value } = e.target;
      onChange({ ...info, [name]: value });
    }
  
    return (
      <section>
        <h2>Personal Info</h2>
        {editMode ? (
          <>
            <label>Name</label>
            <input name="name" value={info.name} onChange={handleChange} />
            <label>Email</label>
            <input name="email" value={info.email} onChange={handleChange} />
            <label>Phone</label>
            <input name="phone" value={info.phone} onChange={handleChange} />
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {info.name}</p>
            <p><strong>Email:</strong> {info.email}</p>
            <p><strong>Phone:</strong> {info.phone}</p>
          </>
        )}
      </section>
    );
  }
  