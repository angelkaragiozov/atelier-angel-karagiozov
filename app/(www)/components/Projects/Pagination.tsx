'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Tooltip from '../UI/Tooltip';

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  totalProjects: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    totalProjects,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div className='flex items-center justify-between mx-10 mb-4 '>


       <Tooltip text="Previous Page" disabled={!hasPrevPage}>
      <button
        className={`border text-center border-dotted border-gray font-pixel text-2xl dark:border-dark hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-1.5 px-4 transition-all ease-in-out duration-1000 ${!hasPrevPage ? 'opacity-30 cursor-not-allowed' : ''}`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
       	&lt;
      </button></Tooltip>
      <div>
        {page} / {Math.ceil(totalProjects / Number(per_page))}
      </div>

      <Tooltip text="Next Page" disabled={!hasNextPage}>

      <button
        className={`border text-center border-dotted border-gray font-pixel text-2xl dark:border-dark hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-1.5 px-4 transition-all ease-in-out duration-1000 ${!hasNextPage ? 'opacity-30 cursor-not-allowed' : ''}`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        	&gt;
      </button></Tooltip>
    </div>
  )
}

export default PaginationControls