export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  SimilarFilms = '/films/:id/similar',
  Comments = '/comments/:id',
  Login = '/login',
  logout = '/logout',
}
