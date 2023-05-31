import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductById } from "../redux/features/productSlice"
import { useEffect } from "react"
import Loader from "../components/Loader"

const ProductDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { particularProduct: product, loading, error } = useSelector((state) => state.productsReducer)
    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return (
        <div className="container mt-[70px] px-10 py-10">
            {
                loading ? <div className="flex items-center justify-center h-[70vh]"><Loader /></div> : <div className="flex lg:flex-row flex-col items-center">
                    <img className="lg:w-[50%] md:w-[100%] h-[400px] object-cover rounded-md shadow-md" src={product.productImageLink} alt="" />
                    <div className="flex flex-col ml-10">
                        <h1 className="font-bold text-3xl">{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default ProductDetail