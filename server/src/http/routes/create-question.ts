import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/questions",
    {
      schema: {
        summary: "Create a new question in a room",
        tags: ["Questions"],
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          question: z.string().min(10),
        }),
        response: {
          201: z.object({
            questionId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const { question } = request.body;

      const result = await db.insert(schema.questions).values({ room_id: roomId, question }).returning();

      const insertedQuestion = result[0];
      
      if(!insertedQuestion){
        throw new Error("Question insertion failed");
      }

      return reply.status(201).send({ questionId: insertedQuestion.id });
    }
  );
};
