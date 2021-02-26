import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Open API
  const options = new DocumentBuilder()
    .setTitle('CEP API')
    .setDescription('API para cadastro de ceps para uma determinada loja física')
    .setVersion('1.0.0')
    .addTag('cepapi')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document); //  localhost:3000/docs  //

  await app.listen(3000);
}
bootstrap();
