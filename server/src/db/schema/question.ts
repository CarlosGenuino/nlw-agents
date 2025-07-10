
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { rooms } from './room.ts'

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  room_id: uuid().references(()=> rooms.id).notNull(),
  question: text().notNull(),
  response: text(),
  created_at: timestamp().defaultNow().notNull(),
})
