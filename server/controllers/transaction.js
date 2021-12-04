const { security, transaction } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const { portfolioId, symbol, shares, price, type } = req.body;
      const [rows, fields] = await security.getBySymbol(symbol);
      const securityId = rows[0].id;
      const results = await transaction.create({
        type,
        securityId,
        shares,
        price,
        portfolioId,
      });
      res.status(201).send(results[0]);
    } catch (e) {
      console.error(e);
      res.status(500).send();
    }
  },
};
