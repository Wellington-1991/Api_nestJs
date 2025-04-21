import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Usuários')
    .setDescription('API para gerenciamento de usuários')
    .setVersion('1.0')
    .addTag('users') // Você pode adicionar tags para organizar as rotas
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' é o caminho onde o Swagger será acessado

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
