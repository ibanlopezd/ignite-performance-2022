import { SummaryContainer, SummaryCard} from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>
                        Saídas
                    </span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>

                <strong>R$ 170</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>
                        Entradas
                    </span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>

                <strong>R$ 17,000</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>
                        Total
                    </span>
                    <CurrencyDollar size={32} color='#ffffff' />
                </header>

                <strong>R$ 18,000</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}