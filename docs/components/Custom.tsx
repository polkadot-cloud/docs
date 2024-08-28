import * as React from 'react'
 
export default function Custom({ children }: { children: React.ReactNode }) {
  return (
    <button className="primary">
      {children}
    </button>
  )
}