const { useState, useEffect } = require("react")
const { default: Account } = require("./Account")

function ButtonComponent() {
    const [isShowData, setIsShowData] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                setDatas(json)
            })
    }
    return (
        <>
            <button onClick={() => { setIsShowData(!isShowData) }}>Show Data</button>
            {isShowData && <Account datas={datas} />}
            <ul style={{ height: '2000px' }}></ul>
        </>
    )
}
export default ButtonComponent;