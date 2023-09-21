const ACCOUNT = []

for (let i = 0; i < 100; i++) {
    const data = {
        id: i + 1,
        email: `email ${i + 1}`,
        userName: `userName ${i + 1}`,
        fullName: `fullName ${i + 1}`,
        department: Math.floor(Math.random() * 4) + 1,
        position: Math.floor(Math.random() * 4) + 1,
        createDate: new Date()
    };

    ACCOUNT.push(data)

}
export default ACCOUNT;


// const ACCOUNT = []: Đây là khai báo một hằng số (constant) ACCOUNT và gán cho nó một mảng rỗng. Mảng này sẽ được sử dụng để lưu trữ các tài khoản.

// for (let i = 0; i < 100; i++) {: Đây là một vòng lặp for được sử dụng để tạo ra 100 tài khoản. Biến i được sử dụng làm biến đếm và bắt đầu từ 0. Vòng lặp sẽ tiếp tục cho đến khi i không còn nhỏ hơn 100 nữa.

// const data = { ... }: Trong mỗi vòng lặp, bạn tạo một đối tượng data mới. Đối tượng này chứa thông tin về tài khoản, bao gồm id, email, userName, fullName, department, position, và createDate. Dữ liệu này được tạo dựa trên giá trị của biến i để có sự khác nhau giữa các tài khoản.

// ACCOUNT.push(data): Đối tượng data được tạo trong mỗi vòng lặp được thêm vào mảng ACCOUNT sử dụng phương thức push(). Điều này có nghĩa là mỗi lần lặp, một tài khoản mới sẽ được thêm vào mảng.

// export default ACCOUNT;: Cuối cùng, sau khi tạo xong tất cả các tài khoản, mảng ACCOUNT được xuất (export) ra ngoài module để có thể được sử dụng trong các tệp khác. Đây là một cách để chia sẻ dữ liệu tài khoản với các module khác trong ứng dụng của bạn.




