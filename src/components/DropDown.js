import { Button, Dropdown, Space } from 'antd';

const DropDown = ({ items, img }) => {
    return (
        <div>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomLeft"
            >
                <img  className='rounded-full w-10 h-10 cursor-pointer' src={img} alt="" />
            </Dropdown>
        </div>
    )
}
export default DropDown