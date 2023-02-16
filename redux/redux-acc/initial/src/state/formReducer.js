export const initialState = {
  name: '',
  email: '',
  password: '',
  agree: false,
  gender: '',
  education: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'agree':
      return { ...state, agree: !state.agree };
    case 'gender':
      return { ...state, gender: action.payload };
    case 'education':
      return { ...state, education: action.payload };
    default:
      return state;
  }
};
