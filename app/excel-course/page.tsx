// app/excel-course/page.tsx
"use client";

import Link from 'next/link';

export default function ExcelCoursePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Excel Mastery Course</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            href="/excel-course/lesson1"
            className="flex items-center justify-center p-6 bg-white border-2 border-green-600 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200"
          >
            <span className="text-xl font-semibold text-green-700">Lesson 1</span>
          </Link>
          
          <Link 
            href="/excel-course/lesson2"
            className="flex items-center justify-center p-6 bg-white border-2 border-green-600 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200"
          >
            <span className="text-xl font-semibold text-green-700">Lesson 2</span>
          </Link>
          
          <Link 
            href="/excel-course/lesson3"
            className="flex items-center justify-center p-6 bg-white border-2 border-green-600 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200"
          >
            <span className="text-xl font-semibold text-green-700">Lesson 3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}