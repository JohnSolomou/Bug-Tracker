import bugModel from "../../models/bugModel";

export function retrieveBugs() {
  let data = [];
  data.push(
    new bugModel({
      _id: 1098237,
      name: "Crash on load",
      details: "crashed after 3 seconds",
      steps: "open application and it will crash",
      version: "v2.0",
      assigned: "john s",
      creator: "jack sparro",
      priority: 1,
      time: "7:30",
    })
  );
  data.push(
    new bugModel({
      _id: 1098237,
      name: "won't load",
      details: "crashed after 3 seconds",
      steps: "open application and i will crash",
      version: "v2.0",
      assigned: "john s",
      creator: "kevin james",
      priority: 3,
      time: "7:32",
    })
  );
  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
