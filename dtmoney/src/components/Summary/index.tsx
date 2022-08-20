import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="logo de entrada" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="logo de saidas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div className='backTotal'>
                <header>
                    <p>total</p>
                    <img src={totalImg} alt="logo de total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}