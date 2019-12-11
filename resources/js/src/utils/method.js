export const asyncActionType = (type) => ({
  ROOT: `${type}`,
  LOADING: `${type}_LOADING`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
});