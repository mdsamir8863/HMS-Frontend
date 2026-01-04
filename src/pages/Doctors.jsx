import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  // pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const doctorsPerPage = 4

  const applyFilter = () => {
    let filtered = speciality
      ? doctors.filter(doc => doc.speciality === speciality)
      : doctors

    setFilterDoc(filtered)
    setCurrentPage(1) // reset page on filter change
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  // pagination calculation
  const indexOfLastDoctor = currentPage * doctorsPerPage
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage
  const currentDoctors = filterDoc.slice(indexOfFirstDoctor, indexOfLastDoctor)

  const totalPages = Math.ceil(filterDoc.length / doctorsPerPage)

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm sm:hidden ${
            showFilter ? 'bg-primary text-white' : ''
          }`}
        >
          Filters
        </button>

        {/* Filters */}
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {[
            'General physician',
            'Gynecologist',
            'Dermatologist',
            'Pediatricians',
            'Neurologist',
            'Gastroenterologist',
          ].map((sp) => (
            <p
              key={sp}
              onClick={() =>
                speciality === sp ? navigate('/doctors') : navigate(`/doctors/${sp}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded cursor-pointer ${
                speciality === sp ? 'bg-[#E2E5FF] text-black' : ''
              }`}
            >
              {sp}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className='w-full'>
          <div className='grid grid-cols-auto gap-4 gap-y-6'>
            {currentDoctors.map((item) => (
              <div
                key={item._id}
                onClick={() => {
                  navigate(`/appointment/${item._id}`)
                  window.scrollTo(0, 0)
                }}
                className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300'
              >
                <img className='bg-[#EAEFFF]' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm ${
                    item.available ? 'text-green-500' : 'text-gray-500'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      item.available ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                    {item.available ? 'Available' : 'Not Available'}
                  </div>

                  <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                  <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className='flex justify-center items-center gap-2 mt-10'>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className='px-3 py-1 border rounded disabled:opacity-50'
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? 'bg-primary text-white' : ''
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className='px-3 py-1 border rounded disabled:opacity-50'
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors
