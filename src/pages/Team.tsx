
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Star } from 'lucide-react';
import TeamMember from '@/components/TeamMember';

const Team = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-orbitron mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Command Crew
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries, educators, and space enthusiasts behind iSPACE who are dedicated to inspiring the next generation of space pioneers.
              </p>
            </div>
            
            <div className="space-card p-8 mb-12">
              <h2 className="text-2xl font-orbitron mb-8 text-center">Leadership</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <TeamMember 
                  name="Dr. Yuvaraju Chinnam, Ph.D."
                  title="Captain"
                  bio="Co-Founder of iSPACE and a visionary leader in STEM education, space technology, and innovation-driven learning. With a strong background in research, academia, and industry collaborations, he has been instrumental in designing cutting-edge educational programs that bridge the gap between theoretical knowledge and hands-on experience."
                  profileLink="https://www.linkedin.com/in/dr-yuvaraju-chinnam-phd-bb228557/"
                  imageUrl="/placeholder.svg"
                />
                
                <TeamMember 
                  name="Suryakamal B."
                  title="Co-Captain"
                  bio="Surya Kamal is a seasoned educator and mentor with extensive experience in guiding students toward competitive academic success in the K-12 segment. Having previously led IIT-JEE and NEET programs at esteemed institutions, he has played a pivotal role in shaping the careers of aspiring engineers and medical professionals."
                  profileLink="#"
                  imageUrl="/placeholder.svg"
                />
              </div>
            </div>
            
            <div className="space-card p-8">
              <h2 className="text-2xl font-orbitron mb-8 text-center">Mentors & Advisors</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <TeamMember 
                  name="Tanya Knudsen"
                  title="Expert in Creative Problem-Solving"
                  bio="Tanya Knudsen is an expert in creative problem-solving, helping individuals and organizations unlock innovation through structured thinking techniques. With a passion for fostering creativity, she provides workshops, training, and coaching to develop critical thinking, idea generation, and strategic problem-solving skills."
                  profileLink="https://www.tanyaknudsen.com/"
                  imageUrl="/placeholder.svg"
                />
                
                <TeamMember 
                  name="Elisabeth Morney, D.A."
                  title="STEM Education & Innovation Leader"
                  bio="An education and innovation leader specializing in STEM education, creative problem-solving, and global learning initiatives. With extensive experience in fostering interdisciplinary collaboration, she has played a key role in developing international educational programs and empowering students with future-ready skills."
                  profileLink="https://www.linkedin.com/in/elisabeth-morney-d-a-bb633055/"
                  imageUrl="/placeholder.svg"
                />
                
                <TeamMember 
                  name="Dr. James Maddirala"
                  title="Global Academic Leader in Space Education"
                  bio="A distinguished educator, researcher, and global academic leader with extensive experience in STEM education, international collaborations, and space science initiatives. As a Distinguished Speaker for iSPACE's Young Scientist Initiative, he brings valuable expertise in higher education, research-driven learning, and interdisciplinary problem-solving."
                  profileLink="https://www.thealumniassociation.com/home/4839394-james-maddirala/profile"
                  imageUrl="/placeholder.svg"
                />
                
                <TeamMember 
                  name="Dr. Ken Kempner"
                  title="Higher Education & STEM Policy Expert"
                  bio="An education strategist, researcher, and global advocate for academic excellence with a strong focus on STEM education, leadership, and faculty development. His research on higher education systems and diversity in academia aligns with iSPACE's mission to create inclusive and innovative learning experiences in space education."
                  profileLink="https://news.sou.edu/2020/05/sou-ken-kempner-studies-role-women-faculty-saudi-universities/"
                  imageUrl="/placeholder.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
