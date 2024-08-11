export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Film = '/films/:id',
  SimilarFilms = '/films/:id/similar',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
  FavoriteFilms = '/favorite',
  ToogleFavoriteFilm = '/favorite/:id/:status',
}
