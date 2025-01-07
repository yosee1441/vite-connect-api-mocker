import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingSpinner} from '@/components/loading-spinner'

const HomePage = lazy(() => import('@pages/home/Home.page'))
const NotFoundPage = lazy(() => import('@pages/not-found/NotFound.page'))

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter
