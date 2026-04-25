'use client'

import { VisualEditing } from 'next-sanity/visual-editing'
import { useEffect } from 'react'

export default function VisualEditingComponent() {
  useEffect(() => {
    // This allows the Studio to communicate with the website
    if (window.self !== window.top) {
      console.log('Visual Editing enabled in iframe')
    }
  }, [])

  return (
    <>
      <VisualEditing />
      <div style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        padding: '8px 16px',
        background: '#0052cc',
        color: 'white',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 99999,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#33ff33', borderRadius: '50%' }}></span>
        Preview Mode Active
      </div>
    </>
  )
}
