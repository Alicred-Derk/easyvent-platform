-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2025 at 06:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `platform_ems_schema`
--

-- --------------------------------------------------------

--
-- Table structure for table `packages_tbl`
--

CREATE TABLE `packages_tbl` (
  `id` int(11) NOT NULL,
  `id_service` int(11) NOT NULL,
  `package_name` text NOT NULL,
  `guest_no` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `inclusions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`inclusions`)),
  `meal_sets` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`meal_sets`)),
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services_tbl`
--

CREATE TABLE `services_tbl` (
  `id` int(11) NOT NULL,
  `category` text NOT NULL,
  `property_name` text NOT NULL,
  `property_description` text NOT NULL,
  `images_url` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '"[]"' CHECK (json_valid(`images_url`)),
  `highlights` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '"[]"' CHECK (json_valid(`highlights`)),
  `amenities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '"[]"' CHECK (json_valid(`amenities`)),
  `location` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '"{}"' CHECK (json_valid(`location`)),
  `packages_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '"[]"' CHECK (json_valid(`packages_list`)),
  `status` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_tbl`
--

CREATE TABLE `users_tbl` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `personal_name` text NOT NULL,
  `last_name` text NOT NULL,
  `display_picture` text NOT NULL,
  `bio` text NOT NULL,
  `date_of_birth` date NOT NULL DEFAULT current_timestamp(),
  `status` text NOT NULL,
  `role` text NOT NULL,
  `contacts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '"[]"' CHECK (json_valid(`contacts`)),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_tbl`
--

INSERT INTO `users_tbl` (`id`, `email`, `password`, `personal_name`, `last_name`, `display_picture`, `bio`, `date_of_birth`, `status`, `role`, `contacts`, `created_at`) VALUES
(12, 'alicred08@gmail.com', '$2y$10$WN4ps.K54.xbuIPVRIqQSe0YWYqUWz3X26DgSlY1jEtzLB16sqrXW', 'Alicred', 'Derk', '68bdd03d89096_Messenger_creation_F58768EF-FA18-49C9-9A1B-9F360293E4DA.jpeg', 'Test biological', '1999-04-08', 'Active', 'Provider', '[{\"type\":\"Mobile\",\"value\":\"09072835691\"}]', '2025-09-07 18:20:59');

-- --------------------------------------------------------

--
-- Table structure for table `user_providers_tbl`
--

CREATE TABLE `user_providers_tbl` (
  `id_user` int(11) NOT NULL,
  `id_service` int(11) NOT NULL,
  `role` text NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `packages_tbl`
--
ALTER TABLE `packages_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services_tbl`
--
ALTER TABLE `services_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_tbl`
--
ALTER TABLE `users_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_providers_tbl`
--
ALTER TABLE `user_providers_tbl`
  ADD PRIMARY KEY (`id_user`,`id_service`),
  ADD KEY `id_user` (`id_user`,`id_service`),
  ADD KEY `id_service` (`id_service`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `packages_tbl`
--
ALTER TABLE `packages_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services_tbl`
--
ALTER TABLE `services_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_providers_tbl`
--
ALTER TABLE `user_providers_tbl`
  ADD CONSTRAINT `user_providers_tbl_ibfk_1` FOREIGN KEY (`id_service`) REFERENCES `services_tbl` (`id`),
  ADD CONSTRAINT `user_providers_tbl_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_tbl` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
