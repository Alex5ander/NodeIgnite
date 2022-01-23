import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
	const all = categoriesRepository.list();
	res.status(201).json(all);
});

export { categoriesRoutes };