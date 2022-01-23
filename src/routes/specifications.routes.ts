import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.post('/', (req, res) => {
    const createSpecificationService = new CreateSpecificationService(specificationRepository);

    const { name, description } = req.body;

    createSpecificationService.execute( {name, description} );

    res.status(201).end("created");
});

specificationRoutes.get('/', (req, res) => {
    const specifications = specificationRepository.list();
    res.status(201).json(specifications);
})

export { specificationRoutes };