import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsApiResponse = Array<{
  id: string
  name: string
  questionCount: number
}>

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['createRoom'],
    queryFn: async () => {
      const result = await fetch('http://localhost:3000/rooms')
      const rooms: GetRoomsApiResponse = await result.json()

      return rooms
    },
  })
  return (
    <div>
      <div>Create Room</div>

      {isLoading && <p>Loading...</p>}
      <div className="flex flex-col gap-1">
        {data?.map((room) => (
          <Link key={room.id} to={`/room/${room.id}`}>
            {room.name} {room.questionCount}
          </Link>
        ))}
      </div>

      <Link className="outline" to="room">
        Go to Room
      </Link>
    </div>
  )
}
