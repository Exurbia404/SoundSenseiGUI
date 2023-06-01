import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';
import Tabs from './Tabs';
import { useSelector } from 'react-redux';
const FilterModal = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const { brands, loading: loadingBrand, error: errorBrand } = useSelector((state) => state.getBrands)

    return (
        <div className='sm:hidden block mb-4 w-[100%]'>
            <div className='flex justify-between  items-center'>
                <p className='text-xl font-bold'>Apply Filters</p>
                <BsFilterSquareFill className='font-bold text-3xl' onClick={() => setModal1Open(true)} />
            </div>
            <Modal
                title="20px to Top"
                style={{
                    top: 20,
                }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                <div className="">
                    <h2 className="font-semibold text-lg">Sort</h2>
                    <Tabs brands={[{ name: 'Ascending' }, { name: 'Descending' }]} sort />
                    <h2 className="font-semibold text-lg">Filter by brand</h2>
                    <Tabs brands={brands} />
                </div>
            </Modal>
        </div>
    )
}
export default FilterModal