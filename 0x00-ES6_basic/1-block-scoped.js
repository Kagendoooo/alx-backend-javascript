export default function taskBlock(trueOrFalse) {
  const task = false; // use 'const' because the value should not change
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
