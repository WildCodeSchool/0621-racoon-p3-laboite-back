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
  `activity_img` text,
  `pole_id` int NOT NULL,
  `activity_title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`,`pole_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_activity_pole_idx` (`pole_id`),
  CONSTRAINT `fk_activity_pole` FOREIGN KEY (`pole_id`) REFERENCES `pole` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (9,'Pack « micro-jardin » : installation de bacs à hauteur chez les particuliers avec plantes de leur choix.','vegetal-services-01.jpeg',2,'Pack \"micro-jardins\"'),(10,'Pack « jardin des senteurs » :  préparation et mise à disposition de bacs à herbes aromatiques.','vegetal-services-02.jpeg',2,'Pack \"jardin des senteurs\"'),(11,'Gestion des déchets verts :  collecte des branches coupées, des feuilles, des déchets alimentaires pour compost…','vegetal-services-03.jpg',2,'Gestion des déchets verts'),(12,'Gardiennage de plantes pendant les congés ou mise en serre en hiver.','vegetal-services-04.jpg',2,'Gardiennage de plantes'),(13,'Location de petit outillage','recyclerie-services-01.jpeg',3,'Location de petit outillage'),(14,'Matériauthèque : accès à une matériauthèque où vous pouvez trouver à moindre coût des matériaux de réemploi','recyclerie-services-02.jpeg',3,'Matériautèque'),(15,'Ateliers d’upcycling : des ateliers d’upcycling (relooking ou détournement d’objets) dont le planning et les tarifs figurent ci-après.','recyclerie-services-03.jpg',3,'Ateliers d\'upcycling'),(16,'\nServices aux particuliers : déplacements sur la commune, petits travaux d’entretien, préparation de repas à domicile, soin et sortie d’animaux de compagnie, courses ou retrait de drive, compagnie ou accompagnement lors de promenades, après-midi jeux, nettoyage de véhicules, coursier, débarras de déchets verts ou d’encombrant, vide maison, aide à l’utilisation de l’informatique…\n','conciergerie-services-01.jpg',1,'Services aux particuliers'),(17,'Services aux entreprises : service de coursier, livraisons clients, débarras des emballage, nettoyage de chantiers ou véhicules, voiturier, entretien des locaux avec des produits non polluants et respectueux de l’environnement, mise à disposition de personnel en renfort à titre ponctuel…','conciergerie-services-02.jpg',1,'Services aux collectivités'),(18,'Services aux collectivités : entretien du cimetière, entretien des chemins de randonnée et des bords de Cher, ambassadeurs de tri auprès des usagers de la déchetterie ou des entreprise, mise à disposition de personnel en renfort à titre ponctuel…','conciergerie-services-03.jpg',1,'Services aux entreprises');
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_email` varchar(254) NOT NULL,
  `admin_password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `admin_email_UNIQUE` (`admin_email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (10,'test@test.fr','$argon2id$v=19$m=65536,t=5,p=1$slq3b9iC016UctE2ATQGFg$Z4jfKbJNjA1NBB+huTfnWlxIL0C07qs9R6HLvngDzYs'),(11,'test2@test.fr','$argon2id$v=19$m=65536,t=5,p=1$JKHNZv3WkKQ0uHM8SJovjQ$kyiu0FwuoG4Ni7x+Oq+q3sVL/dUviR47+xwdaNeuyOQ');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article_name` varchar(200) DEFAULT NULL,
  `article_img` varchar(200) DEFAULT NULL,
  `article_desc` text,
  `article_link` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `concept` VALUES (1,NULL,NULL,'UNE ENTREPRISE (PAS) COMME LES AUTRES À BLÉRÉ (INDRE ET LOIRE)','Engagée dans le développement durable et local, proche des acteurs du territoire','Lien vers le site Territoire Zéro Chômeur de Longue Durée','banner.jpg',NULL,NULL,NULL,'Horaires d’ouverture : du lundi au samedi de 8h30 à 17h','jardin.jpg','recolte.jpg','bag.jpg','LA BOÎTE D’À CÔTÉ est une entreprise à but d’emploi, proche de son territoire, créée dans le cadre de l’expérimentation Territoire Zéro Chômeur de Longue Durée.','Cette expérimentation, en cours depuis 2016, se fonde sur trois principes : permettant de penser qu’il est possible de supprimer le chômage de longue durée à l’échelle des territoires :','Personne n’est inemployable lorsque l’emploi est adapté aux capacités et aux compétences des personnes.','Ce n’est pas le travail qui manque : Un grand nombre de travaux utiles, d’une grande diversité, restent à réaliser.','Ce n’est pas l’argent qui manque : la privation d’emploi coûte plus cher que la production d’emploi.','Ainsi, il paraît possible de supprimer le chômage de longue durée à l’échelle des territoires.','Tel est l’engagement de LA BOÎTE D’À CÔTÉ, entreprise à but d’emploi* de forme associative dont l’objectif est d’employer, d’ici 2027, jusqu’à 130 Personnes Privées Durablement d’Emploi (PPDE).','Les emplois qu’elle produit sont dits supplémentaires ou complémentaires : ils n’entrent pas en concurrence des emplois existants sur le territoire et viennent en soutien du tissu économique local.','(*) Entreprise à but d’emploi (EBE) : entreprise de l’économie sociale et solidaire dont la fonction première est de produire des emplois adaptés aux personnes qu’elle embauche, tant au niveau du contenu du poste qu’en matière de temps de travail.');
/*!40000 ALTER TABLE `concept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_mail` varchar(254) DEFAULT NULL,
  `contact_phone` varchar(20) DEFAULT NULL,
  `contact_address` varchar(200) DEFAULT NULL,
  `contact_img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'boitedacote@gmail.com','06 06 06 06 06','1 rue du chemin, 37150 Bléré',NULL),(2,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `member_img` varchar(200) DEFAULT NULL,
  `member_name` text,
  `member_role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `id_UNIQUE` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'1634579158928bac_female_avatar.png','Sylvie Vannier','Animatrice recyclerie'),(2,'1634219953589bac_male_avatar.png','Thierry Petonnet','Directeur - Animateur conciergerie'),(3,'1634219918860bac_female_avatar.png','Hélène Ferreira','Animatrice pôle végétal');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partner` (
  `partner_id` int NOT NULL AUTO_INCREMENT,
  `partner_img` varchar(200) DEFAULT NULL,
  `partner_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`partner_id`),
  UNIQUE KEY `id_UNIQUE` (`partner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner`
--

LOCK TABLES `partner` WRITE;
/*!40000 ALTER TABLE `partner` DISABLE KEYS */;
INSERT INTO `partner` VALUES (1,'1634597779758mairiedeblere.png','Commune de Bléré'),(2,'1634627952081Communauté_de_communes_de_Bléré_Val_de_Cher.png','Communauté de Communes Bléré-Val de Cher'),(3,'1634628321229logo_touraine_dpt_bleu.png','Département d\'Indre-et-Loire'),(4,'1634628642059Region_Centre_Val_de_Loire.png','Région Centre-Val de Loire'),(5,NULL,'CRI (Château Renault Insertion)'),(6,NULL,'Association La Main Tendue'),(7,'1634629134321pole-emploi.png','Pôle Emploi'),(8,NULL,'Chambres consulaires'),(9,'','Rotary club d’Amboise');
/*!40000 ALTER TABLE `partner` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pole`
--

LOCK TABLES `pole` WRITE;
/*!40000 ALTER TABLE `pole` DISABLE KEYS */;
INSERT INTO `pole` VALUES (1,'Pôle Conciergerie','La Conciergerie','concierge-bell','\rmet à la disposition des habitants, collectivités et entreprises de la communauté de communes Bléré-Val de Cher (autour de Chenonceaux) une conciergerie territoriale aux multiples services.','conciergerie-banner.jpg','Une adhésion annuelle de 5 € à notre association vouspermet d’accéder à l’ensemble des services dont les tarifs sont détaillés ci-après. Le coût de nos services ou travaux à domicile donne droit, pour les particuliers, à réduction d’impôt.\nAu-delà de services généraux répertoriés ci-dessous, nous pouvons nous adapter vos besoins.\n\nPour toute demande, notre équipe vous accueille au 02 00 70 07 00','conciergerie-func.jpeg','02 00 70 07 00','bonjour@laboitedacote.fr','conciergerie-mini.jpg','Services aux particuliers et aux entreprises'),(2,'Pôle Végétal','Pôle Végétal','leaf','se sent proche de la nature et du végétal. À ce titre, elle propose une activité grands jardins qui se déploie dans trois domaines complémentaires et utiles au territoire, à ses habitants et à son développement touristique.','vegetal-banner.jpeg','Mise en culture d’espaces inutilisés, proches des bords du Cher avec une visée pédagogique pour les salariés de La boîte d’à côté et les visiteurs. Habillage de la  zone de végétaux et de senteurs, tout en montrant différentes techniques de culture adaptées à nos modes de vie et à tout public : permaculture, culture sur lasagnes, culture à mi-hauteur, etc.','vegetal-func.jpeg','02 00 70 07 00 ','bonjour@laboitedacote.fr','vegetal-mini.jpg','Grands jardins et maraîchage'),(3,'Pôle Recyclerie','La Recyclerie','tools','En partenariat avec le SMICTOM et la Communauté de Communes Bléré-Val de Cher','recyclerie-banner.jpeg','LA BOÎTE D’À CÔTÉ c’est aussi une recyclerie créative qui récupère les objets dont se séparent leurs propriétaires. Notre équipe les brique, les répare, les chouchoute, les transforme ou les détourne afin de leur offrir une nouvelle vie et de les proposer à la vente dans notre magasin ou sur notre boutique en ligne (lien hypertexte). Nous reprenons également les outils en état de fonctionnement, les pots de peinture ou autres matériaux de décoration ou bricolage entamés pouvant être réemployés, les instruments de musique, les chutes de tissu ou vêtements ne pouvant plus être portés. Nous ne prenons pas : les gros appareils électroménagers, les vêtements qui peuvent être encore portés ; nous pouvons néanmoins vous orienter vers d’autres partenaires du réemploi. Dépôt dans nos locaux / chez vous, aux horaires d’ouverture et sur rendez-vous au 02 00 70 07 00','recyclerie-func.jpeg','02 00 70 07 00 ','bonjour@laboitedacote.fr','recyclerie-mini.jpg','Deuxième vie et créativité');
/*!40000 ALTER TABLE `pole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_net`
--

DROP TABLE IF EXISTS `social_net`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_net` (
  `id` int NOT NULL AUTO_INCREMENT,
  `social_name` varchar(45) DEFAULT NULL,
  `social_icon` varchar(200) DEFAULT NULL,
  `social_icon_alt` varchar(200) DEFAULT NULL,
  `social_link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_net`
--

LOCK TABLES `social_net` WRITE;
/*!40000 ALTER TABLE `social_net` DISABLE KEYS */;
INSERT INTO `social_net` VALUES (1,'facebook','fbIcon.svg','fbAtlIcon.svg','https://www.facebook.com/zerochomeurLD/'),(2,'instagram','instaIcon.svg','instaAtlIcon.svg','https://www.instagram.com/tzcld_3_cites/?hl=fr');
/*!40000 ALTER TABLE `social_net` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-22 14:06:59
