 CREATE SCHEMA pruebasdb;
 
USE pruebasdb;

DROP TABLE IF EXISTS books;
 CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NULL,
  `subtitle` varchar(128) NOT NULL,
  `isbn` tinyint DEFAULT NULL,
  `state` tinyint DEFAULT NULL,
  `createdAt` timestamp DEFAULT NULL,
  `updatedAt` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`)
 ); 

 DROP TABLE IF EXISTS `persons`;
 CREATE TABLE IF NOT EXISTS `persons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `surname` varchar(128) NOT NULL,
  `state` tinyint DEFAULT NULL,
  `createdAt` timestamp DEFAULT NULL,
  `updatedAt` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`)
 ); 

/*   DROP TABLE IF EXISTS `tasks`;
 CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NULL,
  `description` varchar(128) NOT NULL,
  `state` tinyint DEFAULT NULL,
  `createdAt` timestamp DEFAULT NULL,
  `updatedAt` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`)
 );  */