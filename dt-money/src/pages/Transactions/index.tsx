import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {

    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map( transaction => (
                                <tr key={transaction.id}>
                                    <td width='40%'>{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            ))
                        ) : (
                            'Não foram cadastradas transações'
                        )}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}