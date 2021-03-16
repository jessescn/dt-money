import { Container } from "./styles";

import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    )
}