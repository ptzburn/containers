const { getAsync, setAsync } = require('../redis')
const express = require('express');
const router = express.Router();

const configs = require('../util/config')

let visits = 0
const REDIS_KEY = 'added_todos'

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const added_todos = await getAsync(REDIS_KEY) || await setAsync(REDIS_KEY, 0)
  
  res.json({
    added_todos: parseInt(added_todos)
  });
});

module.exports = router;
