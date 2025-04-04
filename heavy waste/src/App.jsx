import {useState} from 'react';
import HeavyWasteModal from "./HeavyWasteModal"
import ModalWrapper from "./ModalWrapper"
import SkipSelectPage from './SkipSelectedPage';


function App() {
  // const [isOpen, setIsOpen] = useState(true); // Modal deschis la start;
  // const [confirmationMessage, setConfirmationMessage] = useState("");

  // const handleCancel =() =>{
  //   setIsOpen(false);
  //   setConfirmationMessage("Modal closed.");
  // };

  // const handleContinue = () => {
  //   setIsOpen(false);
  //   setConfirmationMessage("You selected heavy waste types and continued.");
  // }

  const [step, setStep] = useState('modal'); // 'modal' sau 'skip-select'

  const handleCancel = () => setStep('done');

  const handleContinue = () => setStep('skip-select');

  return (
    // <div style={{padding: '2rem', background: '#000', minHeight: '100vh', color: 'white'}}>
    //   <h1 style={{ textAlign: 'center', margin: '2rem' }}>Test Modal</h1>

    //   {isOpen && (
    //     <ModalWrapper onClose={() => setIsOpen(false)}>
    //       <HeavyWasteModal 
    //       onCancel={handleCancel}
    //       onContinue={handleContinue}
    //       />
    //     </ModalWrapper>
    //   )}

    //   {confirmationMessage && (
    //     <div style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#4caf50' }}>
    //        ✅ {confirmationMessage}
    //     </div>
    //   )}
    // </div>

    <div>
    {step === 'modal' && (
      <ModalWrapper onClose={handleCancel}>
        <HeavyWasteModal
          onCancel={handleCancel}
          onContinue={handleContinue}
        />
      </ModalWrapper>
    )}

    {step === 'skip-select' && <SkipSelectPage />}

    {step === 'done' && (
      <div style={{ padding: '2rem', color: '#fff', background: '#000', minHeight: '100vh' }}>
        Modal was closed.
      </div>
    )}
  </div>
  )
}

export default App
