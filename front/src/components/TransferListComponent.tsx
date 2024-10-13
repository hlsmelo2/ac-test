export type Transfer = {
    sender: number,
    receiver: number,
    amount: number,
    return: boolean,
}
type ActorType = 'sender' | 'receiver';

type TransferListProps = {
    type: ActorType,
    transfers: Transfer[],
}

export default function TransferListComponent({ type, transfers, ...props }: TransferListProps) {
    const iam: any = {
        receiver: { key: 'sender', title: 'Rementente' },
        sender: { key: 'receiver', title: 'Destinatário' },
    }[type];

    const key: ActorType = iam.key;

    return (
        <div className={type}>
            <table>
                <thead>
                    <tr>
                        <th className="amount">Valor</th>
                        <th className={key}>{iam.title}</th>
                        <th className="return">Devolvido</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map((transfer, index) => (
                        <tr key={index}>
                            <td className="amount">{transfer.amount}</td>
                            <td className={key}>{transfer[key]}</td>
                            <td className="return">{transfer.return ? 'Sim' : 'Não'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
