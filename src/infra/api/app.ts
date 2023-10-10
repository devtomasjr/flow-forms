import express =  require("express")
import cors = require('cors');
import Database from "../database/database";


const app = express()

app.use(express.json())

app.use(cors());

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
	res.header("Expires", "-1");
	res.header("Pragma", "no-cache");
	next();
});



import QuestionController = require('../../controllers/question.controller');
import ValidateQuestion = require("../../middlewares/validate-question.middleware");
app.get('/api/questions/:id', ValidateQuestion.get, QuestionController.get);
app.get('/api/questions/list', ValidateQuestion.list, QuestionController.list);
app.post('/api/questions', ValidateQuestion.add, QuestionController.add);
app.put('/api/questions', ValidateQuestion.edit, QuestionController.edit);

// tasks page
app.get("/", (req: express.Request, res: express.Response) => {
	res.sendFile("index.html", { root: "./src/infra/views/question" });
})
// public files
app.use("/public", express.static("./src/infra/public"));


app.listen(3000, () => {
  console.log('Server listening on port 3011')
})