const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function auth(state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
