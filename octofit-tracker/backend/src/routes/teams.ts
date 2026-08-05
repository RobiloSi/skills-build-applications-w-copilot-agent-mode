import { Router } from 'express';
import Team from '../models/team.js';

export const teamsRouter = Router();

teamsRouter.get('/', async (_req, res) => {
  const teams = await Team.find().lean();
  res.json(teams);
});
