import App from '../models/App.js';

export const listApps = () => App.findAll();
export const createApp = (payload) => App.create(payload);
