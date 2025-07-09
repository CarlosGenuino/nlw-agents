-- Habilita a extensão pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Exemplo de tabela usando pgvector (opcional)
-- CREATE TABLE IF NOT EXISTS embeddings (
--     id SERIAL PRIMARY KEY,
--     content TEXT NOT NULL,
--     embedding VECTOR(1536),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Exemplo de índice para busca por similaridade (opcional)
-- CREATE INDEX IF NOT EXISTS embeddings_embedding_idx ON embeddings 
-- USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);