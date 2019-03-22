export default (users = [], action) => {
  switch (action.type) {
    case "GET_USER":
      return [...users, action.payload];
    default:
      return users;
  }
};
