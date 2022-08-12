import { useState, useEffect, createContext, ReactNode } from "react";
import { api } from "../lib/axios";

interface NewTransactionDTO {
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
}

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void> 
    createTransaction: (data: NewTransactionDTO) => void
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
    children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) {
       const res = await api.get('/transactions', {

        params: {
            _sort: 'createdAt',
            _order: 'desc',
            q: query
        }
       })

        setTransactions(res.data)
    }

    async function createTransaction(data: NewTransactionDTO) {
        const {
            description,
            category,
            type,
            price
        } = data

        const res = await api.post('/transactions', {
            description,
            category,
            type,
            price,
            createdAt: new Date()
        })

        if(res.status === 201) {
            setTransactions([res.data,...transactions])
        }
    }


    useEffect( () =>{ 
        fetchTransactions() 
    },[])

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions,
                createTransaction
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}