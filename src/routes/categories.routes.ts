import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
	const { name, description } = req.body;
	
	const createCategoryService = new CreateCategoryService(categoriesRepository);
	createCategoryService.execute({ name, description })
	
	res.status(201).end();
});

categoriesRoutes.get("/", (req, res) => {
	const all = categoriesRepository.list();
	res.status(201).json(all);
});

export { categoriesRoutes };