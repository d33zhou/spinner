const multiplier = 100;
for (let i = 1; i < 18; i += 8) {
  setTimeout(() => process.stdout.write('\r|   '), i * multiplier);
  setTimeout(() => process.stdout.write('\r/   '), (i + 2) * multiplier);
  setTimeout(() => process.stdout.write('\r-   '), (i + 4) * multiplier);
  setTimeout(() => process.stdout.write('\r\\   '), (i + 6) * multiplier);
  setTimeout(() => process.stdout.write('\r|   '), (i + 8) * multiplier);
}