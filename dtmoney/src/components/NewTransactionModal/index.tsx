import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('')



    return (
        <Modal
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'

            >
                <img src={closeImg} alt="close" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder='Título' />

                <input placeholder='Valor' type='number' />

                <TransactionTypeContainer>
                    <RadioBox type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'

                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'


                    >
                        <img src={outcomeImg} alt="saída" />
                        <span>Saída</span>

                    </RadioBox>

                </TransactionTypeContainer>


                <input placeholder='Categoria' />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}