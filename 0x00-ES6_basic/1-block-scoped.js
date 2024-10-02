export default function taskBlock(trueOrFalse) {
  let task = false; // use 'const' because the value should not change
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
