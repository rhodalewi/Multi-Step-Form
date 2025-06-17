const Step1 = ({ formValues, setFormValues, error }) => {

  return (
    <section className="bg-white m-auto p-6 rounded-xl shadow-lg w-[90%] sm:bg-transparent sm:shadow-none sm:w-md">
        <h1 className='font-bold text-2xl text-blue-950 mb-1'>Personal info</h1>
        <p className='text-base text-gray-500/80 mb-5 min-w-60 sm:min-w-0 sm:mb-7 sm:text-sm'>Please provide your name, email address, and phone number.</p>
          
          <form>
            <div>
                <div className='mb-5'>
                  <div className="flex items-center justify-between">
                    <label htmlFor="name" className='block text-xs font-medium text-gray-500'>Name</label>
                    {error.name && <p className='text-red-500/90 text-xs mt-1 font-medium'>{error.name}</p>}
                  </div>
                  
                  <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Stephen King"
                      className={`mt-1 block w-full border border-gray-300 rounded-sm h-[40px] outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-[12px] placeholder:text-gray-400 placeholder:text-xs placeholder:font-medium cursor-pointer text-sm sm:rounded-lg
                        ${error.name ? 'border-red-500' : ''}`}
                      value={formValues.name}
                      onChange={(e) => setFormValues({... formValues, name: e.target.value})}
                    />
                </div>
              
                <div className='mb-5'>
                    <div className="flex items-center justify-between">
                      <label htmlFor="email" className='block text-xs font-medium text-gray-500'>Email Address</label>
                      {error.email && <p className='text-red-500/90 text-xs mt-1 font-medium'>{error.email}</p>}
                    </div>
                    
                    <input
                        type="email"
                        id="email"
                        name="email"  
                        placeholder='e.g. stephenking@lorem.com'
                        className={`mt-1 block w-full border border-gray-300 rounded-sm h-[40px] outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-[12px] placeholder:text-gray-400 placeholder:text-xs placeholder:font-medium cursor-pointer text-sm sm:rounded-lg
                        ${error.email ? 'border-red-500' : ''}`}
                        value={formValues.email}
                        onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                      />
                </div>
                
                <div>
                     <div className="flex items-center justify-between">
                        <label htmlFor="phone" className='block text-xs font-medium text-gray-500'>Phone number</label>
                        {error.phone && <p className='text-red-500/90 text-xs mt-1 font-medium'>{error.phone}</p>}
                      </div>
      
                    <input
                        type="tel"
                        id="phone"
                        name="phone"  
                        className={`mt-1 block w-full border border-gray-300 rounded-sm h-[40px] outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-[12px] placeholder:text-gray-400 placeholder:text-xs placeholder:font-medium cursor-pointer text-sm sm:rounded-lg
                        ${error.phone ? 'border-red-500' : ''}`}
                        placeholder='e.g. +1 234 567 890'
                        value={formValues.phone}
                        onChange={(e) => setFormValues({...formValues, phone: e.target.value})}
                      />
                </div>
            </div>
        </form>

    </section>
  )
}

export default Step1