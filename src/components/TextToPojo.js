export const parsePojoText = text => {
  // Trim the text
  const trimmedText = text.trim();
  // Check if passed code is object by verifying enclosing brackets
  if (!isObject(trimmedText)) {
    throw new Error("Code is not an object!");
  }
  // Split the object by comma
  const properties = trimmedText
    .substring(1, trimmedText.length - 1)
    .replace(/\{/g, "(")
    .replace(/\}/g, ")")
    .split(/,[\s]*(?![^[]*\])(?![^(]*\))/g)
    .map(val => {
      return val.trim();
    });
  // console.log(properties);

  let outputObj = {};

  properties.forEach(val => {
    console.log(val);
    const propertyPair = val.split(": ");
    let propertyValue = propertyPair[1]
      .trim()
      .replace(/\(/g, "{")
      .replace(/\)/g, "}");
    let finalValue = null;

    console.log(propertyPair);
    if (propertyPair.length !== 2) {
      throw new Error("Object syntax is invalid!");
    }

    // Check if null
    if (propertyValue !== "null") {
      if (isObject(propertyValue)) {
        finalValue = parsePojoText(propertyValue);
      } else if (isArray(propertyValue)) {
        finalValue = parseArrayText(propertyValue);
      } else if (!isNaN(Number.parseFloat(propertyValue))) {
        finalValue = Number.parseFloat(propertyValue);
      } else if (isString(propertyValue)) {
        finalValue = propertyValue.substring(1, propertyValue - 1);
      } else if (propertyValue === "true" || propertyValue === "false") {
      } else {
        throw new Error(
          `Unsupported type in property [${propertyPair[0]}]'s value.`
        );
      }
    }

    outputObj[propertyPair[0]] = finalValue;
  });

  return outputObj;
};

export const parseArrayText = text => {
  // Trim the text
  const trimmedText = text.trim();
  // Check if passed code is object by verifying enclosing brackets
  if (!isArray(trimmedText)) {
    throw new Error("Code is not an array!");
  }
  // Split the object by comma
  const properties = trimmedText
    .substring(1, trimmedText.length - 1)
    .split(",")
    .map(val => {
      return val.trim();
    });

  console.log(properties);
  let outputArray = [];

  properties.forEach(val => {
    let finalValue = null;
    console.log(val);

    // Check if null
    if (val !== "null") {
      if (isObject(val)) {
        finalValue = parsePojoText(val);
      } else if (isArray(val)) {
        finalValue = parseArrayText(val);
      } else if (!isNaN(Number.parseFloat(val))) {
        finalValue = Number.parseFloat(val);
      } else if (isString(val)) {
        finalValue = val.substring(1, val - 1);
      } else {
        throw new Error(`Unsupported type inside array value.`);
      }
    }

    outputArray.push(finalValue);
  });

  return outputArray;
};

const isString = text => {
  return (
    (text.charAt(0) === `"` && text.charAt(text.length - 1) === `"`) ||
    (text.charAt(0) === "'" && text.charAt(text.length - 1) === "'") ||
    (text.charAt(0) === "`" && text.charAt(text.length - 1) === "`")
  );
};

export const isObject = text => {
  return text.charAt(0) === `{` && text.charAt(text.length - 1) === `}`;
};

export const isArray = text => {
  return text.charAt(0) === `[` && text.charAt(text.length - 1) === `]`;
};
