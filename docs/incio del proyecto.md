
1)  Creo el proyecto
		nest new project-name (nest new base-person)
		
2) 	Instalo la dependecnia @nestjs/config
		npm i --save @nestjs/config

3)	Creo el archivo .env (donde se guardan las variables de entorno)
	Y el archivo constants.ts donde se almacenaran las constantes
	
4)	Instalo las librerias para el manejo de la base de datos
		npm i --save @nestjs/typeorm typeorm mysql2

		y defino las constantes de la base de datos
			  DB: {
				HOST: 'DB_HOST',
				PORT: 'DB_PORT',
				DATABASE: 'DB_DATABASE',
				USER: 'DB_USER',
				PASS: 'DB_PASSWORD',
			  }
		
5) Creo el modulo persona
		nest g mo persona --no-spec

6) Creo el service persona
		nest g s persona --no-spec

7) Creo el controller persona
		nest g co persona --no-spec
		
8) Instalo las dependencias necesarias para validación y crear la  API

	npm i --save class-validator class-transformer   		// Validaciones
		
	npm install --save @nestjs/swagger swagger-ui-express		// open API
		
		
		
