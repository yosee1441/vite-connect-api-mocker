import { Product } from '@pages/home/models'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
    </article>
  )
}

export default ProductCard
