'use client'
import DepositListComponent from "@/components/DepositListComponent";
import TransferListComponent, { Transfer } from "@/components/TransferListComponent";
import Axios from "axios-observable";
import { useState } from "react";

export default function TransfersPage() {
    const [received, setReceived] = useState<Transfer[]>([]);
    const [sended, setSended] = useState<Transfer[]>([]);

    const getTransfers = function() {
        Axios.get('http://localhost:3001/transfers', {
            params: { id: 1 },
        }).subscribe({
            next({ data }: { data: Transfer[] }) {
                setReceived(data);
                setSended(data);
                console.log({data});
            },
        }).unsubscribe();
    }

    getTransfers();

    return (
        <div>
            <h1>Tranasferencias</h1>
            <DepositListComponent deposits={received}></DepositListComponent>
            <TransferListComponent type="receiver" transfers={received}></TransferListComponent>
            <TransferListComponent type="sender" transfers={sended}></TransferListComponent>
        </div>
    );
}
