import { audioChunks } from './audio-chunks.ts'
import { questions } from './question.ts'
import { rooms } from './room.ts'

//barrel file: um arquivo que re-exporta os arquivos do módulo
export const schema = {
  rooms, questions, audioChunks

}
