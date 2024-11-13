import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Router } from 'wouter'
import { Toaster } from 'react-hot-toast'
import HotelList from './components/HotelList'
import HotelDetails from './components/HotelDetails'

function App() {
  return (
    <>
      <Toaster position='top-left' reverseOrder={false} />
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Route path='/' component={HotelList} />
          <Route path='/hotel/:id' component={HotelDetails} />
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
