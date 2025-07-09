# Use Node.js 22 Alpine as base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies for better compatibility and create user
RUN apk add --no-cache libc6-compat && \
  addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nodejs

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm i
# Copy source code
COPY . .

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node --experimental-strip-types --no-warnings -e "import('http').then(http => { const req = http.request('http://localhost:3000/health', res => process.exit(res.statusCode === 200 ? 0 : 1)); req.on('error', () => process.exit(1)); req.end(); })"

# Start the application
CMD ["node", "--experimental-strip-types", "--no-warnings", "src/server.ts"]