import { useDispatch, useSelector } from "react-redux"
import { fetchBrands } from "../redux/features/brandSlice"
import { useEffect } from "react"
import BrandComp from "./BrandComp"
import Loader from "./Loader"

const Brands = () => {

  const dispatch = useDispatch()
  const { brands, loading, error } = useSelector((state) => state.getBrands)
  useEffect(() => {
    dispatch(fetchBrands())
  }, [])

  return (
    <div className="mt-[80px]">
      {
        loading ? <div className="flex items-center justify-center h-[70vh]"><Loader /></div> :
          <BrandComp brands={brands} />
      }
    </div>
  )
}
export default Brands