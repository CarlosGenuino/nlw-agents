import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'
import { count, eq } from 'drizzle-orm'

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
      name: schema.rooms.name,
      questionName: count(schema.questions.id)
    })
    .from(schema.rooms)
    .leftJoin(schema.questions, eq(schema.rooms.id, schema.questions.room_id))
    .groupBy(schema.rooms.id, schema.rooms.name)
    .orderBy(schema.rooms.created_at)
}
