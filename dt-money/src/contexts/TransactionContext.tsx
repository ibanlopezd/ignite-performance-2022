import { useState, useEffect, createContext, ReactNode } from "react";
import { api } from "../lib/axios";

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
            q: query
        }
       })

        setTransactions(res.data)
    }

    useEffect( () =>{ 
        fetchTransactions() 
    },[])

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}