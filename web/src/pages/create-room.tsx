import { CreateRoomForm } from '@/components/create-room-form'
import {RoomList} from '@/components/room-list'

export function CreateRoom() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-bold text-2xl">Available Rooms</h1>
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />
          <RoomList />
        </div>
      </div>
    </div>
  )
}
