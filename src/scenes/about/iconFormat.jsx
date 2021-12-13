// This is the same as the helper for Socials except for the size

import { IconContext } from "react-icons";

export default function ConfigIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ size: "5em" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}