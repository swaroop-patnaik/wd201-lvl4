const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test suite", () => {
  beforeAll(() => {
    add({
      title: "todo3",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Adding new todo", () => {
    const todoLength = all.length;
    add({
      title: "todo3",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  test("Mark todo as complete.", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test(" todo3 Overdue.", () => {
    add({
      title: "overdue Todo",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  test("Due_today todo3", () => {
    expect(dueToday().length).toBe(2);
  });

  test("todo3 Due later", () => {
    add({
      title: "Test due later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});