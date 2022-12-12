const express = require('express');
const router = express.Router();

router.post('/generateimage',function(res,req){
	req.status(200).json({
		success:true
	});
});

module.exports = router;
