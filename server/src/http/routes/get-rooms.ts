import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async (_, reply) => {
    const rooms = await getRoomsFromDatabase() // Replace with actual function to fetch rooms
    reply.status(200).send(rooms)
  })
}

async function getRoomsFromDatabase() {
  return await db
    .select({
      id: schema.rooms.id,
      nome: schema.rooms.name,
    })
    .from(schema.rooms)
    .orderBy(schema.rooms.created_at)
}
