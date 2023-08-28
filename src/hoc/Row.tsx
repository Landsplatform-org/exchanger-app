import React, { ReactNode } from 'react'

const Row = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div className='flex items-center justify-between py-6'>
      {children}
    </div>
  )
}

export default Row