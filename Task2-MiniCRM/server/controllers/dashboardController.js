import Lead from '../models/Lead.js';

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private (Admin)
export const getDashboardStats = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'New' });
    const contactedLeads = await Lead.countDocuments({ status: 'Contacted' });
    const convertedLeads = await Lead.countDocuments({ status: 'Converted' });
    
    // Additional metrics
    const qualifiedLeads = await Lead.countDocuments({ status: 'Qualified' });
    const closedLeads = await Lead.countDocuments({ status: 'Closed' });

    // Recent 5 leads
    const recentLeads = await Lead.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      metrics: {
        total: totalLeads,
        new: newLeads,
        contacted: contactedLeads,
        qualified: qualifiedLeads,
        converted: convertedLeads,
        closed: closedLeads,
      },
      recentLeads,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching stats' });
  }
};
