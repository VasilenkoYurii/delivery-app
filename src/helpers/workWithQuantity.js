export const addQuantityToObjectArray = arr => {
  const objMap = {};
  const result = [];

  arr.forEach(obj => {
    const id = obj._id;
    if (!objMap[id]) {
      objMap[id] = { ...obj };
      if (!objMap[id].quantity) {
        objMap[id].quantity = 1;
      }
      result.push(objMap[id]);
    } else {
      objMap[id].quantity++;
    }
  });

  return result;
};

export const decrementQuantity = (arr, id) => {
  const result = arr.map(obj => {
    if (obj._id === id) {
      obj.quantity++;
    }
    return obj;
  });

  return result;
};

export const incrementQuantity = (arr, id) => {
  const result = arr
    .map(obj => {
      if (obj._id === id) {
        obj.quantity--;
        if (obj.quantity === 0) {
          return null;
        }
      }
      return obj;
    })
    .filter(obj => obj !== null);

  console.log(result);

  return result;
};
