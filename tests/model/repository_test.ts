import { ITask } from "../../src/model/task/task";
import { describe, Suite, it } from "mocha";
import { Repository } from "../../src/model/task/repository";
import * as assert from "assert";

describe("Task repository", () => {
  it("初期化されたとき、2レコード含まれていること", () => {
    const repo = new Repository();
    const tasks = repo.ListTasks();
    assert.equal(tasks.length, 2);
  });

  it("1レコード追加できること", () => {
    const repo = new Repository();
    const newTask: ITask = {
      id: 0,
      text: "new task",
    };
    repo.AddTask(newTask);

    const tasks = repo.ListTasks();
    assert.equal(tasks.length, 3);
    assert.notEqual(
      tasks.find((task: ITask): boolean => {
        return task.text == "new task";
      }),
      undefined
    );
  });
});
