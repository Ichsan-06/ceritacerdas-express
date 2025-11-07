# Gunakan image Node.js resmi
FROM node:18-alpine

# Tentukan working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project ke dalam container
COPY . .

# Expose port (harus sama dengan yang ada di .env)
EXPOSE 3000

# Jalankan server
CMD ["npm", "run", "start"]
