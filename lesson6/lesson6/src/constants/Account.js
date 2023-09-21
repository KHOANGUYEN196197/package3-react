const ACCOUNT = []

for (let i = 0; i < 100; i++) {
    const data = {
        id: i + 1,
        email: `email1 ${i + 1}`,
        userName: `userName1 ${i + 1}`,
        fullName: `fullName1 ${i + 1}`,
        department: '1',
        position: '2',
        createDate: '12-09-2023'
    };

    ACCOUNT.push(data)

}
export default ACCOUNT;