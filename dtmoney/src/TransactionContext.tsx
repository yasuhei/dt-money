import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionContextData {
    transaction: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transaction, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions').then(response => setTransaction(response.data.transactions))
    }, [])

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionContext.Provider value={{ transaction, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}


// const data = {
//     title,
//     value,
//     category,
//     type
// }
// api.post('/transactions', data)