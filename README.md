# Configuración del Proyecto e Instrucciones de Ejecución

## Requisitos Previos

- Asegúrate de tener Docker instalado.
- Node.js versión 22.1.0 o superior debe estar instalado en tu sistema.
- `nodemon` debe estar instalado de manera global.

## Pasos para Ejecutar

1. **Instala las dependencias de Node.js:**

   ```bash
   npm install
   ```

2. **Inicia los contenedores de Docker:**

   ```bash
   docker-compose up -d
   ```

3. **Aplica las migraciones de la base de datos:**

   ```bash
   npx prisma migrate deploy
   ```

4. **Genera el cliente de Prisma:**

   ```bash
   npx prisma generate
   ```

5. **Inicia el servidor en modo desarrollo:**

   ```bash
   npm run dev
   ```

## Consideraciones

- Verifica que el archivo .env esté correctamente configurado con la cadena de conexión a tu base de datos.
- En caso de problemas, revisa los logs de Docker y Node.js para identificar el origen del error.

# Postman
Para acceder a la documentación de Postman [click here](https://documenter.getpostman.com/view/19546457/2sAXjRW9u1)