const express = require('express');
const router = express.Router();
const { createJob, getAllJobs, updateJobStatus, deleteJob } = require('../controllers/application.controller');

router.post('/applications', createJob);
router.get('/applications', getAllJobs);
router.patch('/applications/:id', updateJobStatus);
router.delete('/applications/:id', deleteJob);


module.exports = router;
