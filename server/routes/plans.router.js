const router = require('express').Router();
const { Plan } = require('../db/models');

router
  .route('/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    try {
      const plans = await Plan.findAll({ where: { userId } });

      if (plans) {
        res.status(201).json({ plans });
      } else {
        res.status(404).json({ message: 'Ничего не запланировано' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
