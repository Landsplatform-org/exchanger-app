import Container from '@/hoc/Container'
import Link from 'next/link'
import React from 'react'
import Wrapper from '@/hoc/Wrapper'
import { sourcesData } from '@/config/sources-data'

const page = () => {
  return (
    <Wrapper position="flex-end">
    <Container>
      <div className="flex flex-col gap-4 w-full bg-white p-4 rounded-md shadow-lg text-gray-500">
        <h3 className="font-bold text-blue-400">Источники курсов валют</h3>
        <table className="mt-6">
          <thead>
            <tr className="flex items-center gap-10 p-2 rounded-md shadow-md">
              <th className="w-[400px] text-start">ID</th>
              <th className="w-[250px] text-start">Название</th>
              <th className="w-[800px] text-end">Обновлено</th>
            </tr>
          </thead>
          {sourcesData.map((item: any) => (
            <tbody key={item.id}>
              <tr className="flex items-center gap-10 px-2 py-1 my-2 rounded-md border border-1 border-gray-200">
                <td className="w-[400px]"><Link href="#" className='text-blue-500 hover:text-blue-700 transition-colors duration-200'>{item.id}</Link></td>
                <td className="w-[250px]">{item.name}</td>
                <td className="w-[800px] flex items-end justify-end gap-2 text-white">
                  <button className="bg-[#0cc6c9] p-2 hover:brightness-90 transition-all duration-200 rounded-md">Обновить</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Container>
  </Wrapper>
  )
}

export default page