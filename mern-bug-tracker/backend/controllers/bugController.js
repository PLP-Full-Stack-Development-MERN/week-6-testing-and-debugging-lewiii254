import Bug from "../models/Bug.js";

// Create Bug
export const createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    const bug = await Bug.create({ title, description });
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Bugs
export const getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

// Update Bug
export const updateBug = async (req, res) => {
  const { status } = req.body;
  const bug = await Bug.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(bug);
};

// Delete Bug
export const deleteBug = async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.json({ message: "Bug deleted" });
};
