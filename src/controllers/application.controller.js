const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  try {
    const { company, role, status, date, link } = req.body;

    const newJob = new Job({ company, role, status, date, link });
    const savedJob = await newJob.save();

    res.status(201).json(savedJob);
  } catch (error) {
    console.error('❌ Error creating job:', error);
    res.status(500).json({ error: 'Failed to add job application' });
  }
};



exports.getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find().sort({ createdAt: -1 });
      res.status(200).json(jobs);
    } catch (error) {
      console.error('❌ Error fetching jobs:', error);
      res.status(500).json({ error: 'Failed to fetch job applications' });
    }
  };
  


  exports.updateJobStatus = async (req, res) => {
    try {
      const jobId = req.params.id;
      const { status } = req.body;
  
      const updatedJob = await Job.findByIdAndUpdate(
        jobId,
        { status },
        { new: true }
      );
  
      if (!updatedJob) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      res.status(200).json(updatedJob);
    } catch (error) {
      console.error('❌ Error updating job status:', error);
      res.status(500).json({ error: 'Failed to update job status' });
    }
  };
  


  exports.deleteJob = async (req, res) => {
    try {
      const jobId = req.params.id;
  
      const deletedJob = await Job.findByIdAndDelete(jobId);
  
      if (!deletedJob) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error('❌ Error deleting job:', error);
      res.status(500).json({ error: 'Failed to delete job' });
    }
  };
  