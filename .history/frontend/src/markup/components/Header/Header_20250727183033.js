import React from 'react'

function Header() {
  return (
    <div>
          <div id="header-container"></div>
    
    <!-- Main content -->
    <div id="home-content">
      <!-- Hero Section -->
      <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to DTU Management System</h1>
              <p class="text-lg mb-8 opacity-90">A comprehensive platform for students, faculty, and administrators to manage university resources efficiently.</p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button class="bg-white text-blue-700 font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg">Get Started</button>
                <button class="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">Learn More</button>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
              <svg class="w-full max-w-md" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="100" width="400" height="250" rx="20" fill="#ffffff" opacity="0.1"/>
                <rect x="80" y="130" width="340" height="40" rx="8" fill="#ffffff" opacity="0.2"/>
                <rect x="80" y="190" width="150" height="140" rx="8" fill="#ffffff" opacity="0.2"/>
                <rect x="250" y="190" width="170" height="60" rx="8" fill="#ffffff" opacity="0.2"/>
                <rect x="250" y="270" width="170" height="60" rx="8" fill="#ffffff" opacity="0.2"/>
                <circle cx="120" cy="70" r="50" fill="#ffffff" opacity="0.1"/>
                <circle cx="400" cy="60" r="30" fill="#ffffff" opacity="0.1"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="feature-card bg-white p-6 rounded-xl shadow-md">
              <div class="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Course Management</h3>
              <p class="text-gray-600">Easily register for courses, access materials, and track your academic progress all in one place.</p>
            </div>
            
   
            <div class="feature-card bg-white p-6 rounded-xl shadow-md">
              <div class="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Assignment Tracking</h3>
              <p class="text-gray-600">Never miss a deadline with our comprehensive assignment tracking and notification system.</p>
            </div>
            
    
            <div class="feature-card bg-white p-6 rounded-xl shadow-md">
              <div class="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Communication Hub</h3>
              <p class="text-gray-600">Connect with professors and peers through our integrated messaging and discussion forums.</p>
            </div>
          </div>
        </div>
      </section>


      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Latest Announcements</h2>
          <div class="space-y-6 max-w-4xl mx-auto">
           
            <div class="announcement-card bg-white p-6 rounded-lg shadow-sm">
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-semibold text-gray-800">Fall Semester Registration Open</h3>
                <span class="text-sm text-gray-500">June 15, 2023</span>
              </div>
              <p class="mt-3 text-gray-600">Registration for the Fall 2023 semester is now open. Please log in to your student portal to register for courses before July 31st.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
            
      
            <div class="announcement-card bg-white p-6 rounded-lg shadow-sm">
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-semibold text-gray-800">New Library Resources Available</h3>
                <span class="text-sm text-gray-500">June 10, 2023</span>
              </div>
              <p class="mt-3 text-gray-600">The university library has added new digital resources for engineering and computer science students. Access them through your student portal.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
            
            
            <div class="announcement-card bg-white p-6 rounded-lg shadow-sm">
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-semibold text-gray-800">Campus Maintenance Schedule</h3>
                <span class="text-sm text-gray-500">June 5, 2023</span>
              </div>
              <p class="mt-3 text-gray-600">Scheduled maintenance will take place in the Engineering building from June 20-25. Some labs will be temporarily unavailable during this period.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
          </div>
        </div>
      </section>


      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">DTU at a Glance</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     
            <div class="stats-card bg-blue-50 p-6 rounded-xl text-center">
              <div class="text-4xl font-bold text-blue-700 mb-2">15,000+</div>
              <p class="text-gray-600 font-medium">Students</p>
            </div>
  
            <div class="stats-card bg-blue-50 p-6 rounded-xl text-center">
              <div class="text-4xl font-bold text-blue-700 mb-2">1,200+</div>
              <p class="text-gray-600 font-medium">Faculty Members</p>
            </div>
            
      
            <div class="stats-card bg-blue-50 p-6 rounded-xl text-center">
              <div class="text-4xl font-bold text-blue-700 mb-2">200+</div>
              <p class="text-gray-600 font-medium">Courses Offered</p>
            </div>
            

            <div class="stats-card bg-blue-50 p-6 rounded-xl text-center">
              <div class="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <p class="text-gray-600 font-medium">Research Labs</p>
            </div>
          </div>
        </div>
      </section>


    </div>

      
    </div>
  )
}

export default Header
