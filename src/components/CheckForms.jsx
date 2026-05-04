import { useState } from "react"

function CheckForms() {
    const [form, setform] = useState({ userName: '', agreeToTerms: false, subcribeToNewsletter: true, role: '' });


    const [error, setError] = useState({});
    const validate = () => {
        const newError = {};
        if (!form.userName.trim()) {
            newError.userName = "User name is required";
        }

        if (!form.agreeToTerms) {
            newError.agreeToTerms = "You must agree to the terms and conditions";
        }
        if (!form.role) {
            newError.role = "Please select a role";
        }
        return newError;
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setform(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        console.log(form);

        setError({});
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>CheckForms</div>
            <input type="text" name="userName" value={form.userName} onChange={handleChange} />
            {error.userName && <p style={{ color: 'red' }}>{error.userName}</p>}
            <input type="checkbox" name="agreeToTerms" checked={form.agreeToTerms} onChange={handleChange} />
            {error.agreeToTerms && <p style={{ color: 'red' }}>{error.agreeToTerms}</p>}
            <input type="checkbox" name="subscribeToNewsletter" checked={form.subcribeToNewsletter} onChange={handleChange} />
            {error.role && <p style={{ color: 'red' }}>{error.role}</p>}
            <select name="role" value={form.role} onChange={handleChange}>
                <option value="">Select a role</option>
                <option value="Student">Student</option>
                <option value="Engineer">Engineer</option>
                <option value="Developer">Developer</option>


                {error.role && <p style={{ color: 'red' }}>{error.role}</p>}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CheckForms