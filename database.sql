-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 24, 2024 at 09:47 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
CREATE TABLE IF NOT EXISTS `doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `birthDate` varchar(10) NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  `position` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `birthDate`, `imgUrl`, `position`) VALUES
(1, 'Zoe', '2024-04-09', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Farts-culture%2Fdada-115169154%2F&psig=AOvVaw3uf8eUnIBGt08diBUU0xHM&ust=1714059160226000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjo_I2W24UDFQAAAAAdAAAAABAD', 'docotrs dadadwd adawda'),
(4, 'joe', '2024-04-09', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Farts-culture%2Fdada-115169154%2F&psig=AOvVaw3uf8eUnIBGt08diBUU0xHM&ust=1714059160226000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjo_I2W24UDFQAAAAAdAAAAABAD', 'docotrs dadadwd adawda'),
(5, 'max', '2024-04-09', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Farts-culture%2Fdada-115169154%2F&psig=AOvVaw3uf8eUnIBGt08diBUU0xHM&ust=1714059160226000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjo_I2W24UDFQAAAAAdAAAAABAD', 'docotrs dadadwd adawda');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
