-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2025 at 04:30 AM
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
-- Table structure for table `bookings_tbl`
--

CREATE TABLE `bookings_tbl` (
  `id_user` int(11) NOT NULL,
  `id_service` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `package_item` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '\'{}\'',
  `status` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings_tbl`
--

INSERT INTO `bookings_tbl` (`id_user`, `id_service`, `id`, `package_item`, `status`, `created_at`) VALUES
(12, 6, 1, '{\"package_name\":\"Package 1 - Special Package\",\"no_guest\":\"10\",\"price\":\"12000\",\"inclusions\":[\"Lorem Ipsum is simply dummy text of the \",\"Lorem Ipsum is simply dummy text of the \"],\"meal_sets\":[{\"title\":\"Happy Meals\",\"meals\":[\"Burger\",\"Jolly Spag\",\"Fries\"]},{\"title\":\"Super Duper Happy Meals\",\"meals\":[\"Palabok\",\"Pampanga Sisig\",\"Red Horse Beer\"]}],\"index\":0}', 'Pending', '2025-09-11 01:40:45'),
(14, 6, 2, '{\"package_name\":\"Package 1 - Special Package\",\"no_guest\":\"10\",\"price\":\"12000\",\"inclusions\":[\"Lorem Ipsum is simply dummy text of the \",\"Lorem Ipsum is simply dummy text of the \"],\"meal_sets\":[{\"title\":\"Happy Meals\",\"meals\":[\"Burger\",\"Jolly Spag\",\"Fries\"]},{\"title\":\"Super Duper Happy Meals\",\"meals\":[\"Palabok\",\"Pampanga Sisig\",\"Red Horse Beer\"]}],\"index\":0}', 'Pending', '2025-09-11 01:45:19');

-- --------------------------------------------------------

--
-- Table structure for table `messages_tbl`
--

CREATE TABLE `messages_tbl` (
  `id_sender` int(11) NOT NULL,
  `id_receiver` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `isEdited` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

--
-- Dumping data for table `services_tbl`
--

INSERT INTO `services_tbl` (`id`, `category`, `property_name`, `property_description`, `images_url`, `highlights`, `amenities`, `location`, `packages_list`, `status`, `created_at`) VALUES
(6, 'Restaurant', 'Mc Donalds', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500', '[\"68c20e0f77079_hqdefault.jpg\",\"68c20e0f776e1_images.jpg\",\"68c20e0f77a4c_mcdonalds-exterior-in-the-philippines-2AW899G.jpg\",\"68c20e0f77cae_McDonalds-McSavers-800x533.jpg\",\"68c20e0f77ecc_nicechickenmcdo-side.png\"]', '[{\"title\":\"Lorem\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500\"},{\"title\":\"Lorem\",\"description\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500\"}]', '[\"Lorem Ipsum is simply dummy text of the printing \",\"Lorem Ipsum is simply dummy text of the printing\",\"Lorem Ipsum is simply dummy text of the printing\"]', '{\"province\":\"Palawan\",\"city\":\"City of Puerto Princesa \",\"barangay\":\"Santa Monica\",\"street\":\"Purok El Rancho\",\"zip_code\":\"5300\",\"geocode\":[9.754957367892748,118.74886388862966]}', '[{\"package_name\":\"Package 1 - Special Package\",\"no_guest\":\"10\",\"price\":\"12000\",\"inclusions\":[\"Lorem Ipsum is simply dummy text of the \",\"Lorem Ipsum is simply dummy text of the \"],\"meal_sets\":[{\"title\":\"Happy Meals\",\"meals\":[\"Burger\",\"Jolly Spag\",\"Fries\"]},{\"title\":\"Super Duper Happy Meals\",\"meals\":[\"Palabok\",\"Pampanga Sisig\",\"Red Horse Beer\"]}],\"index\":0},{\"package_name\":\"Package 2 - Wedding Anniversary Promo\",\"no_guest\":\"50\",\"price\":\"50000\",\"inclusions\":[\"Lorem Ipsum is simply dummy text\",\"Lorem Ipsum is simply dummy text \",\"Lorem Ipsum is simply dummy text \"],\"meal_sets\":[{\"title\":\"Happy Happy Meals\",\"meals\":[\"Burger\",\"Pizza\",\"Sisig Pork\"]}],\"index\":1}]', 'Published', '2025-09-11 00:54:30');

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
(12, 'alicred08@gmail.com', '$2y$10$WN4ps.K54.xbuIPVRIqQSe0YWYqUWz3X26DgSlY1jEtzLB16sqrXW', 'Alicred', 'Derkyyy', '68c200dc5e00c_placeholder.png', 'Test biological !!!', '1999-04-08', 'Active', 'Provider', '[{\"type\":\"Mobile\",\"value\":\"09072835691\"},{\"type\":\"Landline\",\"value\":\"455-87000\"}]', '2025-09-07 18:20:59'),
(14, 'derk@gmail.com', '$2y$10$KvpkQxDLIaDLFCI.WpXho.ZIbiqWQ/UCh.qiFA73sDx54RQRxyi3K', 'Derk', 'Iruma', '68c214465412c_placeholder (1).png', 'Test biot', '2004-03-09', 'Active', 'Customer', '[{\"type\":\"Mobile\",\"value\":\"09123456789\"}]', '2025-09-11 00:13:32');

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
-- Dumping data for table `user_providers_tbl`
--

INSERT INTO `user_providers_tbl` (`id_user`, `id_service`, `role`, `status`) VALUES
(12, 6, 'Admin', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings_tbl`
--
ALTER TABLE `bookings_tbl`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `bookings_tbl`
--
ALTER TABLE `bookings_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `packages_tbl`
--
ALTER TABLE `packages_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services_tbl`
--
ALTER TABLE `services_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
