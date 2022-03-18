CREATE SCHEMA `dblibro` DEFAULT CHARACTER SET utf8mb4 ;
use pruebasdb;

SELECT * FROM pruebasdb.tasks;

show tables;

CREATE TABLE IF NOT EXISTS `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `surname` varchar(128) NOT NULL,
  `gender` varchar(128) NOT NULL,
  `state` tinyint DEFAULT NULL,
  `createdAt` timestamp DEFAULT NULL,
  `updatedAt` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`)
 ); 