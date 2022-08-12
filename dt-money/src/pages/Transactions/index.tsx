import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='40%'>placeholder</td>
                            <td>
                                <PriceHighlight variant='income'>
                                    $ 5000
                                </PriceHighlight>
                            </td>
                            <td>placeholder</td>
                            <td>placeholder</td>
                        </tr>
                        <tr>
                            <td width='40%'>placeholder</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    $ 500
                                </PriceHighlight>
                            </td>
                            <td>placeholder</td>
                            <td>placeholder</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}