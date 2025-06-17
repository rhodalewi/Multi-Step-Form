const Step2 = ({ plansData, selectedPlan, setSelectedPlan, selectedBilling, setSelectedBilling, error }) => {

  return (
    <section className="bg-white m-auto p-6 rounded-xl shadow-lg w-[90%] sm:bg-transparent sm:shadow-none sm:w-md">
      <h1 className="font-bold text-2xl text-blue-950 mb-1">Select your plan</h1>
      <p className="text-base text-gray-500/80 mb-5 min-w-60 sm:text-sm">You have the option of monthly or yearly billing.</p>

      <div className="sm:grid grid-cols-3 gap-4">
        {plansData.map((plan) => {
         
          return (
            <div
              key={plan.id}
              className={`flex gap-6 items-start px-3 py-4 rounded-lg border cursor-pointer transition-all duration-500 ease-in-out sm:flex-col hover:scale-96 hover:border-blue-950
              ${selectedPlan === plan.id ? 'focus:border-blue-950 bg-gray-500/5' : 'border-gray-500/30 bg-white'} `}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <img src={ plan.icon } alt="Icon" className="h-auto max-w-full object-cover sm:scale-[0.8]" />
              <div>
                <h2 className="font-bold text-base text-blue-950/80 sm:text-sm">{plan.title}</h2>
                
                <p className="text-sm text-gray-500/80 sm:text-xs">${selectedBilling === "monthly" ? plan.price : plan.price * 10}/ {selectedBilling === "monthly" ? "mo" : "yr"}</p>

                {selectedBilling === "yearly" && <p className="text-sm text-blue-950/80 font-semibold mt-1 sm:text-xs sm:font-medium">2 months free</p>}
              </div>
            </div>
          )
        })}
      </div>

      {error.selectedPlan && <p className="text-red-500/90 text-xs mt-2 text-center">{error.selectedPlan}</p>}


      <div className="flex items-center justify-center gap-4 mt-7 bg-blue-50/55 p-3 rounded-lg">
        <span className={selectedBilling === 'monthly' ? 'text-blue-950 font-semibold text-sm sm:text-xs' : 'text-gray-500 text-sm sm:text-xs' }>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedBilling === 'yearly'}
            onChange={() => setSelectedBilling(selectedBilling === 'monthly' ? 'yearly' : 'monthly')}
          />
        
          <div className="w-8 h-4 bg-blue-950 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-950"></div>  
        </label>
        <span className={selectedBilling === 'yearly' ? 'text-blue-950 font-semibold text-sm sm:text-xs' : 'text-gray-500 text-sm sm:text-xs'}>Yearly</span>
      </div>
      
    </section>
  )
}

export default Step2;