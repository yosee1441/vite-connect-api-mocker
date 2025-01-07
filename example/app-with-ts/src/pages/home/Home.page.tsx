import { useEffect, useState } from 'react'
import { Product } from './models'
import { ProductHttpService } from './services'
import { Container } from '@/components/container'
import { SkeletonProductLoader } from './components/skeleton-product-loader'
import { ProductCard } from './components/product-card'

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const productService = new ProductHttpService()
    productService
      .findAll()
      .then((response) => setProducts(response))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Container>
      <div className="grid pt-2">
        {isLoading && <SkeletonProductLoader count={4} />}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}

export default HomePage
