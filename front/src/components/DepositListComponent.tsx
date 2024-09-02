export type Deposit = {
    receiver: number,
    amount: number,
}

type DepositListProps = {
    deposits: Deposit[],
}

export default function DepositListComponent({ deposits, ...props }: DepositListProps) {
    return (
        <div className="deposits">
            <table>
                <thead>
                    <tr>
                        <th className="amount">Valor</th>
                        <th className="receiver">Destinatário</th>
                    </tr>
                </thead>
                <tbody>
                    {deposits.map(deposit => (
                        <tr>
                            <td className="amount">{deposit.amount}</td>
                            <td className="receiver">{deposit.receiver}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
