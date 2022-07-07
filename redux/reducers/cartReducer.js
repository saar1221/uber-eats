let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkBoxValue) {
        console.log(" ADD TO CART NEW STATE");
        console.log(" ADD TO CART NEW STATE");
        console.log(action.payload);
        console.log(" ADD TO CART NEW STATE");
        console.log(" ADD TO CART NEW STATE");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("    DELETE FROM CAT ");

        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.item.title !== action.payload.item.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log("NEW STATE!!!@@@@!@!@!@!@ check all the data", newState);
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
