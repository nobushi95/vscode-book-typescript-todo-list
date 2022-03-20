import express from "express";
import bodyParser from "body-parser";
import { Repository } from "../model/task/repository";
import { ITask } from "../model/task/task";

export interface IConfig {
  // リッスンするホストとポート
  ListenHost: string;
  // フロントエンドのディレクトリ
  WebRoot: string;
}

export class API {
  private app: express.Express;
  private repository: Repository;

  constructor(private conf: IConfig) {
    this.repository = new Repository();
    this.app = express();
    this.routing();
  }

  // サーバーの起動
  public Run = () => {
    this.app.listen(this.conf.ListenHost);
  };

  // Expressのルーティングの設定
  private routing() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // GET タスクリストを返す
    this.app.get("/api/tasks", this.list);
    // POST タスクを登録
    this.app.post("/api/tasks", this.create);
    // タスクの完了
    // this.app.post("/api/tasks/:id/done", this.done);

    // フロントエンドのHTMLを提供する
    this.app.use("/", express.static(this.conf.WebRoot));
  }

  // タスクの一覧を返す
  private list = (req: express.Request, res: express.Response) => {
    const tasks = this.repository.ListTasks();
    res.json(tasks);
  };

  // タスクの追加
  // リクエストからタスクを受け取り、タスクを追加、追加したタスクのIDを返す
  private create = (req: express.Request, res: express.Response) => {
    const task: ITask = req.body;
    const id = this.repository.AddTask(task);
    res.json({ id });
  };

  // タスクの完了
  // private done = (req: express.Request, res: express.Response) => {
  //   const id = parseInt(req.params.id, 10);
  //   this.repository.DoneTask(id);
  //   res.json({});
  // };
}
