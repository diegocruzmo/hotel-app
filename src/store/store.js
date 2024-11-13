import { create } from 'zustand'

const useStore = create((set) => ({
  bookings: [],

  addBooking: (hotel, dates) =>
    set((state) => ({ bookings: [...state.bookings, { hotel, dates }] }))
}))

export default useStore
