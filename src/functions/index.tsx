export const compareObjects = (object1: Object, object2: Object) => {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
