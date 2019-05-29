export const parseObject = (obj, level = 0) => {
  let pojoTextArray = [];

  Object.keys(obj).forEach(key => {
    let finalValue = "";

    if (Array.isArray(obj[key]) && obj[key] !== null) {
      finalValue = parseArray(obj[key], level + 1);
    } else if (typeof obj[key] == "object" && obj[key] !== null) {
      finalValue = parseObject(obj[key], level + 1);
    } else if (typeof obj[key] == "string" && obj[key] !== null) {
      finalValue = `"${obj[key]}"`;
    } else if (typeof obj[key] == "number" && obj[key] !== null) {
      finalValue = obj[key] ? obj[key] : 0;
    } else if (obj[key] === null) {
      finalValue = "null";
    } else if (typeof obj[key] == "boolean") {
      finalValue = obj[key];
    }

    pojoTextArray.push(`${"\t".repeat(level + 1)}${key}: ${finalValue}`);
  });

  return `{\n${pojoTextArray.join(", \n")}\n${"\t".repeat(level)}}`;
};

export const parseArray = (arr, level) => {
  let pojoTextArray = [];

  arr.forEach(val => {
    let finalValue = "";

    if (Array.isArray(val) && val !== null) {
      finalValue = parseArray(val);
    } else if (typeof val == "object" && val !== null) {
      finalValue = parseObject(val, level + 1);
    } else if (typeof val == "string" && val !== null) {
      finalValue = `"${val}"`;
    } else if (typeof val == "number" && val !== null) {
      finalValue = val;
    } else if (val === null) {
      finalValue = "null";
    }

    pojoTextArray.push(`${"\t".repeat(level + 1)}${finalValue}`);
  });

  return `[\n${pojoTextArray.join(", \n")}\n${"\t".repeat(level)}]`;
};
