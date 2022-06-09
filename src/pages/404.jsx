import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@/configs/icons'

const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-24">
        <h1 className="text-3xl mb-6">Page Not Found </h1>
        <Link href="/">
          <a className="flex items-center text-accent">
            <span className="mr-2">
              <HomeIcon />
            </span>
            Return Home
          </a>
        </Link>
      </div>
    </>
  )
}

export default PageNotFound
