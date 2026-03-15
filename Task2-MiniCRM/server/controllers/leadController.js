import Lead from '../models/Lead.js';

// @desc    Get all leads (with search/filter)
// @route   GET /api/leads
// @access  Private (Admin)
export const getLeads = async (req, res) => {
  try {
    const { search, status, sort } = req.query;
    
    let query = {};
    
    // Search by name, email, company, or source
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { companyName: { $regex: search, $options: 'i' } },
        { source: { $regex: search, $options: 'i' } },
      ];
    }
    
    // Filter by status
    if (status) {
      query.status = status;
    }

    // Sort options
    let sortObj = { createdAt: -1 }; // newest first by default
    if (sort === 'oldest') sortObj = { createdAt: 1 };
    
    const leads = await Lead.find(query).sort(sortObj);
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving leads' });
  }
};

// @desc    Get single lead by ID
// @route   GET /api/leads/:id
// @access  Private (Admin)
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving lead' });
  }
};

// @desc    Create new lead
// @route   POST /api/leads
// @access  Private (Admin)
export const createLead = async (req, res) => {
  try {
    const { fullName, email, phone, companyName, source, message } = req.body;

    const lead = await Lead.create({
      fullName,
      email,
      phone,
      companyName,
      source,
      message,
    });

    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: 'Invalid lead data', error: error.message });
  }
};

// @desc    Update lead (including status)
// @route   PUT /api/leads/:id
// @access  Private (Admin)
export const updateLead = async (req, res) => {
  try {
    const { fullName, email, phone, companyName, source, message, status } = req.body;

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    lead.fullName = fullName || lead.fullName;
    lead.email = email || lead.email;
    lead.phone = phone || lead.phone;
    lead.companyName = companyName || lead.companyName;
    lead.source = source || lead.source;
    lead.message = message || lead.message;
    lead.status = status || lead.status;

    const updatedLead = await lead.save();
    res.json(updatedLead);
  } catch (error) {
    res.status(400).json({ message: 'Invalid lead update data', error: error.message });
  }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin)
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    await lead.deleteOne();
    res.json({ message: 'Lead removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error deleting lead' });
  }
};

// @desc    Add note to lead
// @route   POST /api/leads/:id/notes
// @access  Private (Admin)
export const addNoteToLead = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ message: 'Note text is required' });
    }

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    const note = {
      text,
    };

    lead.notes.push(note);
    await lead.save();
    
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Server error adding note' });
  }
};
