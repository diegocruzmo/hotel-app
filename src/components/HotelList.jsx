import { fetchHotels } from '../utils/hotels'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'wouter'
import {
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Alert,
  Container
} from '@mui/material'

const HotelList = () => {
  const {
    data: hotels,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['hotels'],
    queryFn: fetchHotels
  })

  if (isLoading) {
    return <CircularProgress />
  }
  if (isError) {
    return <Alert severity='error'>Error fetching hotel: {error.message}</Alert>
  }

  return (
    hotels && (
      <div>
        <Typography variant='h4' component='h2'>
          Booking App
        </Typography>

        <Stack spacing={2}>
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
              <Card sx={{ maxWidth: 345, backgroundColor: '#e8e8e8' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={hotel.img}
                  title={hotel.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {hotel.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {hotel.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>See Details</Button>
                </CardActions>
              </Card>
            </Link>
          ))}
        </Stack>
      </div>
    )
  )
}

export default HotelList
