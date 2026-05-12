import { useState } from "react";


const Header = () => {
    const [count, setCount] = useState(0);

    return(
        <>
        <header>
            <img src="src/assets/globe.png" alt="globe" />
            <h2>My Travel Journal</h2>
        </header>
        </>
    )
}

export default Header;