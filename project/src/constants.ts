enum Data {
  OFFERS_AMOUNT = 7,
}

enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export {
  Data,
  AppRoutes
};
