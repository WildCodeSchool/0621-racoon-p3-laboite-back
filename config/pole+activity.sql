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
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activity_desc` text,
  `activity_img` varchar(200) DEFAULT NULL,
  `pole_id` int NOT NULL,
  PRIMARY KEY (`id`,`pole_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_activity_pole_idx` (`pole_id`),
  CONSTRAINT `fk_activity_pole` FOREIGN KEY (`pole_id`) REFERENCES `pole` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (9,'Pack « micro-jardin » : installation de bacs à hauteur chez les particuliers avec plantes de leur choix.','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/vegetal-services-01.jpeg?raw=true',32),(10,'Pack « jardin des senteurs » :  préparation et mise à disposition de bacs à herbes aromatiques.','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/vegetal-services-02.jpeg?raw=true',32),(11,'Gestion des déchets verts :  collecte des branches coupées, des feuilles, des déchets alimentaires pour compost…',NULL,32),(12,'Gardiennage de plantes pendant les congés ou mise en serre en hiver.',NULL,32),(13,'Location de petit outillage','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/recyclerie-services-01.jpeg?raw=true',33),(14,'Matériauthèque : accès à une matériauthèque où vous pouvez trouver à moindre coût des matériaux de réemploi','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/recyclerie-services-02.jpeg?raw=true',33),(15,'Ateliers d’upcycling : des ateliers d’upcycling (relooking ou détournement d’objets) dont le planning et les tarifs figurent ci-après.',NULL,33),(16,'\nServices aux particuliers : déplacements sur la commune, petits travaux d’entretien, préparation de repas à domicile, soin et sortie d’animaux de compagnie, courses ou retrait de drive, compagnie ou accompagnement lors de promenades, après-midi jeux, nettoyage de véhicules, coursier, débarras de déchets verts ou d’encombrant, vide maison, aide à l’utilisation de l’informatique…\n','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/conciergerie-services-01.jpg?raw=true',1),(17,'Services aux entreprises : service de coursier, livraisons clients, débarras des emballage, nettoyage de chantiers ou véhicules, voiturier, entretien des locaux avec des produits non polluants et respectueux de l’environnement, mise à disposition de personnel en renfort à titre ponctuel…','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/conciergerie-services-02.jpg?raw=true',1),(18,'Services aux collectivités : entretien du cimetière, entretien des chemins de randonnée et des bords de Cher, ambassadeurs de tri auprès des usagers de la déchetterie ou des entreprise, mise à disposition de personnel en renfort à titre ponctuel…','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/conciergerie-services-03.jpg?raw=true',1);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pole`
--

DROP TABLE IF EXISTS `pole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pole` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pole_name` varchar(60) DEFAULT NULL,
  `pole_title` varchar(200) DEFAULT NULL,
  `pole_picto` varchar(200) DEFAULT NULL,
  `pole_desc` text,
  `pole_banner` varchar(200) DEFAULT NULL,
  `pole_func` text,
  `pole_func_img` varchar(200) DEFAULT NULL,
  `pole_num` varchar(20) DEFAULT NULL,
  `pole_email` varchar(50) DEFAULT NULL,
  `pole_miniature_img` varchar(200) DEFAULT NULL,
  `pole_catchphrase` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `pole_name_UNIQUE` (`pole_name`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pole`
--

LOCK TABLES `pole` WRITE;
/*!40000 ALTER TABLE `pole` DISABLE KEYS */;
INSERT INTO `pole` VALUES (1,'Pôle Conciergerie','La Conciergerie','<i class=\"fas fa-concierge-bell\"></i>','LA BOÎTE D’À CÔTÉ\nmet à la disposition des habitants, collectivités et entreprises de la communauté de communes Bléré-Val de Cher (autour de Chenonceaux) une conciergerie territoriale aux multiples services.','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/conciergerie.jpg?raw=true','Une adhésion annuelle de 5 € à notre association vouspermet d’accéder à l’ensemble des services dont les tarifs sont détaillés ci-après. Le coût de nos services ou travaux à domicile donne droit, pour les particuliers, à réduction d’impôt.\nAu-delà de services généraux répertoriés ci-dessous, nous pouvons nous adapter vos besoins.\n\nPour toute demande, notre équipe vous accueille au 02 00 70 07 00','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/conciergerie-func.jpeg?raw=true','02 00 70 07 00','bonjour@laboitedacote.fr','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/conciergerie-mini.jpg?raw=true','lorem ipsum'),(32,'Pôle Végétal','Pôle Végétal','<i class=\'fas fa-leaf\'></i>','LA BOÎTE D’À CÔTÉ se sent proche de la nature et du végétal. À ce titre, elle propose une activité grands jardins qui se déploie dans trois domaines complémentaires et utiles au territoire, à ses habitants et à son développement touristique.','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/vegetal-banner.jpeg?raw=true','','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/vegetal-func.jpeg?raw=true','02 00 70 07 00 ','bonjour@laboitedacote.fr','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/vegetal-mini.jpg?raw=true','les grands jardins'),(33,'Pôle Recyclerie Créative','La recyclerie','<i class=\'fas fa-box-open\'></i>','LA BOÎTE D’À CÔTÉ En partenariat avec le SMICTOM et la Communauté de Communes Bléré-Val de Cher','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/recyclerie-banner.jpeg?raw=true','LA BOÎTE D’À CÔTÉ c’est aussi une recyclerie créative qui récupère les objets dont se séparent leurs propriétaires. Notre équipe les brique, les répare, les chouchoute, les transforme ou les détourne afin de leur offrir une nouvelle vie et de les proposer à la vente dans notre magasin ou sur notre boutique en ligne (lien hypertexte). Nous reprenons également les outils en état de fonctionnement, les pots de peinture ou autres matériaux de décoration ou bricolage entamés pouvant être réemployés, les instruments de musique, les chutes de tissu ou vêtements ne pouvant plus être portés. Nous ne prenons pas : les gros appareils électroménagers, les vêtements qui peuvent être encore portés ; nous pouvons néanmoins vous orienter vers d’autres partenaires du réemploi. Dépôt dans nos locaux / chez vous, aux horaires d’ouverture et sur rendez-vous au 02 00 70 07 00','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/recyclerie-func.jpeg?raw=true','02 00 70 07 00 ','bonjour@laboitedacote.fr','https://github.com/WildCodeSchool/0621-racoon-p3-laboite-front/blob/poleTemplate/src/assets/recyclerie-mini.jpg?raw=true','lorem ipsum');
/*!40000 ALTER TABLE `pole` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-22  8:17:18