import React, { ReactNode } from 'react'

const Row = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div className='w-full h-max flex items-center justify-between py-6'>
      {children}
    </div>
  )
}

export default Row