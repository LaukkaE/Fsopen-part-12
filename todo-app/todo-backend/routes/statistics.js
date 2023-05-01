const express = require('express');
const router = express.Router();
const redis = require('../redis')



router.get('/', async (_, res) => {
    let result = await redis.getAsync("addedtodos")
    result = Number(result)
    if(!result){
        redis.setAsync("addedtodos", 0)
        result = 0;
    }
    res.send({"added_todos": result});
  });


module.exports = router;
