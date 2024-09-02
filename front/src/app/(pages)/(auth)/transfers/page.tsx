import DepositListComponent from "@/components/DepositListComponent";
import TransferListComponent, { Transfer } from "@/components/TransferListComponent";

export default function TransfersPage() {
    const received: Transfer[] = [
        {amount: 100, receiver: 1, return: false, sender: 2},
        {amount: 100, receiver: 1, return: false, sender: 2},
        {amount: 100, receiver: 1, return: true, sender: 2},
    ];

    const sended: Transfer[] = [
        {amount: 100, receiver: 2, return: false, sender: 1},
        {amount: 100, receiver: 2, return: true, sender: 1},
        {amount: 100, receiver: 2, return: false, sender: 1},
    ];

    return (
        <div>
            <h1>Tranasferencias</h1>
            <DepositListComponent deposits={received}></DepositListComponent>
            <TransferListComponent type="receiver" transfers={received}></TransferListComponent>
            <TransferListComponent type="sender" transfers={sended}></TransferListComponent>
        </div>
    );
}
