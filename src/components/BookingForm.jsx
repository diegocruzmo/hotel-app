import { useForm } from 'react-hook-form'
import { Typography, Input, Button } from '@mui/material'
import toast from 'react-hot-toast'
import useStore from '../store/store'

const BookingForm = ({ hotel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const addBooking = useStore((state) => state.addBooking)

  const onSubmit = (dates) => {
    addBooking(hotel, dates)
    toast.success('Booking realized!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type='date' {...register('startDate', { required: true })} />
      {errors.startDate && (
        <Typography style={{ color: 'red' }}>Field required</Typography>
      )}
      <br />
      <Input type='date' {...register('endDate', { required: true })} />
      {errors.endDate && (
        <Typography style={{ color: 'red' }}>Field required</Typography>
      )}
      <br />
      <br />
      <Button variant='contained' type='submit'>
        Book
      </Button>
    </form>
  )
}

export default BookingForm
