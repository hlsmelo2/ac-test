type Transfers = {
  transactionId: number;
  sender: number;
  receiver: number;
  amount: number;
  return: number;
};

type props = {
  transfers: Transfers[],
  balance: number,
};

const getCurrency = (amount: number) => (amount).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export default function TransfersComponent({ transfers, balance }: props) {
    return (
      <div>
        <style jsx>{`
          ul.filter {
            margin: 0;
            padding: 0;
          }
          ul.filter li { display: inline-block; }
        `}
        </style>

        <div id="tools">
          <div className="actions">
            <button id="send">Transferir</button>
            <button id="receive">Receber</button>
          </div>

          <ul className="filter">
            <li><a href="#" className="all">Todas</a></li>
            <li><a href="#" className="sended">Enviadas</a></li>
            <li><a href="#" className="received">Recebidas</a></li>
            <li><a href="#" className="returned">Devolvidas</a></li>
          </ul>

          <div className="balance">{ getCurrency(balance) }</div>
        </div>
        <table id="transfers">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {
              transfers.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.transactionId}</td>
                  <td>{item.amount}</td>
                  <td>{item.sender}</td>
                  <td>{item.receiver}</td>
                  <td>{item.return}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    );
}
