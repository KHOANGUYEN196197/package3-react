const DEPARTMENT = [
    {
        id: 1,
        value: 'Manager1'
    },
    {
        id: 2,
        value: 'Manager2'
    },
    {
        id: 3,
        value: 'Manager3'
    },
    {
        id: 4,
        value: 'Manager4'
    }
]
export default DEPARTMENT;

// const DEPARTMENT = [...]: Đây là khai báo một hằng số (constant) DEPARTMENT và gán cho nó một mảng. Mảng này chứa thông tin về các phòng ban (department) với mỗi phòng ban có một đối tượng chứa id và value. Có tổng cộng 4 phòng ban được định nghĩa trong mảng này.

// export default DEPARTMENT;: Cuối cùng, sau khi định nghĩa mảng DEPARTMENT, nó được xuất (export) ra ngoài module để có thể được sử dụng trong các tệp khác trong ứng dụng của bạn. Điều này cho phép các module khác có thể sử dụng danh sách các phòng ban này mà không cần định nghĩa lại.