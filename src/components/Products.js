import { Link } from "react-router-dom"

const Products = ({ id, name, description, brandId, image, releaseDate }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-md hover:shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  )
}
export default Products