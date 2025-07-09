import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsApiResponse = Array<{
  id: string
  nome: string
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
            {room.nome}
          </Link>
        ))}
      </div>

      <Link className="outline" to="room">
        Go to Room
      </Link>
    </div>
  )
}
