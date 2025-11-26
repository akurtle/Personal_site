import Banner from '@/components/extra_projects/Banner'
import ExtraProjects from '@/components/extra_projects/ExtraProjects'
import React from 'react'

function page() {
  return (
    <div className='overflow-x-hidden'>
      <Banner/>
      <ExtraProjects/>
    </div>
  )
}

export default page