const NavBar = ({ currentStep }) => {
    const navSteps = [
        { id: 1, title: 'Step 1', description: 'Your info' },
        { id: 2, title: 'Step 2', description: 'Select plan' },
        { id: 3, title: 'Step 3', description: 'Add-ons' },
        { id: 4, title: 'Step 4', description: 'Summary' }
    ];
  return (
    <nav className="relative flex justify-center sm:w-fit sm:flex-col">
        <picture className="w-full relative object-cover h-full">
            <source 
                media="(min-width:640px )"
                srcSet="/images/bg-sidebar-desktop.svg" 
            />
            <img
                src="/images/bg-sidebar-mobile.svg"
                alt="Background"
                className=" w-full"
            />
        </picture>
        
        <ul className="absolute top-8 flex w-full justify-center gap-5 sm:gap-6 sm:flex-col sm:pl-6">
            {navSteps.map(step => (
                <li key={step.id} className="flex items-center gap-4">
                    <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full border text-base font-medium sm:w-7 sm:h-7 sm:text-xs
                            ${
                            step.id === currentStep
                            ? 'bg-blue-100 text-black border-blue-100'
                            : 'border-white text-white'
                        }`}
                    > {step.id} </span>
                    <div className="hidden sm:block">
                        <h2 className="text-[0.65rem] text-blue-50/60 uppercase">{step.title}</h2>
                        <p className="text-white uppercase text-xs tracking-widest font-medium">
                            {step.description}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar;