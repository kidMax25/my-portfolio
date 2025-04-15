'use client'

import { useEffect, useState } from 'react'
import './style.css'
import Link from 'next/link'

export default function ExcelCourse() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  function goToSlide(index: number) {
    if (index < 0 || index >= slides.length) return
    setCurrentSlide(index)
  }
  
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }
  
  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSlide])
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="excel-green text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-file-excel text-2xl"></i>
            <h1 className="text-xl font-bold">Excel Mastery Course</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Session 2: Data Entry & Essential Functions</span>
            <button className="bg-white text-excel-green px-4 py-1 rounded-md font-medium hover:bg-gray-100 transition">
              <i className="fas fa-download mr-1"></i> Download
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {/* Slide Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Current Slide */}
          <div className="relative">
            {slides.map((slide, index) => (
              <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="border-b p-4 excel-green text-white">
                  <h2 className="text-xl font-bold">{slide.title}</h2>
                </div>
                {slide.content}
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center p-4 border-t">
            <button 
              onClick={prevSlide}
              className="excel-green text-white px-4 py-2 rounded-md hover:bg-excel-dark-green transition"
              disabled={currentSlide === 0}
            >
              <i className="fas fa-arrow-left mr-2"></i> Previous
            </button>
            
            <div className="flex">
              {slides.map((_, index) => (
                <span 
                  key={index} 
                  className={`bullet ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="excel-green text-white px-4 py-2 rounded-md hover:bg-excel-dark-green transition"
              disabled={currentSlide === slides.length - 1}
            >
              Next <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="excel-dark-green text-white p-4 text-center text-sm">
        <p>© 2025 Excel Mastery Course. All rights reserved.</p>
      </footer>
    </div>
  )
}

// Define the slides data - Part 1 (we'll add more in the next prompt)
const slides = [
  {
    title: "Session Overview",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Session Overview</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>5 Ways of Data Entry in Excel</li>
          <li>Differences Between Formulas and Functions</li>
          <li>Classes of Functions in Excel</li>
          <li>Basic Functions</li>
          <li>Intermediate Functions</li>
        </ul>
        <div className="mt-6 excel-light-green p-4 rounded-md">
          <h3 className="font-bold text-excel-green mb-2">Key Takeaways:</h3>
          <p>Master efficient data entry techniques and essential Excel functions to boost your productivity.</p>
        </div>
      </div>
    )
  },
  {
    title: "Five Time-Saving Ways to Insert Data in Excel",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Five Time-Saving Ways to Insert Data in Excel</h2>
        
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <h3 className="font-bold text-lg mb-2">1. Simple Insertion</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Typing directly into cells</li>
            <li>Function hints appear as you type</li>
            <li>Press Tab (not Enter) to continue adding arguments</li>
          </ul>
        </div>
        
        <div className="note-box">
          <p><i className="fas fa-lightbulb mr-2"></i> <strong>Tip:</strong> We&apos;ll explore each method in detail in the following slides.</p>
        </div>
      </div>
    )
  },
  {
    title: "Data Entry Method 1: Simple Insertion",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Data Entry Method 1: Simple Insertion</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Type directly into cells or formula bar</li>
          <li>Start formulas with equals sign (=)</li>
          <li>Excel provides intelligent suggestions</li>
          <li>Function hints appear as you type</li>
          <li>Press Tab (not Enter) to continue adding arguments</li>
          <li>F2 key edits selected cell contents</li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Example Workflow:</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Click on a cell</li>
            <li>Type &quot;=SUM(&quot;</li>
            <li>Select range with mouse or type A1:A10</li>
            <li>Press Tab to accept function suggestion</li>
            <li>Press Enter to complete</li>
          </ol>
        </div>
      </div>
    )
  },
  {
    title: "Data Entry Method 2: Insert Function Dialog",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Data Entry Method 2: Insert Function Dialog</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Provides full control over function insertion</li>
          <li>Located on Formulas tab → Insert Function</li>
          <li>Shortcut: Alt + M + F</li>
        </ul>
        
        <div className="note-box">
          <h3 className="font-bold mb-2">Includes:</h3>
          <ul className="list-disc pl-6">
            <li>Search capability for functions</li>
            <li>Help text for each function</li>
            <li>Preview of results</li>
            <li>Argument descriptions</li>
          </ul>
        </div>
        
        <div className="mt-4 excel-light-green p-4 rounded-md">
          <h3 className="font-bold text-excel-green mb-2">Best For:</h3>
          <p>When you&apos;re learning new functions or need detailed help with arguments.</p>
        </div>
      </div>
    )
  },
  {
    title: "Data Entry Method 3: Formula Tab Groups",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Data Entry Method 3: Formula Tab Groups</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Quick access to functions by category</li>
          <li>Navigate to Formulas tab → Select function group</li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Shortcuts:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <p><span className="font-mono">Alt + M + R</span> - Recently Used</p>
            <p><span className="font-mono">Alt + M + I</span> - Financial</p>
            <p><span className="font-mono">Alt + M + L</span> - Logical</p>
            <p><span className="font-mono">Alt + M + T</span> - Text</p>
            <p><span className="font-mono">Alt + M + E</span> - Date & Time</p>
            <p><span className="font-mono">Alt + M + O</span> - Lookup & Reference</p>
            <p><span className="font-mono">Alt + M + G</span> - Math & Trig</p>
            <p><span className="font-mono">Alt + M + Q</span> - More Functions</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Data Entry Method 4: AutoSum",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Data Entry Method 4: AutoSum</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Fastest way for common calculations</li>
          <li>Located on Home tab (far right) or Formulas tab</li>
          <li>Shortcut: Alt + =</li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Steps:</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Place cursor below column (or to right of row) of numbers</li>
            <li>Press Alt + =</li>
            <li>Press Enter</li>
          </ol>
        </div>
        
        <div className="note-box mt-4">
          <p><i className="fas fa-info-circle mr-2"></i> Can also access SUM, AVERAGE, COUNT, MAX, MIN from the AutoSum dropdown</p>
        </div>
      </div>
    )
  },
  {
    title: "Data Entry Method 5: Recently Used Menu",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Data Entry Method 5: Recently Used Menu</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Quick access to functions you&apos;ve used before</li>
          <li>Located on Formulas tab → Recently Used</li>
          <li>Saves time when working with the same functions repeatedly</li>
          <li>Adapts to your work patterns</li>
        </ul>
        
        <div className="excel-light-green p-4 rounded-md">
          <h3 className="font-bold text-excel-green mb-2">Perfect for:</h3>
          <p>Financial modeling with repeated function types like NPV, IRR, PMT</p>
        </div>
      </div>
    )
  },
  {
    title: "Differences Between Formulas and Functions",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Differences Between Formulas and Functions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-2 bg-gray-100 p-2 rounded-md">Formulas</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Expressions that operate on values in cells/ranges</li>
              <li>Always begin with equals sign (=)</li>
              <li>Can include operators, cell references, values</li>
              <li>Example: <span className="font-mono">=A1+A2+A3</span> (adds cells A1, A2, and A3)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2 bg-gray-100 p-2 rounded-md">Functions</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Predefined formulas in Excel</li>
              <li>Have specific names and syntax</li>
              <li>Take arguments inside parentheses</li>
              <li>Example: <span className="font-mono">=SUM(A1:A3)</span> (adds range A1 through A3)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  // Continue the slides array with the remaining slides
// You would add these to the existing slides array in page.tsx

// Formula vs. Function Examples
{
    title: "Formula vs. Function Examples",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Formula vs. Function Examples</h2>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Formula Approach</th>
              <th>Function Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sum values</td>
              <td><span className="font-mono">=A1+A2+A3+A4+A5</span></td>
              <td><span className="font-mono">=SUM(A1:A5)</span></td>
            </tr>
            <tr>
              <td>Average</td>
              <td><span className="font-mono">=(A1+A2+A3)/3</span></td>
              <td><span className="font-mono">=AVERAGE(A1:A3)</span></td>
            </tr>
            <tr>
              <td>Find largest</td>
              <td><span className="font-mono">=(A1>A2)*(A1>A3)*A1 + (A2>A1)*(A2>A3)*A2 + (A3>A1)*(A3>A2)*A3</span></td>
              <td><span className="font-mono">=MAX(A1:A3)</span></td>
            </tr>
          </tbody>
        </table>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Functions are more:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <span className="category-chip">Concise</span>
            <span className="category-chip">Readable</span>
            <span className="category-chip">Maintainable</span>
            <span className="category-chip">Efficient</span>
          </div>
        </div>
      </div>
    )
  },
  
  // Classes of Functions in Excel
  {
    title: "Classes of Functions in Excel",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Classes of Functions in Excel</h2>
        <p className="mb-4">Excel organizes functions into categories:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2"><span className="category-chip">Financial</span></h3>
            <p className="text-sm">PMT, NPV, IRR, FV</p>
            
            <h3 className="font-bold mt-3 mb-2"><span className="category-chip">Logical</span></h3>
            <p className="text-sm">IF, AND, OR, NOT</p>
            
            <h3 className="font-bold mt-3 mb-2"><span className="category-chip">Text</span></h3>
            <p className="text-sm">CONCATENATE, LEFT, RIGHT, MID, TRIM</p>
            
            <h3 className="font-bold mt-3 mb-2"><span className="category-chip">Date & Time</span></h3>
            <p className="text-sm">TODAY, NOW, DATE, YEAR</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2"><span className="category-chip">Lookup & Reference</span></h3>
            <p className="text-sm">VLOOKUP, INDEX, MATCH, OFFSET</p>
            
            <h3 className="font-bold mt-3 mb-2"><span className="category-chip">Math & Trig</span></h3>
            <p className="text-sm">SUM, SUMIF, ROUND, ABS</p>
            
            <h3 className="font-bold mt-3 mb-2"><span className="category-chip">Statistical</span></h3>
            <p className="text-sm">AVERAGE, COUNT, MAX, MIN</p>
            
            <h3 className="font-bold mt-3 mb-2"><span className="category-chip">Information</span></h3>
            <p className="text-sm">ISBLANK, ISERROR, ISTEXT</p>
          </div>
        </div>
      </div>
    )
  },
  
  // Basic Functions: SUM
  {
    title: "Basic Functions: SUM",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: SUM</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Adds all numbers in a range</li>
          <li>Syntax: <span className="font-mono">=SUM(number1, [number2], ...)</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=SUM(A1:A10)</span> - Adds values in cells A1 through A10</p>
          <p><span className="function-highlight">=SUM(A1:A10, C1:C10)</span> - Adds values in multiple ranges</p>
          <p><span className="function-highlight">=SUM(A1:A10)/20</span> - Can be part of larger formulas</p>
        </div>
        
        <div className="note-box mt-4">
          <p><i className="fas fa-keyboard mr-2"></i> <strong>Shortcut:</strong> Alt+= (AutoSum)</p>
          <p><i className="fas fa-info-circle mr-2"></i> Ignores text values and empty cells</p>
        </div>
      </div>
    )
  },
  
  // Basic Functions: AVERAGE
  {
    title: "Basic Functions: AVERAGE",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: AVERAGE</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Calculates the arithmetic mean (average) of values</li>
          <li>Syntax: <span className="font-mono">=AVERAGE(number1, [number2], ...)</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=AVERAGE(B2:B8)</span> - Average of values in range B2:B8</p>
          <p><span className="function-highlight">=AVERAGE(B2:B8,D2:D8)</span> - Average of multiple ranges</p>
        </div>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Ignores text values and empty cells</li>
            <li>Counts zeros as values</li>
            <li>Similar to: <span className="font-mono">=SUM(range)/COUNT(range)</span></li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Basic Functions: COUNT
  {
    title: "Basic Functions: COUNT",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: COUNT</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Counts cells containing numbers</li>
          <li>Syntax: <span className="font-mono">=COUNT(value1, [value2], ...)</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=COUNT(A1:A20)</span> - Counts numeric cells in range</p>
          <p><span className="function-highlight">=COUNT(A:A)</span> - Counts all numeric values in column A</p>
          <p><span className="function-highlight">=COUNT(A1:C1)</span> - Counts numeric values across row</p>
        </div>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Only counts numeric values (including dates)</li>
            <li>Ignores text, logical values, errors, empty cells</li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Basic Functions: COUNTA
  {
    title: "Basic Functions: COUNTA",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: COUNTA</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Counts non-empty cells</li>
          <li>Syntax: <span className="font-mono">=COUNTA(value1, [value2], ...)</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=COUNTA(A1:A20)</span> - Counts all non-empty cells</p>
          <p><span className="function-highlight">=COUNTA(A:A)</span> - Counts all non-empty cells in column A</p>
        </div>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Counts cells with any content (numbers, text, errors)</li>
            <li>Useful for checking data completeness</li>
            <li>Ignores truly empty cells</li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Basic Functions: MAX and MIN
  {
    title: "Basic Functions: MAX and MIN",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: MAX and MIN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-2">MAX:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Returns the largest value in a range</li>
              <li>Syntax: <span className="font-mono">=MAX(number1, [number2], ...)</span></li>
              <li>Example: <span className="function-highlight">=MAX(C2:C50)</span> - Finds maximum value</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">MIN:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Returns the smallest value in a range</li>
              <li>Syntax: <span className="font-mono">=MIN(number1, [number2], ...)</span></li>
              <li>Example: <span className="function-highlight">=MIN(C2:C50)</span> - Finds minimum value</li>
            </ul>
          </div>
        </div>
        
        <div className="note-box">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Ignore text values and empty cells</li>
            <li>Dates are considered numbers (larger = more recent)</li>
            <li>Logical values (TRUE/FALSE) are ignored</li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Basic Functions: IF
  {
    title: "Basic Functions: IF",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: IF</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Performs a logical test and returns different values based on result</li>
          <li>Syntax: <span className="font-mono">=IF(logical_test, value_if_true, value_if_false)</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=IF(A1>10, "High", "Low")</span> - Text result based on numeric test</p>
          <p><span className="function-highlight">=IF(A1>10, A1*0.1, A1*0.05)</span> - Calculation based on condition</p>
          <p><span className="function-highlight">=IF(A1="Yes", 1, 0)</span> - Convert text response to numeric</p>
        </div>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Can be nested (though better to use AND/OR when possible)</li>
            <li>&quot;Logical test&quot; must evaluate to TRUE or FALSE</li>
            <li>Missing arguments return unexpected results</li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Basic Functions: TRIM
  {
    title: "Basic Functions: TRIM",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Basic Functions: TRIM</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Removes extra spaces from text</li>
          <li>Syntax: <span className="font-mono">=TRIM(text)</span></li>
          <li>Example: <span className="function-highlight">=TRIM(A1)</span> - Removes leading, trailing, and extra spaces</li>
        </ul>
        
        <div className="mb-4">
          <h3 className="font-bold mb-2">Use cases:</h3>
          <ul className="list-disc pl-6">
            <li>Cleaning imported or copy-pasted data</li>
            <li>Standardizing text input</li>
            <li>Preparing data for lookups</li>
          </ul>
        </div>
        
        <div className="note-box">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Only works on a single cell reference</li>
            <li>Removes extra spaces between words (leaves single spaces)</li>
            <li>Doesn&apos;t remove non-breaking spaces (use CLEAN for these)</li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Intermediate Functions: UNIQUE
  {
    title: "Intermediate Functions: UNIQUE",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Intermediate Functions: UNIQUE</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Returns a list of unique values from a range</li>
          <li>Syntax: <span className="font-mono">=UNIQUE(array, [by_col], [exactly_once])</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=UNIQUE(A1:A100)</span> - List of unique values in column A</p>
          <p><span className="function-highlight">=UNIQUE(A1:B100,FALSE,TRUE)</span> - Unique combinations of columns A & B</p>
        </div>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Available in Excel 365/2021 (dynamic array function)</li>
            <li>Returns a spilled array of results</li>
            <li>Great for creating lists for data validation</li>
          </ul>
        </div>
      </div>
    )
  },
  
  // Intermediate Functions: RANK
  {
    title: "Intermediate Functions: RANK",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Intermediate Functions: RANK</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Returns the rank of a number within a list of numbers</li>
          <li>Syntax: <span className="font-mono">=RANK(number, ref, [order])</span></li>
        </ul>
        
        <div className="example-box">
          <h3 className="font-bold mb-2">Examples:</h3>
          <p><span className="function-highlight">=RANK(B2,$B$2:$B$10,0)</span> - Rank of B2 among B2:B10 (descending)</p>
          <p><span className="function-highlight">=RANK(B2,$B$2:$B$10,1)</span> - Rank of B2 among B2:B10 (ascending)</p>
        </div>
        
        <div className="note-box mt-4">
          <h3 className="font-bold mb-2">Notes:</h3>
          <ul className="list-disc pl-6">
            <li>Duplicate values receive same rank</li>
            <li>The presence of duplicates affects subsequent ranks</li>
            <li>Modern alternative: RANK.EQ and RANK.AVG functions</li>
          </ul>
        </div>
      </div>
    )
  },
  // Questions?
  {
    title: "Practice Questions",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Practice Questions</h2>
        
        <p className="mb-4">Use the sample data from <span className="font-mono">Practice Data.xlsx</span> to answer the following questions.</p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-bold mb-2 text-excel-green">Sample Data Preview:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">OrderDate</th>
                  <th className="border p-2">Region</th>
                  <th className="border p-2">Rep</th>
                  <th className="border p-2">Item</th>
                  <th className="border p-2">Units</th>
                  <th className="border p-2">Unit Cost</th>
                  <th className="border p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1/6/2024</td>
                  <td className="border p-2">East</td>
                  <td className="border p-2">Jones</td>
                  <td className="border p-2">Pencil</td>
                  <td className="border p-2">95</td>
                  <td className="border p-2">1.99</td>
                  <td className="border p-2">189.05</td>
                </tr>
                <tr>
                  <td className="border p-2">1/23/2024</td>
                  <td className="border p-2">Central</td>
                  <td className="border p-2">Kivell</td>
                  <td className="border p-2">Binder</td>
                  <td className="border p-2">50</td>
                  <td className="border p-2">19.99</td>
                  <td className="border p-2">999.50</td>
                </tr>
                <tr>
                  <td className="border p-2">2/9/2024</td>
                  <td className="border p-2">Central</td>
                  <td className="border p-2">Jardine</td>
                  <td className="border p-2">Pencil</td>
                  <td className="border p-2">36</td>
                  <td className="border p-2">4.99</td>
                  <td className="border p-2">179.64</td>
                </tr>
                <tr>
                  <td className="border p-2">2/26/2024</td>
                  <td className="border p-2">Central</td>
                  <td className="border p-2">Gill</td>
                  <td className="border p-2">Pen</td>
                  <td className="border p-2">27</td>
                  <td className="border p-2">19.99</td>
                  <td className="border p-2">539.73</td>
                </tr>
                <tr>
                  <td className="border p-2">3/15/2024</td>
                  <td className="border p-2">West</td>
                  <td className="border p-2">Sorvino</td>
                  <td className="border p-2">Pencil</td>
                  <td className="border p-2">56</td>
                  <td className="border p-2">2.99</td>
                  <td className="border p-2">167.44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-excel-green mb-3">Basic Functions (6 Questions)</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 1:</p>
              <p>Write a formula to calculate the total number of units sold across all orders.</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=SUM(E2:E6)</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 2:</p>
              <p>Calculate the average unit cost of all items in the dataset.</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=AVERAGE(F2:F6)</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 3:</p>
              <p>How many orders are for the item "Pencil"?</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=COUNTIF(D2:D6,"Pencil")</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 4:</p>
              <p>Find the highest total order value in the dataset.</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=MAX(G2:G6)</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 5:</p>
              <p>Write a formula to display "High Value" if an order total exceeds 500, otherwise "Standard Value".</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=IF(G2>500,"High Value","Standard Value")</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 6:</p>
              <p>Calculate the total revenue for just the "Central" region.</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=SUMIF(B2:B6,"Central",G2:G6)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-excel-green mb-3">Intermediate Functions (6 Questions)</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 7:</p>
              <p>Create a formula to extract the month name from the OrderDate column.</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=TEXT(A2,"mmmm")</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 8:</p>
              <p>Write a formula to rank all orders by total value (highest first).</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=RANK(G2,$G$2:$G$6,0)</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 9:</p>
              <p>Create a formula to display the Rep name alongside their Region (e.g., "Jones (East)").</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=CONCATENATE(C2," (",B2,")")</span>
                <p className="text-sm mt-1">or</p>
                <span className="function-highlight">=C2&" ("&B2&")"</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 10:</p>
              <p>Write a formula to check if a Unit Cost value is above average and display "Above Average" or "Below Average".</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=IF(F2>AVERAGE($F$2:$F$6),"Above Average","Below Average")</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 11:</p>
              <p>Create a formula to extract the first 3 characters of each Rep's name.</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=LEFT(C2,3)</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <p className="font-semibold">Question 12:</p>
              <p>Write a VLOOKUP formula to find the Region for a Rep named "Gill".</p>
              <div className="mt-2 formula-box">
                <span className="function-highlight">=VLOOKUP("Gill",C2:G6,COLUMN(B2)-COLUMN(C2)+1,FALSE)</span>
                <p className="text-sm mt-1">or simpler:</p>
                <span className="function-highlight">=VLOOKUP("Gill",C2:G6,-1,FALSE)</span>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/Excel/Assignments/Practice Data.xlsx"}>
        <div className="mt-6 flex justify-center">
          <button className="excel-green text-white px-6 py-2 rounded-md hover:bg-excel-dark-green transition">
            <i className="fas fa-download mr-2"></i> Download Practice Worksheet
          </button>
        </div>
        </Link>
      </div>
    )
  },
  
  // Coming Up Next Session
  {
    title: "Coming Up Next Session",
    content: (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-excel-green mb-4">Coming Up Next Session</h2>
        <h3 className="text-xl font-semibold mb-4">Session 3: Advanced Excel Formulas</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Nested functions and complex formulas</li>
          <li>Lookup functions (VLOOKUP, INDEX MATCH)</li>
          <li>Conditional calculations (SUMIF, COUNTIF)</li>
          <li>Logical functions (AND, OR, nested IF)</li>
          <li>Financial functions (PMT, NPV, IRR)</li>
        </ul>
        
        <div className="excel-light-green p-4 rounded-md">
          <h3 className="font-bold text-excel-green mb-2">Preparation:</h3>
          <p>Review today&apos;s basic and intermediate functions as they form the foundation for more advanced formulas.</p>
        </div>
      </div>
    )
  },
  
  // Thank You!
  {
    title: "Thank You!",
    content: (
      <div className="p-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="excel-green text-white p-8 rounded-lg mb-6">
            <i className="fas fa-check-circle text-5xl mb-4"></i>
            <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
            <p className="text-xl">See you in the next session</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg">
              <i className="fas fa-book text-excel-green text-2xl mb-2"></i>
              <h3 className="font-bold">Resources</h3>
              <p className="text-sm mt-1">Download session materials</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <i className="fas fa-tasks text-excel-green text-2xl mb-2"></i>
              <h3 className="font-bold">Exercises</h3>
              <p className="text-sm mt-1">Practice what you learned</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <i className="fas fa-certificate text-excel-green text-2xl mb-2"></i>
              <h3 className="font-bold">Certificate</h3>
              <p className="text-sm mt-1">Track your progress</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];