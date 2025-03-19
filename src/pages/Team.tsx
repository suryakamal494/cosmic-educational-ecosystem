
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Star, Users } from 'lucide-react';
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
                  title="CEO"
                  bio="Surya Kamal is a seasoned educator and mentor with extensive experience in guiding students toward competitive academic success in the K-12 segment. Having previously led IIT-JEE and NEET programs at esteemed institutions, he has played a pivotal role in shaping the careers of aspiring engineers and medical professionals."
                  profileLink="#"
                  imageUrl={suryaImage}
                />
                
                <TeamMember 
                  name="Dr. Yuvaraju Chinnam, Ph.D."
                  title="Head Strategy and Innovation"
                  bio="Co-Founder of iSPACE and a visionary leader in STEM education, space technology, and innovation-driven learning. With a strong background in research, academia, and industry collaborations, he has been instrumental in designing cutting-edge educational programs that bridge the gap between theoretical knowledge and hands-on experience."
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
                    name="Dr. Joseph M. Stevenson"
                    title="Chief Mentor, Curriculum Design"
                    bio="Dr. Stevenson brings decades of experience in educational leadership and curriculum development with a focus on STEM fields. His innovative approaches to teaching space sciences have transformed how students engage with complex concepts, making them accessible and exciting for learners of all ages."
                    profileLink="#"
                    imageUrl={josephImage}
                  />
                  
                  <TeamMember 
                    name="Dr. James Maddirala"
                    title="Vice President Global Partnerships"
                    bio="A distinguished educator, researcher, and global academic leader with extensive experience in STEM education, international collaborations, and space science initiatives. As a Distinguished Speaker for iSPACE's Young Scientist Initiative, he brings valuable expertise in higher education, research-driven learning, and interdisciplinary problem-solving."
                    profileLink="https://www.thealumniassociation.com/home/4839394-james-maddirala/profile"
                    imageUrl={jamesImage}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-10 mt-10">
                  <TeamMember 
                    name="Dr. Blair Odo"
                    title="Girl Education and Empowerment"
                    bio="Dr. Odo specializes in creating inclusive STEM opportunities with a particular focus on empowering young women in science and space exploration. Her programs have helped countless girls discover their potential in traditionally male-dominated fields through mentorship, hands-on projects, and confidence-building initiatives."
                    profileLink="#"
                    imageUrl={blairImage}
                  />
                  
                  <TeamMember 
                    name="Dr. Ken Kempner"
                    title="Advisor & Incharge for Inclusivity"
                    bio="An education strategist, researcher, and global advocate for academic excellence with a strong focus on STEM education, leadership, and faculty development. His research on higher education systems and diversity in academia aligns with iSPACE's mission to create inclusive and innovative learning experiences in space education."
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
