const router = require('express').Router();
const { Plan } = require('../db/models');

router
  .route('/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    try {
      const plans = await Plan.findAll({
        where: { userId },
        order: [['date', 'ASC']],
      });

      if (plans) {
        res.status(201).json({ plans });
      } else {
        res.status(404).json({ message: 'Ничего не запланировано' });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });

router
  .route('/sendPlan')
  .post(async (req, res) => {
    const {
      userId,
      title,
      description,
      date,
    } = req.body;

    try {
      if (!date || !title) {
        res.status(400).json({ message: 'Заполните поля Title и Дата' });
      } else {
        await Plan.create({
          userId,
          title,
          description: description || '--',
          date,
        });
        res.status(201).json({});
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

router
  .route('/updatePlan')
  .put(async (req, res) => {
    const {
      planId,
      title,
      description,
      date,
    } = req.body;

    try {
      await Plan.update(
        {
          title,
          description,
          date,
        },
        {
          where: { id: planId },
        },
      );

      res.status(201).json({});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;
