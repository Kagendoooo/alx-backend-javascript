export default function taskBlock(trueOrFalse) {
  const task = false; // use 'const' because the value should not change
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // let to limit the scope of the block
    let task2 = false;
  }

  return [task, task2];
}
