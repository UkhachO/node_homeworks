export const config = {
  app: {
    port: Number(process.env.PORT) || 3000,
  },
  pg: {
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT || 5432),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl:
      String(process.env.PG_SSL || 'true') === 'true'
        ? { rejectUnauthorized: false }
        : false,
  },
};
