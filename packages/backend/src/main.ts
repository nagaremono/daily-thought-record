import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from '@daily-thought-record/db';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get<PrismaService>(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
void bootstrap();
