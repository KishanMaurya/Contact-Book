CREATE DATABASE  IF NOT EXISTS `contactbook` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `contactbook`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: contactbook
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  `updated_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `contact_UNIQUE` (`contact`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'kishan','kkmaurya.0095@gmail.com','9598608579','2021-05-27 17:29:50.414',NULL),(3,'kishan','monu.0095@gmail.com','8956985692','2021-05-27 17:29:50.414',NULL),(5,'Renu Singh','Renu.0095@gmail.com','94554985692','2021-05-27 17:29:50.414',NULL),(6,'Sameer Singh','sameer.0095@gmail.com','89554985692','2021-05-27 17:30:10.475',NULL),(7,'Sreya Singh','sreya.0095@gmail.com','89354985692','2021-05-27 17:30:35.375',NULL),(8,'test1','test1@gmail.com','956895596','2021-05-27 17:30:53.221','2021-05-28 10:27:39.846'),(9,'Lakhan Singh','lakhan.0095@gmail.com','8935623692','2021-05-27 17:31:07.424',NULL),(10,'Rekha Singh','rekha.0095@gmail.com','8956895623','2021-05-27 17:31:38.937',NULL),(11,'test2','test2@gmail.com','951195596','2021-05-27 17:31:50.674','2021-05-28 10:35:58.358'),(12,'Suresh Singh','suresh.0095@gmail.com','8958005623','2021-05-27 17:32:07.209',NULL),(13,'Ranjeet Singh','ranjeet.0095@gmail.com','8959005623','2021-05-27 17:32:25.139',NULL),(14,'Sonam Singh','sonam.0095@gmail.com','89568956223','2021-05-27 17:32:38.470',NULL),(17,'kishan maurya','admin@gmail.com','9598685896','2021-05-28 10:02:39.359',NULL),(18,'Ritesh Yadav','yadav.0095@gmail.com','88968956223','2021-05-28 10:14:58.819',NULL),(19,'test demo','test@gmail.com','8989898989','2021-05-28 10:26:39.864',NULL);
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-29 12:43:40
