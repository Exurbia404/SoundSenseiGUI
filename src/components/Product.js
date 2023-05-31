import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../redux/features/productSlice"
import Products from "./Products"
import Loader from "./Loader"

const Product = () => {

    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.productsReducer)
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <div className="px-10 py-6 mt-[70px]">
            {loading ? <div className="flex items-center justify-center h-[70vh]"><Loader/></div> : <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {
                    products.map((product) => {
                        return (
                            <Products key={product.id} id={product.id} name={product.name} description={product.description} brandId={product.brand_id} image={product.productImageLink} releaseDate={product.releaseDate} />
                        )
                    })
                }
            </div>}
        </div>
    )
}
export default Product