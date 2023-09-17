import * as session from 'express-session';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // somewhere in your initialization file
  app.use(
    session({
      secret: 'WeAllHaveSecrets',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  await app.listen(3000);
}
bootstrap();
