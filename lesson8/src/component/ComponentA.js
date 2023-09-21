import { useAppContext } from "../context/AppContext";
import ComponentC from "./ComponentC";

function ComponentA() {
    const { language, theme } = useAppContext();
    return (
        <>
            <div>language: {language}</div>

            <div>theme: {theme ? 'page is light' : 'page is dark'}</div>

            <br /><br /><br />
            <ComponentC />
        </>
    )
}

export default ComponentA;