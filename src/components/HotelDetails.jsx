import BookingForm from './Bookingform'
import { useQuery } from '@tanstack/react-query'
import { fetchHotel } from '../utils/hotels'
import { useRoute, Link } from 'wouter'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CircularProgress,
  Alert,
  Button,
  Container
} from '@mui/material'

const HotelDetails = () => {
  const [, params] = useRoute('/hotel/:id')

  const {
    data: hotel,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['hotel', params.id],
    queryFn: () => fetchHotel(params.id)
  })

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return (
      <Alert severity='error'>Error fetching hotels: {error.message}</Alert>
    )
  }

  return (
    hotel && (
      <Container>
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
            <BookingForm hotel={hotel} />
          </CardActions>
          <Link href={'/'}>
            <Button size='small'>Back</Button>
          </Link>
        </Card>
      </Container>
    )
  )
}

export default HotelDetails
