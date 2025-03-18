
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Star, Award, Users } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import { motion } from 'framer-motion';

const Team = () => {
  // Using the provided images
  const suryaImage = "/lovable-uploads/5bc0243f-8a22-4a15-b822-217c965a0ec8.png";
  const yuvarajuImage = "/lovable-uploads/75d2629a-b1b1-474d-bdc5-d882d9980006.png";
  const jamesImage = "/lovable-uploads/d21584d8-0b9c-416d-88f9-c73f29c479d7.png";
  const tanyaImage = "https://www.tanyaknudsen.com/assets/images/tanya-knudsen.jpg";
  const elisabethImage = "https://media.licdn.com/dms/image/D5603AQGKlgR7Nl8Rmw/profile-displayphoto-shrink_800_800/0/1689188694398?e=2147483647&v=beta&t=tQaNJBTELECJrS_1ZlvPzn7hJnZgPXG-wPcwR0QVrGc";
  const kenImage = "https://media.licdn.com/dms/image/C5603AQEgtNj9z0KJYQ/profile-displayphoto-shrink_800_800/0/1517604913125?e=2147483647&v=beta&t=qM8B_z4DGDgGw-_hx3YTUzIjBCk3aIOmIYwMmZ_i9eQ";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block relative mb-4">
                <Users className="text-space-purple w-8 h-8 animate-pulse-glow" />
                <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h1 className="font-orbitron mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Command Crew
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries, educators, and space enthusiasts behind iSPACE who are dedicated to inspiring the next generation of space pioneers.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-space-blue-light/5 backdrop-blur-sm border border-space-purple/10 rounded-2xl p-8 shadow-lg mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <Award className="text-space-purple h-6 w-6" />
                <h2 className="text-2xl font-orbitron font-bold text-center">Leadership</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
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
            </motion.div>
            
            <motion.div 
              className="bg-space-blue-light/5 backdrop-blur-sm border border-space-purple/10 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <Star className="text-space-purple h-6 w-6" />
                <h2 className="text-2xl font-orbitron font-bold text-center">Mentors & Advisors</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <TeamMember 
                  name="Tanya Knudsen"
                  title="Expert in Creative Problem-Solving"
                  bio="Tanya Knudsen is an expert in creative problem-solving, helping individuals and organizations unlock innovation through structured thinking techniques. With a passion for fostering creativity, she provides workshops, training, and coaching to develop critical thinking, idea generation, and strategic problem-solving skills."
                  profileLink="https://www.tanyaknudsen.com/"
                  imageUrl={tanyaImage}
                />
                
                <TeamMember 
                  name="Elisabeth Morney, D.A."
                  title="STEM Education & Innovation Leader"
                  bio="An education and innovation leader specializing in STEM education, creative problem-solving, and global learning initiatives. With extensive experience in fostering interdisciplinary collaboration, she has played a key role in developing international educational programs and empowering students with future-ready skills."
                  profileLink="https://www.linkedin.com/in/elisabeth-morney-d-a-bb633055/"
                  imageUrl={elisabethImage}
                />
                
                <TeamMember 
                  name="Dr. James Maddirala"
                  title="Global Academic Leader in Space Education"
                  bio="A distinguished educator, researcher, and global academic leader with extensive experience in STEM education, international collaborations, and space science initiatives. As a Distinguished Speaker for iSPACE's Young Scientist Initiative, he brings valuable expertise in higher education, research-driven learning, and interdisciplinary problem-solving."
                  profileLink="https://www.thealumniassociation.com/home/4839394-james-maddirala/profile"
                  imageUrl={jamesImage}
                />
                
                <TeamMember 
                  name="Dr. Ken Kempner"
                  title="Higher Education & STEM Policy Expert"
                  bio="An education strategist, researcher, and global advocate for academic excellence with a strong focus on STEM education, leadership, and faculty development. His research on higher education systems and diversity in academia aligns with iSPACE's mission to create inclusive and innovative learning experiences in space education."
                  profileLink="https://news.sou.edu/2020/05/sou-ken-kempner-studies-role-women-faculty-saudi-universities/"
                  imageUrl={kenImage}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
