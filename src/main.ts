import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Constants } from './utils/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
    .setTitle('Backend person')
    .setDescription('The back-person API description')
    .setVersion('1.0')
    .addTag('personas')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const server = app.get(ConfigService);
  const port = +server.get<number>(Constants.SERVER_PORT) || 3000;
  await app.listen(port);
  console.info(`Server istening on port ${await app.getUrl()}`);
}
bootstrap();
