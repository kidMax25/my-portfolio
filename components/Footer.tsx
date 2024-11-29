import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Maxwell Simiyu. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/kidMax25" className="text-gray-400 hover:text-white transition duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/maxwell-simiyu-4797b618a/" className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/maxwellsimiyu22" className="text-gray-400 hover:text-white transition duration-300">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

