import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { api } from './services/api';
import { GlobalStyle } from "./styles/global"
import { TransactionProvider } from './hooks/useTransactions';



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
    <TransactionProvider >
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <Dashboard />



      <GlobalStyle />
    </TransactionProvider>
  );
}

