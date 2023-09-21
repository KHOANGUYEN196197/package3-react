import { useAppContext } from "../context/AppContext";

function ComponentB() {
    const { changeLanguage, changeTheme, isLogin } = useAppContext();
    return (
        <>
            {isLogin && <div>
                <button onClick={() => { changeLanguage('vn') }}>choose VietNamese</button>
                <button onClick={() => { changeLanguage('en') }}>choose English</button>
                <br /><br /><br />
                <button onClick={() => { changeTheme() }}>set Theme</button>
            </div>}
        </>
    )
}

export default ComponentB;