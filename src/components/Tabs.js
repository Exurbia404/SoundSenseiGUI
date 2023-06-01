import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../redux/features/productSlice"
import { useState } from "react"
import { closeParticularBrand, getBrandById } from "../redux/features/brandSlice"

const Tabs = ({ brands, sort }) => {

    const dispatch = useDispatch()
    const { particularBrand } = useSelector((state) => state.getBrands)
    const handleClick = (id) => {
        dispatch(fetchAllProducts(id))
        dispatch(getBrandById(id))
    }
    return (
        <div>
            {
                brands.map((brand, i) => {
                    return (
                        sort ? <p key={i} onClick={() => {
                            dispatch(fetchAllProducts(brand.name))
                            closeParticularBrand()
                        }} className={`hover:border-b-2 hover:border-b-blue-500 cursor-pointer transition-all my-2`}>{brand.name}</p>
                            :
                            <p key={i} onClick={() => handleClick(brand.id)} className={`hover:border-b-2 hover:border-b-blue-500 cursor-pointer transition-all my-2 ${particularBrand.id === i+1 ? 'border-b-2 border-b-blue-500' : ''}`}>{brand.name}</p>
                    )
                })
            }
        </div>
    )
}
export default Tabs