import { useEffect } from "react";

function Account(props) {
    const { datas } = props;

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        console.log('window.scrollY', window.scrollY);
    }
    return (
        <>
            <ul>
                <label>List Account</label>
                {datas.map((data) => {
                    return (
                        <li key={data.id}>{data.name}</li>
                    )
                })}
            </ul>
        </>
    )
}
export default Account;