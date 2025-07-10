import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import z from 'zod/v4'
import { schema } from '../../db/schema/index.ts'

export const roomSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
})

export const postRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.post('/rooms', {
    schema: {
      body: roomSchema,
    }
  },async (request, reply) => {
    
    const {name, description} = request.body
    

    const result = await db.insert(schema.rooms).values({ name, description }).returning()
  
    const insertedRoom = result[0]
    if (!insertedRoom){
      throw new Error("Room creation failed")
    }

    reply.status(201).send({
      roomId: insertedRoom.id,
    })
  })
}
