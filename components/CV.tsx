"use client";

import { motion } from "framer-motion";
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
  Heart,
  BarChart,
  GitBranch,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CV() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sectionFade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

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
            I am a detail-oriented Statistician with expertise in sampling,
            validation, and data analysis using standard statistical practices.
            I am adept in statistical modeling, forecasting, data mining, trend
            analysis, and data interpretation. With a strong background in
            software programming, particularly in R and Python, I excel in
            developing software applications for statistical modeling and
            graphic analysis.
          </p>
        </motion.section>

        {/* Professional Experience */}
        <motion.section {...sectionFade(0.2)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Building className="h-6 w-6" /> Professional Experience
          </h2>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Assistant Statistician</h3>
            <p className="text-gray-600 mb-2">
              Kenya National Highways Authority | 09/2023 &ndash; present
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>
                • Impact Evaluation on the Mau Summit&mdash;Kisiani World Bank
                Road Project, constructed in the 2010s. Tasked with post-survey
                analysis, data visualizations with R, and statistical testing,
                determining the road&apos;s impact on the regional economy.
              </li>
              <li>
                • Monitoring and evaluation practice on roads in central and
                eastern Kenya, checking progress status of regional projects and
                tracking finances.
              </li>
              <li>
                • Data cleaning and wrangling for post-survey analysis, working
                with string and numeric data to prepare for frequency
                distributions and text analysis.
              </li>
              <li>
                • Creating the Roads Project Dashboard reporting key metrics
                such as total km laid, cost per km, start date, progress status
                and contract sum.
              </li>
            </ul>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Field Statistical Researcher and Analyst
            </h3>
            <p className="text-gray-600 mb-2">
              University of Nairobi | 01/2023 &ndash; 06/2023
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>
                • Developed survey and interview questions for research
                personnel
              </li>
              <li>
                • Conducted demographic surveys in Nairobi areas, including
                counts of crime victims in hospitals and individuals in police
                custody
              </li>
              <li>
                • Created databases with specified IDs to ensure data
                inferential integrity and reduce redundancy
              </li>
              <li>
                • Distributed and analyzed collected field cases to identify
                demographic patterns
              </li>
              <li>
                • Created visualization dashboards for demographic data reports
              </li>
            </ul>
          </Card>
        </motion.section>

        {/* Education */}
        <motion.section {...sectionFade(0.3)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" /> Education
          </h2>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Bachelor&apos;s of Science in Statistics
            </h3>
            <p className="text-gray-600 mb-2">
              University of Nairobi | 09/2019 &ndash; 06/2023
            </p>
            <p className="text-gray-700">
              Excelled in Social Statistics Concepts and Parameter Estimation,
              gaining strong foundation for applying statistical methods to
              social sciences and economic settings.
            </p>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Data Analysis</h3>
            <p className="text-gray-600 mb-2">
              Jomo Kenyatta University Enterprise School | 10/2021 &ndash;
              01/2022
            </p>
            <p className="text-gray-700">
              Enrolled for data analysis classes using R at JKUATES. Achieved
              certificate of distinction, gaining knowledge in applying
              statistical theories to practical survey/research techniques.
            </p>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Kenya Certificate of Secondary Education
            </h3>
            <p className="text-gray-600 mb-2">
              St. Peters&apos; Boys Mumias High School | 02/2015 &ndash; 11/2018
            </p>
            <p className="text-gray-700">
              Achieved an impressive overall grade of B+ while participating in
              various extracurricular activities.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Kenya Certificate of Primary Education
            </h3>
            <p className="text-gray-600 mb-2">
              Gateway Junior Academy | 01/2008 &ndash; 12/2014
            </p>
            <p className="text-gray-700">
              Completed primary education with Certificate of Merit, reflecting
              strong academic performance and dedication to studies.
            </p>
          </Card>
        </motion.section>

        {/* Projects */}
        <motion.section {...sectionFade(0.4)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <GitBranch className="h-6 w-6" /> Projects
          </h2>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Kenya National Highways Authority Road Projects Dashboard
            </h3>
            <p className="text-gray-600 mb-2">09/2023 &ndash; present</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>
                • Collecting and integrating road construction and maintenance
                project data from various sources
              </li>
              <li>
                • Designing and implementing interactive dashboard with R shiny,
                including collecting modules and caching
              </li>
              <li>
                • Creating visualizations using leaflet maps for geographic
                distribution of projects
              </li>
              <li>
                • Implementing real-time updates and user-friendly interfaces
                for stakeholders
              </li>
            </ul>
          </Card>

          <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Performance Based Budgeting
            </h3>
            <p className="text-gray-600 mb-2">01/2024 &ndash; present</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>
                • Implementing Activity-Based Costing (ABC) for accurate cost
                allocation
              </li>
              <li>
                • Utilizing percentile rankings for budget position and
                achievement categorization
              </li>
              <li>
                • Developing decision-making frameworks for budget allocation
              </li>
              <li>
                • Applying anomaly detection for historical budget data patterns
              </li>
              <li>
                • Incorporating Time Series analysis for budget forecasting
              </li>
              <li>
                • Creating comprehensive visualizations including heatmaps and
                pivot tables
              </li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Crime Trends and Patterns Dashboard
            </h3>
            <p className="text-gray-600 mb-2">01/2023 &ndash; 08/2023</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>
                • Collected and cleaned crime data from police stations and
                hospitals
              </li>
              <li>• Created interactive web-based dashboard using R Shiny</li>
              <li>• Implemented SARIMA modeling for trend analysis</li>
              <li>• Designed time series plots and interactive charts</li>
              <li>• Integrated geospatial analysis for crime hotspots</li>
              <li>• Developed predictive models for crime trends</li>
            </ul>
          </Card>
        </motion.section>

        {/* Skills */}
        <motion.section {...sectionFade(0.5)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Terminal className="h-6 w-6" /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <BarChart className="h-5 w-5" />
                <h3 className="font-semibold">Data Analysis</h3>
              </div>
              <p className="text-sm text-gray-600">
                Highly knowledgeable in EDA, visualization, inferential testing,
                and data wrangling using tidyverse framework for SQL.
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Database className="h-5 w-5" />
                <h3 className="font-semibold">Data Mining</h3>
              </div>
              <p className="text-sm text-gray-600">
                Experience with web drivers, POST/GET requests, and API
                configuration for data mining and integration.
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Brain className="h-5 w-5" />
                <h3 className="font-semibold">Statistical Modelling</h3>
              </div>
              <p className="text-sm text-gray-600">
                Strong foundation in statistical modeling through academic and
                practical experience, specialized in software applications for
                modeling and graphic analysis.
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Code className="h-5 w-5" />
                <h3 className="font-semibold">UI Development</h3>
              </div>
              <p className="text-sm text-gray-600">
                Proficient with Shiny for R, Ambiorix, HTMX, and NextJS for
                modern web development and dashboard creation.
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <ChartBar className="h-5 w-5" />
                <h3 className="font-semibold">Advanced Excel</h3>
              </div>
              <p className="text-sm text-gray-600">
                Expert in nested functions, pivot tables, Power Query, VBA
                programming, macro development, and Power BI integration.
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <LineChart className="h-5 w-5" />
                <h3 className="font-semibold">SPSS Analysis</h3>
              </div>
              <p className="text-sm text-gray-600">
                Five years experience in ANOVA, factor analysis, cluster
                analysis, and advanced statistical methods for research design.
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Certificates */}
        <motion.section {...sectionFade(0.6)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Award className="h-6 w-6" /> Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">
                R for Data Analysis
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Distinction in EDA libraries, data visualization with ggplot2,
                interactive plots with high charter and Plotly. Advanced
                knowledge in parsnip and tidy models{" "}
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">
                Computer Science Academy
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Star certificate awarded for outstanding performance in computer
                science competition at Moi Girls High School, demonstrating
                strong fundamentals and problem-solving skills.
              </p>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">
                Advanced Excel Certification
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Completed at Datanova training camp, UoN. Mastered advanced
                Excel functions, data analysis tools, visualization techniques,
                complex formulas, pivot tables, and VBA applications.
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section {...sectionFade(0.7)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Terminal className="h-6 w-6" /> Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">English</h3>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-blue-600"
                  ></div>
                ))}
                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600">Kiswahili</h3>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-blue-600"
                  ></div>
                ))}
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section {...sectionFade(0.8)} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Heart className="h-6 w-6" /> Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2">
                <Music className="h-5 w-5 text-blue-600" />
                <p className="text-gray-700">
                  Music Producer and Sound Designer/Mixer by profession
                </p>
              </div>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                <p className="text-gray-700">
                  Rugby Enthusiast, both as a player and pitch-side technician
                </p>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* References */}
        <motion.section {...sectionFade(0.9)} className="mb-8">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" /> Download Complete CV
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
