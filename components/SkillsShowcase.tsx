"use client"

import { motion } from 'framer-motion'
import { Brain, BarChart2, PieChart, TrendingUp, Database, FileText, LucideIcon } from 'lucide-react'

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { name: 'Machine Learning', icon: Brain, color: 'bg-zinc-800' },
  { name: 'Data Visualization', icon: BarChart2, color: 'bg-zinc-800' },
  { name: 'Infographics', icon: PieChart, color: 'bg-zinc-800' },
  { name: 'Business Analytics', icon: TrendingUp, color: 'bg-zinc-800' },
  { name: 'Data Cleaning', icon: Database, color: 'bg-zinc-800' },
  { name: 'Reporting', icon: FileText, color: 'bg-zinc-800' },
]

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`${color} p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-zinc-600`}
  >
    <Icon className="h-12 w-12 mb-4 text-blue-500" />
    <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
  </motion.div>
)

const SkillsShowcase: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-100"
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