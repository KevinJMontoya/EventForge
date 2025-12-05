
export default function OrganizerRegistration() {
    return (
        <div className="card" style={{color: "black", fontSize: 22, maxWidth: 480, margin: "48px auto", padding: 24, border: "1px solid #0a0a0aff", borderRadius: 8 }}>
            <h2>We need a little more information...</h2>
            <form className="organizer-registration-form" /*onSubmit={newUser()}*/ aria-label="registration form">
                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="organization-name" style={{textAlign : 'left', color: 'black', display: "block", fontSize: 20, marginBottom: 6 }}>
                        Organization Name
                    </label>
                    <input
                        id="orgName"
                        name="orgName"
                        type="text"
                        required
                        autoComplete="orgName"
                        placeholder="Enter an Organization Name"
                        style={{ width: "100%", padding: "10px 10px", fontSize: 14, boxSizing: "border-box", borderRadius: "10px" }}
                    />
                    <label htmlFor="email" style={{textAlign : 'left', color: 'black', display: "block", fontSize: 20, marginBottom: 6, marginTop: 12 }}>
                        Contact Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Enter a Contact Email"
                        style={{  width: "100%", padding: "10px 10px", fontSize: 14, boxSizing: "border-box", borderRadius: "10px" }}
                    />
                    <label htmlFor="phoneNumer" style={{textAlign : 'left', color: 'black',display: "block", fontSize: 20, marginBottom: 6, marginTop: 12 }}>
                        Password
                    </label>
                    <input
                        id="phoneNumer"
                        name="phoneNumer"
                        type="number"
                        required
                        autoComplete="phoneNumer" 
                        placeholder="Enter a contact Phone Number"
                        style={{  width: "100%", padding: "10px 10px", fontSize: 14, boxSizing: "border-box", borderRadius: "10px"  }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        fontSize: "16px",
                        width: "100%",
                        padding: "10px 12px",  
                        background: "#2889a7ff",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}