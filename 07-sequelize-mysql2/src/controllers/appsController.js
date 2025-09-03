import { listApps, createApp } from '../services/appsService.js';

export const getAllApps = async (_req, res) => {
  const data = await listApps();
  res.json(data);
};

export const addApp = async (req, res) => {
  const created = await createApp(req.body);
  res.status(201).json(created);
};
