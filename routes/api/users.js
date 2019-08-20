const express = require('express');
const router = express.Router();

// 定义路由 $route GET /api/users/test
router.get('/test', (req, res) => {
    res.json({ msg: 'login works' });
})

// 定义注册接口 $route Post /api/users/register


module.exports = router;