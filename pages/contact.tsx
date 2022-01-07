import type { NextPage } from 'next'

import ContactButtons from '../components/ContactForm/ContactButtons'

const Contain: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center' >
     <ContactButtons/>
    </div>
  )
}

export default Contain
