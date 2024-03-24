import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Files = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
      Files</div>
  )
}

export default Files