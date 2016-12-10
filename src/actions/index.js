export function selectBook(book){
  // select book is an action creator, it needs to return an acion
  // an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}