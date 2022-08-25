import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false)

  function handleOpenTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModal(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <Dashboard />



      <GlobalStyle />
    </>
  );
}

