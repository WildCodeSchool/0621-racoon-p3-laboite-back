-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
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
-- Table structure for table `concept`
--

DROP TABLE IF EXISTS `concept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concept` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concept_img` varchar(200) DEFAULT NULL,
  `pres_ebe_title` varchar(200) DEFAULT NULL,
  `pres_ebe_desc` text,
  `pres_ebe_desc2` text,
  `link_tzc` text,
  `concept_banner` varchar(200) DEFAULT NULL,
  `concept_num` varchar(45) DEFAULT NULL,
  `concept_email` varchar(45) DEFAULT NULL,
  `concept_address` varchar(100) DEFAULT NULL,
  `concept_openhours` varchar(200) DEFAULT NULL,
  `concept_img1` varchar(200) DEFAULT NULL,
  `concept_img2` varchar(200) DEFAULT NULL,
  `concept_img3` varchar(200) DEFAULT NULL,
  `concept_txt1_p1` text,
  `concept_txt1_p2` text,
  `concept_txt1_p3` text,
  `concept_txt2_p1` text,
  `concept_txt2_p2` text,
  `concept_txt2_p3` text,
  `concept_txt3_p1` text,
  `concept_txt3_p2` text,
  `concept_txt3_p3` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concept`
--

LOCK TABLES `concept` WRITE;
/*!40000 ALTER TABLE `concept` DISABLE KEYS */;
INSERT INTO `concept` VALUES (1,NULL,NULL,'UNE ENTREPRISE PAS COMME LES AUTRES À BLÉRÉ (INDRE ET LOIRE)','Engagée dans le développement durable et local, proche des acteurs du territoire','Territoire Zéro Chômeur de Longue Durée','http://localhost:4000/static/images/banner.jpg',NULL,NULL,NULL,'Horaires d’ouverture : du lundi au samedi de 8h30 à 17h','http://localhost:4000/static/images/jardin.jpg','http://localhost:4000/static/images/recolte.jpg','http://localhost:4000/static/images//bag.jpg','LA BOÎTE D’À CÔTÉ est une entreprise à but d’emploi, proche de son territoire, créée dans le cadre de l’expérimentation Territoire Zéro Chômeur de Longue Durée.','Cette expérimentation, en cours depuis 2016, se fonde sur trois principes : permettant de penser qu’il est possible de supprimer le chômage de longue durée à l’échelle des territoires :','Personne n’est inemployable lorsque l’emploi est adapté aux capacités et aux compétences des personnes.','Ce n’est pas le travail qui manque : Un grand nombre de travaux utiles, d’une grande diversité, restent à réaliser.','Ce n’est pas l’argent qui manque : la privation d’emploi coûte plus cher que la production d’emploi.','Ainsi, il paraît possible de supprimer le chômage de longue durée à l’échelle des territoires.','Tel est l’engagement de LA BOÎTE D’À CÔTÉ, entreprise à but d’emploi* de forme associative dont l’objectif est d’employer, d’ici 2027, jusqu’à 130 Personnes Privées Durablement d’Emploi (PPDE).','Les emplois qu’elle produit sont dits supplémentaires ou complémentaires : ils n’entrent pas en concurrence des emplois existants sur le territoire et viennent en soutien du tissu économique local.','(*) Entreprise à but d’emploi (EBE) : entreprise de l’économie sociale et solidaire dont la fonction première est de produire des emplois adaptés aux personnes qu’elle embauche, tant au niveau du contenu du poste qu’en matière de temps de travail.');
/*!40000 ALTER TABLE `concept` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-29 19:36:25
