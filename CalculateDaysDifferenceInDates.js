// Development question -> Came while developing storageApp subscription renewal days left.

// Convert to ms
const futureDate = new Date("2025-12-01T18:30:00.000+00:00");
const today = new Date();
// Difference in milliseconds
const diffMs = futureDate - today;
// Convert ms → days
const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

console.log(diffDays);