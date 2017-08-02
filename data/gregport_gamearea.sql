-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 26, 2017 at 04:16 AM
-- Server version: 5.5.51-38.2
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gregport_gamearea`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbaccount`
--

CREATE TABLE IF NOT EXISTS `tbaccount` (
  `id_account` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_game` int(11) NOT NULL,
  `result` varchar(2000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbaccount`
--

INSERT INTO `tbaccount` (`id_account`, `id_user`, `id_game`, `result`) VALUES
(1, 1, 1, 'Win'),
(2, 1, 2, 'lose'),
(3, 1, 3, 'win'),
(4, 1, 4, 'lose');

-- --------------------------------------------------------

--
-- Table structure for table `tbcontent`
--

CREATE TABLE IF NOT EXISTS `tbcontent` (
  `id_content` int(11) NOT NULL,
  `page` varchar(2000) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(2000) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbcontent`
--

INSERT INTO `tbcontent` (`id_content`, `page`, `title`, `content`, `img`) VALUES
(1, 'Home', 'Home', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', '0'),
(2, 'Contact Us', 'Contact Us', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', '0'),
(3, 'Free Games', 'Free Games', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ''de Finibus Bonorum et Malorum'' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', '0'),
(4, 'Registration', 'Registration', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '0'),
(5, 'Terms and Conditions', 'Terms and Conditions', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '0'),
(6, 'Recommendations', 'Recommendations', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', '0'),
(7, 'Real Games', 'Real Games', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable.', '0'),
(8, 'account', 'Account', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbgames`
--

CREATE TABLE IF NOT EXISTS `tbgames` (
  `id_games` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `shorts` varchar(2000) COLLATE utf8_unicode_ci NOT NULL,
  `descriptions` text COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `home` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbgames`
--

INSERT INTO `tbgames` (`id_games`, `name`, `shorts`, `descriptions`, `img`, `type`, `home`) VALUES
(1, 'Sparta War of Empires. Start', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'sparta-war-of-empires.png', 'free', 1),
(2, 'Apple Shooter', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'apple-shooter.png', 'free', 1),
(3, 'Big Farm', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'big-farm.png', 'free', 1),
(4, 'Cs Portable', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'cs-portable.png', 'free', 1),
(5, 'Douchebag Workout-2', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'douchebag-workout-2.png', 'free', 1),
(6, 'Dreamfields', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'dreamfields.png', 'free', 1),
(7, 'Family Barn', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'family-barn.png', 'free', 1),
(8, 'Gunblood', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'gunblood.png', 'free', 1),
(9, 'Happy Wheels', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'happy-wheels.png', 'free', 0),
(10, 'Madalin Stunt Cars-2', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'madalin-stunt-cars-2.png', 'free', 0),
(11, 'Mopeio', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'mopeio.png', 'free', 0),
(12, 'Moto X3m-3', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'moto-x3m-3.png', 'free', 0),
(13, 'Moto X3m', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'moto-x3m.png', 'free', 0),
(14, 'Royal Story', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'royal-story.png', 'free', 0),
(15, 'Sparta War of Empires', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'sparta-war-of-empires.png', 'free', 0),
(16, 'Whack Your Ex', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'whack-your-ex.png', 'free', 0),
(17, 'Sparta War of Empires. Start', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'sparta-war-of-empires.png', 'real', 0),
(18, 'Happy Wheels', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'happy-wheels.png', 'real', 0),
(19, 'Apple Shooter', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'apple-shooter.png', 'real', 0),
(20, 'Big Farm', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'big-farm.png', 'real', 0),
(21, 'Cs Portable', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'cs-portable.png', 'real', 0),
(22, 'Douchebag Workout-2', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'douchebag-workout-2.png', 'real', 0),
(23, 'Dreamfields', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'dreamfields.png', 'real', 0),
(24, 'Madalin Stunt Cars-2', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'madalin-stunt-cars-2.png', 'real', 0),
(25, 'Mopeio', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'mopeio.png', 'real', 0),
(26, 'Royal Story', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'royal-story.png', 'real', 0),
(27, 'Sparta War of Empires', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'sparta-war-of-empires.png', 'real', 0),
(28, 'Whack Your Ex', 'Lorem Ipsum is simply dummy text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  PageMaker including versions of Lorem Ipsum.', 'whack-your-ex.png', 'real', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbhomewinners`
--

CREATE TABLE IF NOT EXISTS `tbhomewinners` (
  `id_winners` int(11) NOT NULL,
  `name` varchar(2000) NOT NULL,
  `game` varchar(2000) NOT NULL,
  `price` varchar(250) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbhomewinners`
--

INSERT INTO `tbhomewinners` (`id_winners`, `name`, `game`, `price`) VALUES
(1, 'Grego1', 'Game1', '111'),
(2, 'Grego2', 'Game2', '121'),
(3, 'Grego3', 'Game3', '131'),
(4, 'Grego4', 'Game4', '141'),
(5, 'Grego5', 'Game5', '151'),
(6, 'Grego6', 'Game6', '161');

-- --------------------------------------------------------

--
-- Table structure for table `tbnews`
--

CREATE TABLE IF NOT EXISTS `tbnews` (
  `id_news` int(11) NOT NULL,
  `news` text NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbnews`
--

INSERT INTO `tbnews` (`id_news`, `news`) VALUES
(1, 'Lorem Ipsum is simply dummy text'),
(2, 'Lorem Ipsum is simply dummy text'),
(3, 'Lorem Ipsum is simply dummy text'),
(4, 'Lorem Ipsum is simply dummy text'),
(5, 'Lorem Ipsum is simply dummy text');

-- --------------------------------------------------------

--
-- Table structure for table `tbrecomendations`
--

CREATE TABLE IF NOT EXISTS `tbrecomendations` (
  `id` int(11) NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `color` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'yellow'
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbrecomendations`
--

INSERT INTO `tbrecomendations` (`id`, `text`, `color`) VALUES
(1, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', 'yellow'),
(2, 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.', 'yellow'),
(3, 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'yellow'),
(4, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English.', 'yellow'),
(5, 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'yellow');

-- --------------------------------------------------------

--
-- Table structure for table `tbusers`
--

CREATE TABLE IF NOT EXISTS `tbusers` (
  `id_user` int(11) NOT NULL,
  `fname` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(2000) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbusers`
--

INSERT INTO `tbusers` (`id_user`, `fname`, `address`, `city`, `email`, `password`, `phone`, `username`) VALUES
(1, 'Greg Piev', 'Shalom', 'Ata', 'gregpiev@gmail.com', 'Gp123456', '555-555-1234', 'gregp'),
(2, 'Gronih Mauser', 'Sherwood', 'Malbruk', 'gronih@walla.co.il', 'Gr123456', '555-555-1234', 'gronih'),
(3, 'Turan Dot', 'Prospekto', 'Milano', 'turan@dot.com', 'Tr123456', '555-555-1234', 'turandot'),
(4, 'Gog Zila', 'Some where', 'Some one', 'god@zila.com', 'Gz123zil', '555-555-1234', 'Godzila'),
(5, 'Itaro Kozino', 'Durtiol', 'Fenistilo', 'itaro@kozino.com', 'Itaro123', '555-456-5678', 'Itaro'),
(6, 'Jerry', 'aaaaaa', 'bbbbbb', 'jerry@fff.com', 'Jr12345', '111-222-3333', 'jerry');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbaccount`
--
ALTER TABLE `tbaccount`
  ADD PRIMARY KEY (`id_account`);

--
-- Indexes for table `tbcontent`
--
ALTER TABLE `tbcontent`
  ADD PRIMARY KEY (`id_content`);

--
-- Indexes for table `tbgames`
--
ALTER TABLE `tbgames`
  ADD PRIMARY KEY (`id_games`);

--
-- Indexes for table `tbhomewinners`
--
ALTER TABLE `tbhomewinners`
  ADD PRIMARY KEY (`id_winners`);

--
-- Indexes for table `tbnews`
--
ALTER TABLE `tbnews`
  ADD PRIMARY KEY (`id_news`);

--
-- Indexes for table `tbrecomendations`
--
ALTER TABLE `tbrecomendations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbusers`
--
ALTER TABLE `tbusers`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbaccount`
--
ALTER TABLE `tbaccount`
  MODIFY `id_account` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbcontent`
--
ALTER TABLE `tbcontent`
  MODIFY `id_content` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tbgames`
--
ALTER TABLE `tbgames`
  MODIFY `id_games` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `tbhomewinners`
--
ALTER TABLE `tbhomewinners`
  MODIFY `id_winners` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tbnews`
--
ALTER TABLE `tbnews`
  MODIFY `id_news` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbrecomendations`
--
ALTER TABLE `tbrecomendations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbusers`
--
ALTER TABLE `tbusers`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
