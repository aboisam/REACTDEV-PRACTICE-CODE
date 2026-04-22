import { useState } from "react";


function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    // function toggleHandler() {
    //     setIsDark(!isDark);
    // }

    const toggleHandler = () => {
    setIsDark(prev => !prev);
}



    return (
        <div style={{
            background: isDark ? '#1A1A1A' : '#ffff',
            color: isDark ? '#ffff' : '#1A1A1A',
            padding: '2rem',
            minHeight: '100px',
        }}>
            <button onClick={toggleHandler}>
                ToggleTheme
            </button>
        </div>

    );
}
export default ThemeToggle;