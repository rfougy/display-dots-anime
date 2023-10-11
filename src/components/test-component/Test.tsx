import React from 'react'
import { TestProps } from './Test.types'

/**
 * @description this component is for testing creation/publishing of npm package, and should be deleted once validated.
 */
const Test: React.FC<TestProps> = () => {
  return (
    <button onClick={() => alert("Test Component has been clicked.")}>Test</button>
  )
}

export default Test