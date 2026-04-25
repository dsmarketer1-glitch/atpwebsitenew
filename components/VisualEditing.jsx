'use client'

import { VisualEditing } from 'next-sanity'
import { useEffect } from 'react'

export default function VisualEditingComponent() {
  useEffect(() => {
    // This allows the Studio to communicate with the website
    if (window.self !== window.top) {
      console.log('Visual Editing enabled in iframe')
    }
  }, [])

  return <VisualEditing />
}
