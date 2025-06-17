const Step3 = ({ selectedAddOns, setSelectedAddOns, selectedBilling, AddonsData }) => {
    const handleAddOnChange = (addonId) => {
        if (selectedAddOns.includes(addonId)) {
            setSelectedAddOns(selectedAddOns.filter(id => id !== addonId));
        } else {
            setSelectedAddOns([...selectedAddOns, addonId]);
        }
    };

    return (
        <section className="bg-white m-auto p-6 rounded-xl shadow-lg w-[90%] sm:bg-transparent sm:shadow-none sm:w-md">
            <h1 className="font-bold text-2xl text-blue-950 mb-1">Pick add-ons</h1>
            <p className="text-base text-gray-500/80 mb-5 min-w-60 sm:text-sm">Adds-on help enhabce your gaming experience.</p>
          
            <div className="space-y-3">
                {AddonsData.map(Addon => (
                    <div
                        key={Addon.id}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg border cursor-pointer transition-all duration-500 ease-in-out hover:border-blue-950
                    ${selectedAddOns.includes(Addon.id) ? 'bg-blue-50 border-blue-950' : 'border-gray-500/30 bg-white'}`}
                        onClick={() => console.log(`Selected Add-on: ${Addon.title}`)}
                    >
                        <div className="flex items-center gap-6">
                            <input
                                type="checkbox"
                                checked={selectedAddOns.includes(Addon.id)}
                                onChange={() => handleAddOnChange(Addon.id)}
                                className="h-4 w-4 scale-150 accent-blue-700 cursor-pointer sm:scale-none"
                            />

                            <div>
                                <h2 className="font-medium text-base text-blue-950 sm:text-sm"> {Addon.title} </h2>
                                <p className="text-sm text-gray-500/80 sm:text-xs"> {Addon.description} </p>
                            </div>
                        </div>
                    

                        <p className="text-blue-700 text-sm font-medium sm:text-xs">
                            +${selectedBilling === 'monthly' ? Addon.price : (Addon.price * 10)}/
                            {selectedBilling === 'monthly' ? 'mo' : 'yr'}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Step3;