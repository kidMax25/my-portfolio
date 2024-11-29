"use client"

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface FormData {
  from_name: string;
  message: string;
  reply_to: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    message: '',
    reply_to: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status.message) setStatus({ type: null, message: '' })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    try {
      emailjs.init('neiUXaT1ZxpqPruyw')

      const response = await emailjs.sendForm(
        'default_service',
        'template_82bla86',
        e.currentTarget,
        'neiUXaT1ZxpqPruyw'
      )

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Sent!'
        })
        setFormData({
          from_name: '',
          message: '',
          reply_to: ''
        })
      }
    } catch (error) {
      console.error('Error details:', error)
      setStatus({
        type: 'error',
        message: error instanceof Error 
          ? JSON.stringify(error)
          : 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <form id="form" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            
            {status.message && (
              <div className={`p-3 rounded-md ${
                status.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
              }`}>
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              id="button"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
                  Sending...
                </div>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact