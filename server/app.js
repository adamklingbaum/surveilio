const express = require('express');
const { portfolio, security, transaction } = require('./controllers');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/securities', security.getAll);

app.get('/portfolios/:portfolio_id', portfolio.get);
app.get('/portfolios/:portfolio_id/summary', portfolio.getSummary);
app.get('/portfolios/:portfolio_id/daily', portfolio.getDailyValues);

app.get('/portfolios/:portfolio_id/holdings', portfolio.getHoldings);
app.post('/portfolios', portfolio.create);

app.post('/transactions', transaction.create);

module.exports = app;
