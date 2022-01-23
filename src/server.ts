import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categories", categoriesRoutes);

app.get("/", (req, res) => {
	console.log("Server is running");
	res.end("<h1>Home</h1>");
});

app.listen(3000);