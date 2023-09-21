import { useAppContext } from "../context/AppContext";

function ComponentC() {
    const { theme, language, isLogin } = useAppContext();
    return (
        <div>

            {isLogin && <div>ComponentC {theme ? 'light' : 'dark'}, {language}</div>}
        </div>
    )
}
export default ComponentC;