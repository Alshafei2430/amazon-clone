export const initialState = {
  basket: [
    {
      id: "123hgh4",
      title: "Car",
      price: 1000000,
      rating: 5,
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Urus_pearl%20capsule-black_caliper-sceneplate_env.png",
    },
    {
      id: "123hgh4",
      title: "Car",
      price: 1000000,
      rating: 5,
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Urus_pearl%20capsule-black_caliper-sceneplate_env.png",
    },
    {
      id: "123hgh4",
      title: "Car",
      price: 1000000,
      rating: 5,
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Urus_pearl%20capsule-black_caliper-sceneplate_env.png",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDING ITEMS TO THE BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for remove items from the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id: ${action.id} as its not found)`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
