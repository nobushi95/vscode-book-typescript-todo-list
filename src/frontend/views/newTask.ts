import { Component, Vue } from "vue-property-decorator";
import { ITask } from "../../model/task/task";
import { postTask } from "../api/tasks";

@Component
export class NewTaskView extends Vue {
  private text: string = "";
  // api/tasksのpostTasksを呼び出して取得したタスクを追加する
  public async clickAddButton(): Promise<void> {
    const task: ITask = { id: 0, text: this.text };
    await postTask(task);
    this.text = "";
    this.$emit("updateTaskList");
  }
}
