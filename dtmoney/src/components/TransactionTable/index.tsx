import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website </td>
                        <td className='deposit'>R$ 2.000</td>
                        <td>Desenvolvimento</td>
                        <td>13/07/1991</td>
                    </tr>
                    <tr>
                        <td>Aluguel </td>
                        <td className='withdraw'> - R$ 1.000</td>
                        <td>Casa</td>
                        <td>13/07/1991</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}