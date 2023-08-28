import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode[] | ReactNode }) => {
  return (
    <div className='w-[1620px] p-4 '>
      {children}
    </div>
  )
}

export default Container