import fastifyCors from '@fastify/cors'
import fastify from 'fastify'

import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { createQuestionRoute } from './http/routes/create-question.ts'
import { postRoomsRoute } from './http/routes/create-rooms.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'
import { getRoomsQuestionsRoute } from './http/routes/get-rooms-questions.ts'
import { uploadAudioRoute } from './http/routes/upload-audio.ts'
import fastifyMultipart from '@fastify/multipart'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
  return { status: 'ok' }
})

//adding multipart support
app.register(fastifyMultipart)

app.register(getRoomsRoute)
app.register(postRoomsRoute)
app.register(getRoomsQuestionsRoute)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({
  port: env.PORT,
})
