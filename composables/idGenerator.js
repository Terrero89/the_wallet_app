//randome js unique id creator
const generateRandomId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

// Example: Generate a random ID with a length of 12
const uniqueId = generateRandomId(22);
console.log(uniqueId);
export const useUniqueId = () => {
  return useState("uniqueId", () => generateRandomId(22));
};
