"use client"

import { motion } from 'framer-motion'
import { Brain, BarChart2, PieChart, TrendingUp, Database, FileText, LucideIcon } from 'lucide-react'

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { name: 'Machine Learning', icon: Brain, color: 'bg-purple-500' },
  { name: 'Data Visualization', icon: BarChart2, color: 'bg-blue-500' },
  { name: 'Infographics', icon: PieChart, color: 'bg-green-500' },
  { name: 'Business Analytics', icon: TrendingUp, color: 'bg-yellow-500' },
  { name: 'Data Cleaning', icon: Database, color: 'bg-red-500' },
  { name: 'Reporting', icon: FileText, color: 'bg-indigo-500' },
]

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`${color} p-6 rounded-lg shadow-lg`}
  >
    <Icon className="h-12 w-12 mb-4 text-white" />
    <h3 className="text-xl font-semibold text-white">{name}</h3>
  </motion.div>
)

const SkillsShowcase: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsShowcase