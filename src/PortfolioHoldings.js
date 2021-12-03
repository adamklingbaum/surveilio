import { Routes, Route, useParams } from 'react-router-dom';
import { Row, Table } from 'react-bootstrap';
import { portfolio } from './mockPortfolio';
import PortfolioHolding from './PortfolioHolding';

export default function PortfolioHoldings() {
  const { holdings } = portfolio;
  console.log(portfolio);
  console.log(holdings);
  let params = useParams();
  return (
    <div className="my-3">
      <div className="my-3">
        <h2>Portfolio {params.id} holdings</h2>
      </div>
      <div className="my-4">
        <Table responsive>
          <thead>
            <tr>
              <th>Company</th>
              <th className="text-end">Price</th>
              <th className="text-end">Shares</th>
              <th className="text-end">Market value</th>
              <th className="text-end">Average Cost</th>
              <th className="text-end">Total Cost</th>
              <th className="text-end">Unrealized Gain</th>
              <th className="text-end">Trades</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <PortfolioHolding holding={holding} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
