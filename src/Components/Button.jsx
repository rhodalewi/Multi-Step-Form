const Button = ({ currentStep, nextStep, prevStep, handleSubmit }) => {
  return (
    <footer className='bg-white fixed bottom-0 w-full p-4 flex justify-between items-center sm:bg-transparent sm:absolute sm:p-0 sm:w-[396px] sm:bottom-4 sm:right-14'>
      {currentStep > 1 ? (
        <button onClick={prevStep} className='bg-transparent text-gray-500/80 rounded-md hover:text-blue-950 text-base font-medium cursor-pointer m:px-4 sm:py-2 sm:text-sm'>
          Go Back
        </button>
      ) : (
        <div />
      )}
      
      {currentStep < 4 && (
        <button
          onClick={nextStep}
          className='px-6 py-3 bg-blue-950 text-white rounded-sm hover:bg-blue-700 text-sm cursor-pointer sm:px-4 sm:py-2 sm:rounded-md'
        >
          Next Step
        </button>
      )}

      {currentStep === 4 && (
        <button
          className='px-7 py-3 bg-blue-700 text-white rounded-sm hover:bg-purple-600/50 text-sm cursor-pointer sm:px-6 sm:py-2 sm:rounded-md'
          onClick={handleSubmit}>
          Confirm
        </button>
      )}
    </footer>
  )
};

export default Button;