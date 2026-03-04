function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  let timeLen = waitingTimes.length;
  for (let time of waitingTimes) {
    sum += time;
  }
  const timeNeededRound = Math.round(sum / timeLen);

  const leftApplicant = serialNumber - 1;

  const runningApplicant = leftApplicant - timeLen;

  const finalWaitingTime = timeNeededRound * runningApplicant;
  return finalWaitingTime;
}

const userTime = waitingTime([3, 5, 7, 11, 6], 10);
console.log(userTime);
