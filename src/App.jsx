import { useState } from 'react';
import NavBar from './Components/NavBar';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';
import Step5 from './Components/Step5';
import Button from './Components/Button';

const plansData = [
  { id: 'arcade', icon: '/images/icon-arcade.svg', title: 'Arcade', price: 9 },
  { id: 'advanced', icon: '/images/icon-advanced.svg', title: 'Advanced', price: 12 },
  { id: 'pro', icon: '/images/icon-pro.svg', title: 'Pro', price: 15 }
];
  
const AddonsData = [
  { id: 1, title: 'Online service', description: 'Access to multiplayer games', price: 1 },
  { id: 2, title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
  { id: 3, title: 'Customizable profile', description: 'Custom theme on your profile', price: 2 }
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedBilling, setSelectedBilling] = useState('monthly');
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const [error, setError] = useState({});

  const validateSteps = () => {
    let newErrors = {};

    if (currentStep === 1) {
      if (!formValues.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formValues.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formValues.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
    }

    if (currentStep === 2) {
      if (!selectedPlan) {
        newErrors.selectedPlan = 'Please select a plan to proceed';
      }
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }


  const nextStep = () => {
    if (validateSteps()) {
      setCurrentStep((next) => next + 1);
    } 
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formValues.name && formValues.email && formValues.phone && selectedPlan) {
      setCurrentStep(5);

      console.log('Form submitted successfully');
      setFormValues({
        name: '',
        email: '',
        phone: '',
      });
      setSelectedPlan(null);
      setSelectedBilling('monthly');
      setSelectedAddOns([]);
      setError({});
    } else {
      setError.form = 'Please fill out all required fields before confirming.';
    }
  }

  return (
    <main className='relative h-screen w-full sm:bg-white sm:flex justify-center sm:shadow-lg  sm:max-w-[96%] mx-auto sm:h-full rounded-xl sm:p-3'>
      <NavBar currentStep={currentStep} />

      <div className='absolute w-full top-26 sm:relative sm:top-0'>
        {currentStep === 1 &&  <Step1
          formValues={formValues}
          setFormValues={setFormValues}
          error={error}
        />}

        {currentStep === 2 && <Step2
          plansData={plansData}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedBilling={selectedBilling}
          setSelectedBilling={setSelectedBilling}
          error={error}
        />}

        {currentStep === 3 && <Step3
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
          selectedBilling={selectedBilling}
          AddonsData={AddonsData}
        />}

        {currentStep === 4 && <Step4
          plansData={plansData}
          AddonsData={AddonsData}
          selectedPlan={selectedPlan}
          selectedBilling={selectedBilling}
          selectedAddOns={selectedAddOns}
          setCurrentStep={setCurrentStep}
        />}

        {currentStep === 5 && <Step5 />}
      </div>
      
      {currentStep < 5 && (
        <Button
          className='hidden'
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
      
    </main>
  )
}

export default App;
