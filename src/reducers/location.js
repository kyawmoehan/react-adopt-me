export default function loaction(state = "Seattle, WA", action) {
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
