import { ITask } from "../../model/task/task";

// WebAPIからタスクリストを取得して、リストを返却
export async function loadTasks(): Promise<ITask[]> {
  const url = "/api/tasks";
  // fetchメソッドでAPIにアクセス
  const res = await fetch(url, { method: "GET" });
  return await res.json();
}

// 引数で受け取ったタスクをJSONに変換してリクエストボディに設定して、WebAPIを呼び出す
export async function postTask(task: ITask): Promise<ITask[]> {
  const url = "/api/tasks";
  // fetchメソッドでAPIにアクセス
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}
