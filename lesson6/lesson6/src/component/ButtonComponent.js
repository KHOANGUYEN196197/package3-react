import { Button } from "reactstrap";

function ButtonComponent(props) {
    const { name, color, clickButton } = props;
    return (
        <Button onClick={clickButton} color={color}>
            {name}
        </Button>
    )
}
export default ButtonComponent;


/*

1. Import thư viện và components:

import { Button } from "reactstrap";

2. Khai báo component ButtonComponent:

function ButtonComponent(props) {
    const { name, color, clickButton } = props;

Đây là khai báo component ButtonComponent. Nó nhận vào một props (các thuộc tính) với các thuộc tính sau:
name: Tên hiển thị trên nút.
color: Màu sắc của nút.
clickButton: Hàm xử lý sự kiện khi nút được nhấn.

3. Render component Button:

return (
    <Button onClick={clickButton} color={color}>
        {name}
    </Button>
)

Trong phần này, component Button của reactstrap được render ra. Các thuộc tính của Button được đặt dựa trên các thuộc tính props của component ButtonComponent:
onClick={clickButton}: Đây là sự kiện xảy ra khi nút được nhấn, được xác định bởi hàm clickButton truyền từ props.
color={color}: Đây là màu sắc của nút, cũng được xác định từ props.
{name}: Đây là nội dung (tên) của nút, cũng được lấy từ props.

4.Export component:
export default ButtonComponent;

Cuối cùng, component ButtonComponent được export để có thể sử dụng trong các tệp khác của ứng dụng React của bạn.

*/