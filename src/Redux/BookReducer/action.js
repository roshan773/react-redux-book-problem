const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
const EDIT_BOOK = "EDIT_BOOK"

const initialstate = {
  isLoading: false,
  isError: false,
  books: [],
}
// const bookReducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case FETCH_DATA_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//         };
//         case FETCH_DATA_SUCCESS:
//           return {
//             ...state,
//             isLoading: false,
//             isError: false,
//             books: action.payload,
//             };
//             case FETCH_DATA_FAILURE:
// }


export const getBooks = (state = initialstate, action) => {
  // Write logic here
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        isError: false,
        books: action.payload,
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
  }
};

export const editBook = () => {
  // Write logic here
  return {
    type: EDIT_BOOK,
    payload: action.payload,
  }
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
