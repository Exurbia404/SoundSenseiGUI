import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

const BrandDetail = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(()=>{
    
  })
  return (
    <div>BrandDetail</div>
  )
}
export default BrandDetail