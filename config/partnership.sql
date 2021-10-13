-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: bac
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `partnership`
--

DROP TABLE IF EXISTS `partnership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partnership` (
  `partnership_id` int NOT NULL AUTO_INCREMENT,
  `partnership_banner_title` varchar(45) DEFAULT NULL,
  `partnership_banner_picto` varchar(45) DEFAULT NULL,
  `partnership_top_title` varchar(45) DEFAULT NULL,
  `partnership_top_pic1` varchar(45) DEFAULT NULL,
  `partnership_top_pic2` varchar(45) DEFAULT NULL,
  `partnership_top_pic3` varchar(45) DEFAULT NULL,
  `partnership_top_pic4` varchar(45) DEFAULT NULL,
  `partnership_top_pic5` varchar(45) DEFAULT NULL,
  `partnership_top_txt1` varchar(250) DEFAULT NULL,
  `partnership_top_txt2` varchar(250) DEFAULT NULL,
  `partnership_top_txt3` varchar(250) DEFAULT NULL,
  `partnership_top_txt4` varchar(250) DEFAULT NULL,
  `partnership_top_txt5` varchar(250) DEFAULT NULL,
  `partnership_mid_title` varchar(45) DEFAULT NULL,
  `partnership_mid_pic1` varchar(45) DEFAULT NULL,
  `partnership_mid_pic2` varchar(45) DEFAULT NULL,
  `partnership_mid_pic3` varchar(45) DEFAULT NULL,
  `partnership_mid_pic4` varchar(45) DEFAULT NULL,
  `partnership_mid_pic5` varchar(45) DEFAULT NULL,
  `partnership_mid_txt1` varchar(250) DEFAULT NULL,
  `partnership_mid_txt2` varchar(250) DEFAULT NULL,
  `partnership_mid_txt3` varchar(250) DEFAULT NULL,
  `partnership_mid_txt4` varchar(250) DEFAULT NULL,
  `partnership_mid_txt5` varchar(250) DEFAULT NULL,
  `partnership_bot_title` varchar(45) DEFAULT NULL,
  `partnership_bot_pic1` varchar(45) DEFAULT NULL,
  `partnership_bot_pic2` varchar(45) DEFAULT NULL,
  `partnership_bot_pic3` varchar(45) DEFAULT NULL,
  `partnership_bot_pic4` varchar(45) DEFAULT NULL,
  `partnership_bot_pic5` varchar(45) DEFAULT NULL,
  `partnership_bot_txt1` varchar(250) DEFAULT NULL,
  `partnership_bot_txt2` varchar(250) DEFAULT NULL,
  `partnership_bot_txt3` varchar(250) DEFAULT NULL,
  `partnership_bot_txt4` varchar(250) DEFAULT NULL,
  `partnership_bot_txt5` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`partnership_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partnership`
--

LOCK TABLES `partnership` WRITE;
/*!40000 ALTER TABLE `partnership` DISABLE KEYS */;
INSERT INTO `partnership` VALUES (1,'L\'association et ses partenaires','hands-helping','Sa mission','partners-fistbump.png',NULL,NULL,NULL,NULL,'Proposer aux personnes durablement privées d’emploi (PPDE) un emploi en contrat à durée indéterminée, à temps choisi, dans le cadre de l’expérimentation nationale « Territoire zéro chômeur de longue durée »','Produire et vendre tous types de biens et/ou services auprès des particuliers, des professionnels, des associations et des collectivités territoriales.','Initier ou prendre part à toute initiative susceptible de favoriser le développement de l’emploi et corrélativement d’activités économiques sur le territoire.',NULL,NULL,'Fonctionnement','partners-puzzle.png',NULL,NULL,NULL,NULL,'Elle agit en collaboration avec un Comité Local pour l’Emploi dont les membres sont des élus et/ou des acteurs du territoire pour lesquels la lutte contre le chômage de longue durée est une priorité. Il est présidé par Fabien NEBEL, Maire de Bléré',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Si vous aussi, entreprise ou particulier, vous souhaitez apporter votre aide à LA BOÎTE D’À CÔTÉ et participer à la réussite de cette expérimentation, vous pouvez','Offrir votre temps en qualité de bénévole.','Faire une donation en numéraire ou en matériel','Proposer du mécénat de compétences','Parler de nous, nous aider à nous faire connaître...');
/*!40000 ALTER TABLE `partnership` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-12 20:41:58
