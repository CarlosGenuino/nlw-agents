import { db } from "../../db/connection.ts";
import { desc, eq } from "drizzle-orm";
import { schema } from "../../db/schema/index.ts";
import { z } from "zod/v4";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const getRoomsQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      console.log(roomId);
      const rooms = await db
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          response: schema.questions.response,
          createdAt: schema.questions.created_at,
        })
        .from(schema.questions)
        .where(eq(schema.questions.room_id, roomId))
        .orderBy(desc(schema.questions.room_id));
      reply.status(200).send(rooms);
    }
  );
};
