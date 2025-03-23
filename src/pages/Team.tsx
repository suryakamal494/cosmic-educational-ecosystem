
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Star, Users, Rocket, Globe, Brain } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import { motion } from 'framer-motion';

const Team = () => {
  // Using the provided images
  const suryaImage = "/lovable-uploads/5bc0243f-8a22-4a15-b822-217c965a0ec8.png";
  const yuvarajuImage = "/lovable-uploads/75d2629a-b1b1-474d-bdc5-d882d9980006.png";
  const jamesImage = "/lovable-uploads/d21584d8-0b9c-416d-88f9-c73f29c479d7.png";
  const josephImage = "/lovable-uploads/c77a7e27-a377-44c4-b774-4b3722ade982.png";
  const blairImage = "/lovable-uploads/9f6d891a-07cc-406a-964a-1e398d0a5290.png";
  const kenImage = "/lovable-uploads/397eedea-3e25-4583-8bd2-c29f136d010e.png";

  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-32 pb-20 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-80 bg-space-purple/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-1/2 h-80 bg-space-neon/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Star className="h-12 w-12 text-space-purple animate-pulse" />
                  <div className="absolute inset-0 bg-space-purple/30 blur-xl rounded-full animate-pulse-slow"></div>
                </div>
              </div>
              
              <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Command Crew
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-space-purple to-space-neon/50 mx-auto mb-8"></div>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Meet the visionaries, educators, and space enthusiasts dedicated to inspiring the next generation of space pioneers.
              </p>
            </motion.div>
            
            {/* Leadership Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-16 bg-space-purple/50"></div>
                <h2 className="text-3xl font-orbitron uppercase tracking-wider">Leadership</h2>
                <div className="h-[1px] w-16 bg-space-purple/50"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <TeamMember 
                  name="Suryakamal B."
                  title="Founder & CEO"
                  bio="Suryakamal, Founder & CEO of iSpace, is an education pioneer passionate about redefining learning through hands-on, immersive experiences. Driven by the need to equip students for a future in STEM, technology, and space exploration, he launched iSpace to transcend conventional education and cultivate creativity, critical thinking, and problem-solving abilities. He understands the pivotal role space education plays in inspiring young minds, using practical exposure to astronomy, engineering, and space sciences to build curiosity, adaptability, and resilience—essential traits for thriving in a dynamic world. At iSpace, Suryakamal is dedicated to equipping students with the skills to innovate, discover, and spearhead the next wave of space trailblazers."
                  profileLink="https://www.linkedin.com/in/suryakamal-bourisetty-8937a6112/"
                  imageUrl={suryaImage}
                />
                
                <TeamMember 
                  name="Dr. Yuvaraju Chinnam, Ph.D."
                  title="Head Innovation and Strategy"
                  bio="Dr. Yuvaraju Chinnam, Co-Founder and Head of Strategy and Innovation at iSpace, channels his passion for nurturing space enthusiasts into groundbreaking educational programs. With a PhD and decades of experience in teaching and student mentorship, he has shaped academic initiatives globally, including as a Visiting Scholar at PennState University and a steering committee member at IEEE TALE 2023 in New Zealand. His diverse expertise in education and innovation drives iSpace's mission to inspire and equip the next generation of space scientists. At iSpace, Dr. Chinnam crafts strategic visions that blend hands-on learning with cutting-edge space exploration."
                  profileLink="https://www.linkedin.com/in/dr-yuvaraju-chinnam-phd-bb228557/"
                  imageUrl={yuvarajuImage}
                />
              </div>
            </motion.section>
            
            {/* Mentors & Advisors Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-16 bg-space-purple/50"></div>
                <h2 className="text-3xl font-orbitron uppercase tracking-wider">Mentors & Advisors</h2>
                <div className="h-[1px] w-16 bg-space-purple/50"></div>
              </div>
              
              <div className="grid gap-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <TeamMember 
                    name="Dr. Joseph Martin Stevenson"
                    title="Chief Mentor, Curriculum Design"
                    bio="Dr. Joseph Martin Stevenson brings a wealth of expertise to iSpace, shaping its innovative curriculum with decades of leadership in higher education. Holding a PhD in Curriculum and Instructional Leadership from the University of Oregon, along with advanced training from Harvard, Stanford, and Yale, he is a renowned futurist and academic visionary. As a seasoned provost, professor, and founder of the Executive PhD Program, he has authored over 20 books and advised institutions worldwide on academic excellence. Currently a Distinguished Scholar at Bethune-Cookman and Wilberforce Universities, Dr. Stevenson leverages his extensive experience to design cutting-edge, student-centered space education programs at iSpace."
                    profileLink="#"
                    imageUrl={josephImage}
                  />
                  
                  <TeamMember 
                    name="Dr. James Samuel Maddirala"
                    title="Mentor, Global Partnerships"
                    bio="James Samuel Maddirala joins iSpace as a Mentor, bringing 50 years of expertise in educational administration and global program management to foster international partnerships. With a PhD in Educational Policy & Management from the University of Oregon, he has served as Vice Provost at the University of the Virgin Islands for the past three years, spearheading graduate programs and global education initiatives. His extensive experience includes developing Study Abroad programs and managing offshore campuses in India, Nepal, and Thailand. A multilingual leader fluent in English and three Indian languages, James is passionate about connecting institutions worldwide. At iSpace, he leverages his global network and strategic vision to enhance our international collaborations."
                    profileLink="https://www.thealumniassociation.com/home/4839394-james-maddirala/profile"
                    imageUrl={jamesImage}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-10 mt-10">
                  <TeamMember 
                    name="Dr. Blair M.T. Odo"
                    title="Mentor for Girls' Education & Women Empowerment"
                    bio="Dr. Blair M.T. Odo, Mentor for Girls' Education & Women Empowerment at iSpace, is a distinguished leader in cross-cultural education and global leadership. With a Ph.D. in Educational Policy & Management from the University of Oregon, she was the first female president of JAIMS (Japan-America Institute of Management Science) and has over 25 years of experience in academic leadership. Her expertise in international education, leadership training, and women's empowerment makes her a vital force at iSpace, where she is committed to advancing STEM opportunities for young girls and fostering leadership among women in space education."
                    profileLink="#"
                    imageUrl={blairImage}
                  />
                  
                  <TeamMember 
                    name="Dr. Ken Kempner"
                    title="Advisor and Head of Inclusivity"
                    bio="Dr. Ken Kempner, Advisor and Head of Inclusivity at iSpace, is a distinguished scholar with a Ph.D. in Educational Psychology from the University of Oregon. As a Professor Emeritus at Southern Oregon University, he has served as Dean of Social Sciences and has been a Fulbright Scholar in Brazil, a fellow in Mexico, and a Yamada Scholar in Japan. Dr. Kempner's research focuses on higher education's role in developing countries, particularly regarding equity and social justice for underrepresented groups. His recent work includes studying the role of women faculty in Saudi Arabian universities. At iSpace, Dr. Kempner will leverage his extensive experience to promote inclusivity and diversity within our programs, ensuring equitable access to space education for all students."
                    profileLink="https://news.sou.edu/2020/05/sou-ken-kempner-studies-role-women-faculty-saudi-universities/"
                    imageUrl={kenImage}
                  />
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
