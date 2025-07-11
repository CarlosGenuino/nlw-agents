import { useQuery } from '@tanstack/react-query'
import type { GetRoomsListResponse } from './types/get-room-list-response'

export function useRooms() {
  return useQuery({
    queryKey: ['createRoom'],
    queryFn: async () => {
      const result = await fetch('http://localhost:3000/rooms')
      const rooms: GetRoomsListResponse = await result.json()
      return rooms
    },
  })
}
