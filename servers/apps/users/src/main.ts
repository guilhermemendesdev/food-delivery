import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(UsersModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'servers/email-templates'));
  app.setViewEngine('ejs');
  // Configuração do CORS
  app.enableCors({
    origin: '*', // ou use '*' para permitir todas as origens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(4001);
}
bootstrap();
