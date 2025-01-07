import { generateSkeletons } from './skeletonProductLoader.helpers'

interface SkeletonProductLoaderProps {
  count: number
}

const SkeletonProductLoader: React.FC<SkeletonProductLoaderProps> = ({
  count,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {generateSkeletons(count).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg shadow-md p-4 animate-pulse"
        >
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-80 bg-gray-300 rounded w-full"></div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonProductLoader
