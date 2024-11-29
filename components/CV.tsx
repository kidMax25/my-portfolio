'use client'

import { motion } from 'framer-motion'
import { 
  Download, 
  ChartBar, 
  Code, 
  Database, 
  Brain, 
  LineChart, 
  Building, 
  GraduationCap,
  Award,
  Music,
  Trophy,
  User,
  Phone,
  Mail,
  MapPin,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function CV() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const sectionFade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  })

  return (
    <motion.div 
      className="max-w-5xl mx-auto mb-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 rounded-t-2xl shadow-xl">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl font-bold mb-2">Maxwell Simiyu</h1>
          <p className="text-xl mb-4">Data Analyst</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> simiyumaxwell490@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +254741125435
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Nairobi, Kenya
            </span>
          </div>
        </motion.div>
      </header>

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-b-2xl shadow-xl">
        {/* Profile Section */}
        <motion.section {...sectionFade(0.1)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <User className="h-6 w-6" /> Profile
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I am a detail-oriented Statistician with expertise in sampling, validation, and data analysis using standard statistical practices. I am adept in statistical modeling, forecasting, data mining, trend analysis, and data interpretation. With a strong background in software programming, particularly in R and Python, I excel in developing software applications for statistical modeling and graphic analysis.
          </p>
        </motion.section>

        {/* Professional Experience */}
        <motion.section {...sectionFade(0.2)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Building className="h-6 w-6" /> Professional Experience
          </h2>
          
          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Assistant Statistician</h3>
            <p className="text-gray-600 mb-2">Kenya National Highways Authority | 09/2023 – present</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Impact Evaluation on the Mau Summit—Kisiani World Bank Road Project</li>
              <li>• Monitoring and evaluation practice on roads in central and eastern Kenya</li>
              <li>• Data cleaning and wrangling for post-survey analysis</li>
              <li>• Creating the Roads Project Dashboard for the organization</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Field Statistical Researcher and Analyst</h3>
            <p className="text-gray-600 mb-2">University of Nairobi | 01/2023 – 06/2023</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Developing survey and interview questions for research personnel</li>
              <li>• Conducting demographic surveys in Nairobi areas</li>
              <li>• Creating databases and managing data integrity</li>
              <li>• Developing visualization dashboards for reports</li>
            </ul>
          </Card>
        </motion.section>

        {/* Education */}
        <motion.section {...sectionFade(0.3)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" /> Education
          </h2>
          
          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Bachelor's of Science in Statistics</h3>
            <p className="text-gray-600 mb-2">University of Nairobi | 09/2019 – 06/2023</p>
            <p className="text-gray-700">Excelled in Social Statistics Concepts and Parameter Estimation, gaining strong foundation in statistical methods for social sciences and economic settings.</p>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Data Analysis</h3>
            <p className="text-gray-600 mb-2">Jomo Kenyatta University Enterprise School | 10/2021 – 01/2022</p>
            <p className="text-gray-700">Achieved distinction in R programming and statistical analysis, focusing on practical applications in research and surveys.</p>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Kenya Certificate of Secondary Education</h3>
            <p className="text-gray-600 mb-2">St. Peters' Boys Mumias High School | 02/2015 – 11/2018</p>
            <p className="text-gray-700">Achieved grade B+ while participating in various extracurricular activities.</p>
          </Card>
        </motion.section>

        {/* Projects */}
        <motion.section {...sectionFade(0.4)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <ChartBar className="h-6 w-6" /> Projects
          </h2>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Kenya National Highways Authority Road Projects Dashboard</h3>
            <p className="text-gray-600 mb-2">09/2023 – present</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Developed comprehensive dashboard for monitoring road projects</li>
              <li>• Implemented interactive features using R Shiny</li>
              <li>• Created visualizations for project progress and budget utilization</li>
              <li>• Integrated real-time updates and user-friendly interfaces</li>
            </ul>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Performance Based Budgeting</h3>
            <p className="text-gray-600 mb-2">01/2024 – present</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Leading development of sophisticated budgeting system</li>
              <li>• Implementing Activity-Based Costing (ABC)</li>
              <li>• Developing decision-making frameworks</li>
              <li>• Creating advanced visualizations and analysis tools</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Crime Trends and Patterns Dashboard</h3>
            <p className="text-gray-600 mb-2">01/2023 – 08/2023</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Developed interactive crime analysis dashboard</li>
              <li>• Implemented SARIMA modeling for trend analysis</li>
              <li>• Created geospatial visualizations of crime hotspots</li>
              <li>• Developed predictive models for crime trends</li>
            </ul>
          </Card>
        </motion.section>

        {/* Skills */}
        <motion.section {...sectionFade(0.5)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Brain className="h-6 w-6" /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                icon: <LineChart />, 
                name: "Data Analysis",
                desc: "EDA, visualization, inferential testing, tidyverse framework"
              },
              { 
                icon: <Database />, 
                name: "Data Mining",
                desc: "Web drivers, API integration, POST/GET requests"
              },
              { 
                icon: <Brain />, 
                name: "Statistical Modelling",
                desc: "ANOVA, regression, time series analysis, factor analysis"
              },
              { 
                icon: <Code />, 
                name: "UI Development",
                desc: "R Shiny, NextJS, HTMX, frontend development"
              },
              { 
                icon: <ChartBar />, 
                name: "Advanced Excel",
                desc: "Pivot tables, VBA, Power Query, Power BI integration"
              },
              { 
                icon: <Database />, 
                name: "SPSS Analysis",
                desc: "Statistical analysis, experimental design, cluster analysis"
              }
            ].map((skill, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  {skill.icon}
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Certificates */}
        <motion.section {...sectionFade(0.6)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Award className="h-6 w-6" /> Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">R for Data Analysis</h3>
              <p className="text-sm text-gray-600 mt-2">Distinction in EDA, data visualization, and modeling with R ecosystem</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">Computer Science Academy</h3>
              <p className="text-sm text-gray-600 mt-2">Star performer in computer science concepts and problem-solving</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">Advanced Excel Certification</h3>
              <p className="text-sm text-gray-600 mt-2">Mastery in advanced Excel functions and data analysis tools</p>
            </Card>
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section {...sectionFade(0.7)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Heart className="h-6 w-6" /> Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2">
                <Music className="h-5 w-5 text-blue-600" />
                <p className="text-gray-700">Music Producer and Sound Designer/Mixer by profession</p>
              </div>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                <p className="text-gray-700">Rugby Enthusiast, both as a player and pitch-side technician</p>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* References */}
        <motion.section {...sectionFade(0.8)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <User className="h-6 w-6" /> References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold">Mr. Isaya Okeyo</h3>
              <p className="text-gray-600">Snr. Statistician, KeNHA</p>
              <p className="text-gray-700 mt-2">i.okeyo@kenha.co.ke</p>
              <p className="text-gray-700">+254 719699168</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold">Ronald Odhiambo</h3>
              <p className="text-gray-600">Ast.Director, KeNHA</p>
            </Card>
          </div>
        </motion.section>

        {/* Download Button */}
        <motion.div 
          className="sticky bottom-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button 
            onClick={() => window.open('/resume.pdf', '_blank')} 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" /> Download Complete CV
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}