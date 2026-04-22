import { useState } from "react";

function ProfileForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });


    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }))

    }
    return (
        <div>
            <h2>Profile Form</h2>
            <form action="">
                <input type="text" value={form.name} placeholder="name" onChange={e => handleChange('name', e.target.value)} />
                <input type="email" value={form.email} placeholder="email" onChange={e => handleChange('email', e.target.value)} />
                <textarea value={form.message} placeholder="message" onChange={e => handleChange('message', e.target.value)} />
            </form>
            <p>{form.name}, {form.email}, {form.message}</p>
            <p>{console.log(form)}</p>

        </div>
    )
}
export default ProfileForm;