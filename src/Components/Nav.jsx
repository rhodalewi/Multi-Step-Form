const Nav = ({ currentStep }) => {
  const navSteps = [
    { id: 1, title: 'Step 1', description: 'Your info' },
    { id: 2, title: 'Step 2', description: 'Select plan' },
    { id: 3, title: 'Step 3', description: 'Add-ons' },
    { id: 4, title: 'Step 4', description: 'Summary' }
  ];

  return (
    <nav className="relative w-fit h-[460px]">
    
      <img
        src="/images/bg-sidebar-desktop.svg"
        alt="Background"
        className="object-cover w-full h-full"
      />

      {/* Overlay content */}
      <ul className="absolute top-0 left-0 flex flex-col gap-6 p-6 pt-10 pl-8">
        {navSteps.map(step => (
          <li key={step.id} className="flex items-center gap-4">
            <span
              className={`border border-solid rounded-full w-8 h-8 flex items-center justify-center font-medium ${
                step.id === currentStep
                  ? 'bg-blue-100 text-black border-blue-100'
                  : 'border-white text-white'
              }`}
            >
              {step.id}
            </span>
            <div>
              <h2 className="text-xs text-blue-50/50 uppercase">{step.title}</h2>
              <p className="text-white uppercase text-xs tracking-widest font-medium">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
