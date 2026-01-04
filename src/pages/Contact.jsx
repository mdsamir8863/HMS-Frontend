import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='md:mx-10'>

      {/* Header */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* Main Content */}
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 text-sm'>

        {/* Image */}
        <img className='w-full md:max-w-[400px] rounded-lg shadow-md' src={assets.contact_image} alt="HMS Contact" />

        {/* Info Section */}
        <div className='flex flex-col justify-center items-start gap-6'>

          {/* Office Info */}
          <p className='font-semibold text-lg text-gray-700'>OUR OFFICE</p>
          <p className='text-gray-500'>
            HMS – Hospital Management System <br />
            54709 Willms Station, Suite 350 <br />
            Washington, USA <br />
            <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Google Maps</a>
          </p>
          <p className='text-gray-500'>
            📞 Tel: +1 (415) 555-0132 <br />
            ✉️ Email: <a href="mailto:support@hms.com" className="text-primary hover:underline">support@hms.com</a>
          </p>

          {/* Support Hours */}
          <p className='font-semibold text-lg text-gray-700'>SUPPORT HOURS</p>
          <p className='text-gray-500'>
            Monday – Friday: 9:00 AM – 6:00 PM <br />
            Saturday: 10:00 AM – 4:00 PM <br />
            Sunday: Closed
          </p>

          {/* Careers Section */}
          <p className='font-semibold text-lg text-gray-700'>CAREERS AT HMS</p>
          <p className='text-gray-500'>
            Interested in joining our team? Explore current job openings, learn about our work culture, and become a part of our mission to improve healthcare accessibility.
          </p>
          <button className='border border-primary px-8 py-3 text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-300'>
            Explore Jobs
          </button>

        </div>
      </div>

    </div>
  )
}

export default Contact
