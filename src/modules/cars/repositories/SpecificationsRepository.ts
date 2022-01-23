import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specificationAlreadyExists = this.findByName(name);
       
        if(specificationAlreadyExists) {
            throw new Error("Especificação já existe");
        }
       
        const specification = new Specification();
        Object.assign(specification, {name, description, created_at: new Date()});

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        return this.specifications.find(e => e.name === name);
    }

    list() : Specification[] {
        return this.specifications;
    }
}

export { SpecificationsRepository }