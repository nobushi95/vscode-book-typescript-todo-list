import { Component, Vue } from "vue-property-decorator";
import { ITask } from "../../model/task/task";
import { loadTasks, postTask } from "../api/tasks";

@Component
export class TaskListView extends Vue {
  private tasks: ITask[] = [];
  // api/tasksのloadTasksを呼び出して取得したタスクリストを描画する
  public async loadTasks(): Promise<void> {
    const tasks = await loadTasks();
    this.tasks = tasks;
  }
}
