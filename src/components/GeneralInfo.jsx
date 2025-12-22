export default function GeneralInfo({ data, setData }) {
  return (
    <div className="general-info">
      <h2>Your general informations</h2>
      <form className="form">
        <label>
          <span>Full Name</span>
          <input
            type="text"
            id="fullname"
            placeholder="Your full name"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </label>
        <label>
          <span>Phone Number</span>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </label>
        <label>
          <span>Address</span>
          <input
            type="text"
            id="address"
            placeholder="Your adress"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </label>
      </form>
    </div>
  );
}
