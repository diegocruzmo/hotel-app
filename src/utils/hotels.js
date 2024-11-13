export const fetchHotels = async () => {
  try {
    const res = await fetch('http://localhost:3001/hotels')
    if (!res.ok) throw new Error('Network response was not Ok')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchHotel = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/hotels/${id}`)
    if (!res.ok) throw new Error('Network response was not Ok')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
