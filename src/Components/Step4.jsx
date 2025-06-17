const Step4 = ({ plansData, AddonsData, selectedPlan, selectedBilling, selectedAddOns, setCurrentStep }) => {
    if (!selectedPlan) return null;
    return (
      
        <section className='text-blue-950 bg-white m-auto p-6 rounded-xl shadow-lg w-[90%] sm:w-md sm:bg-transparent sm:shadow-none'>
            <h2 className='font-bold text-2xl text-blue-950 mb-1'>Finishing up</h2>
            <p className='text-base text-gray-500/80 mb-5 sm:text-sm sm:mb-7'>Double-check everything looks OK before confirming.</p>

            <div className="p-4 bg-blue-100/25 rounded-lg">
                <div className="flex justify-between items-center pb-5 border-b border-solid border-gray-500/20 ">
                    <div>
                        <h2 className="capitalize text-base font-medium sm:text-sm"> {selectedPlan} ({selectedBilling}) </h2>
                        <button
                            type="button"
                            className="text-gray-500/60 hover:text-blue-700 text-base font-medium underline cursor-pointer sm:text-xs"
                            onClick={() => setCurrentStep(2)}
                        > Change </button>
                    </div>
                    <span className="text-base font-bold sm:text-sm"> ${selectedBilling === 'monthly' ? plansData.find(plan => plan.id === selectedPlan)?.price : plansData.find(plan => plan.id === selectedPlan)?.price * 10}/{selectedBilling === 'monthly' ? 'mo' : 'yr'} </span>
                </div>

                {selectedAddOns.length > 0 ? (
                    <div className="mt-4">
                        <ul className="space-y-4 text-base sm:text-xs">
                            {selectedAddOns.map(addonId => {
                                const addon = AddonsData.find(addon => addon.id === addonId);
                                return (
                                    <li key={addon.id} className="flex justify-between items-center">
                                        <span className="text-gray-500/70 font-medium"> {addon.title} </span>
                                        <span className=" font-bold text-blue-950/70"> +${selectedBilling === 'monthly' ? addon.price : addon.price * 10}/{selectedBilling === 'monthly' ? 'mo' : 'yr'} </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <p className="text-base text-center text-gray-500/70 mt-4 sm:text-sm"> No add-ons selected </p>
                )}
            </div>

            <div className="flex justify-between items-center mt-6 px-4 sm:mt-4">
                <p className="text-base text-gray-500/80 sm:text-xs">Total (per {selectedBilling === 'monthly' ? 'month' : 'year'})</p>
                <p className="text-lg font-bold text-blue-700 sm:text-base">+
                    ${selectedBilling === 'monthly' ? plansData.find(plan => plan.id === selectedPlan)?.price + selectedAddOns.reduce((total, id) => total + AddonsData.find(addon => addon.id === id).price, 0) : (plansData.find(plan => plan.id === selectedPlan)?.price * 10) + selectedAddOns.reduce((total, id) => total + (AddonsData.find(addon => addon.id === id).price * 10), 0)}/{selectedBilling === 'monthly' ? 'mo' : 'yr'}
                </p>
            </div>
        </section>
    )
}

export default Step4;