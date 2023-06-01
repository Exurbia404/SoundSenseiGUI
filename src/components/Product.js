import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../redux/features/productSlice"
import Products from "./Products"
import Loader from "./Loader"
import { closeParticularBrand, fetchBrands } from "../redux/features/brandSlice"
import Tabs from "./Tabs"
import { GrClose } from 'react-icons/gr'
import FilterModal from "./FilterModal"
const Product = () => {

    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.productsReducer)

    const { brands, loading: loadingBrand, error: errorBrand } = useSelector((state) => state.getBrands)

    const { particularBrand } = useSelector((state) => state.getBrands)

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchBrands())
    }, [])

    const handleClick = () => {
        console.log('click');
        dispatch(fetchAllProducts())
        dispatch(closeParticularBrand())
    }
    return (
        <div className="px-10 py-6 mt-[70px]">
            {loading ? <div className="flex items-center justify-center h-[70vh]"><Loader /></div> :
                <div>
                    {
                        Object.keys(particularBrand).length != 0 && <div className="flex items-center justify-center mb-4">
                            <p className="font-bold text-xl">{particularBrand.name}</p>
                            <GrClose className="ml-6 font-bold text-xl cursor-pointer" onClick={handleClick} />
                        </div>
                    }

                    <div className="flex sm:justify-start sm:flex-row flex-col sm:items-start items-center justify-center">
                        <div className="mr-4 sm:block hidden">
                            <h2 className="font-semibold text-lg">Sort</h2>
                            <Tabs brands={[{ name: 'Ascending' }, { name: 'Descending' }]} sort />
                            <h2 className="font-semibold text-lg">Filter by brand</h2>
                            <Tabs brands={brands} />
                        </div>
                        <FilterModal />
                        <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                            {
                                products.map((product) => {
                                    return (
                                        <Products key={product.id} id={product.id} name={product.name} description={product.description} brandId={product.brand_id} image={product.productImageLink} releaseDate={product.releaseDate} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}
export default Product