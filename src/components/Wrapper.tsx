import React, { FC, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
  position: string;
}

const Wrapper: FC<WrapperProps> = ({ children, position }) => {
  return (
    <div 
      className='w-full min-h-screen h-max flex items-start bg-gray-200 py-10'
      style={{ justifyContent: position }}
    >
      {children}
    </div>
  )
}

export default Wrapper