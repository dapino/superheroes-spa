const resolveRoutes = (route) => {
  switch (route) {
    case 'characters':
      return '/characters/:page';
    case 'character':
      return '/character/:id';
    default:
      return '/';
  }
};

export default resolveRoutes;
