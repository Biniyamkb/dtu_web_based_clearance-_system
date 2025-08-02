-- Users table
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) UNIQUE NOT NULL,
  `phone_number` varchar(15),              
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `first_name` varchar(255),
  `father_name` varchar(255)
  PRIMARY KEY (user_id)
) ENGINE=InnoDB;

-- Students table
CREATE TABLE IF NOT EXISTS `students` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `phone_number` varchar(15),               
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (student_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
) ENGINE=InnoDB;

-- Clearance Requests table
CREATE TABLE IF NOT EXISTS `clearance_requests` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `request_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (request_id),
  FOREIGN KEY (student_id) REFERENCES students(student_id)
) ENGINE=InnoDB;

-- Departments table
CREATE TABLE IF NOT EXISTS `departments` (
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(100) UNIQUE NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (department_id)
) ENGINE=InnoDB;

-- Clearance Approvals table
CREATE TABLE IF NOT EXISTS `clearance_approvals` (
  `approval_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `approval_status` varchar(50) NOT NULL,
  `approval_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `comments` TEXT,
  PRIMARY KEY (approval_id),
  FOREIGN KEY (request_id) REFERENCES clearance_requests(request_id),
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
) ENGINE=InnoDB;