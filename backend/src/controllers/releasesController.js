import { Release } from '../models/Release.js';

export async function listReleases(req, res, next) {
  try {
    const releases = await Release.find().sort({ updatedAt: -1 });
    res.json(releases);
  } catch (error) {
    next(error);
  }
}

export async function createRelease(req, res, next) {
  try {
    const release = await Release.create(req.body);
    res.status(201).json(release);
  } catch (error) {
    next(error);
  }
}

export async function updateRelease(req, res, next) {
  try {
    const { id } = req.params;
    const release = await Release.findByIdAndUpdate(id, req.body, { new: true });
    if (!release) {
      return res.status(404).json({ message: 'Release not found' });
    }
    res.json(release);
  } catch (error) {
    next(error);
  }
}
