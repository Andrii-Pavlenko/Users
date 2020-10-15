export const getUsers = (state) => state.loading.users;
export const getLoading = (state) => state.loading.loading;
export const getLoadingError = (state) => state.loading.loadingError;

export const getUserId = (state) => state.fromCurrentUser.userId;
export const getCurrentUser = (state) => state.fromCurrentUser.currentUser;
export const getName = (state) => state.fromCurrentUser.name;
export const getFollowers = (state) => state.fromCurrentUser.followers;
