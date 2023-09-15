import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode[] | ReactNode }) => {
  return (
    <div className='w-[65%] flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Container