export async function delay(ms = 450) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function delayWithJitter(min = 250, max = 900) {
  const duration = Math.floor(Math.random() * (max - min + 1)) + min;
  await delay(duration);
}
