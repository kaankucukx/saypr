export const ApplicationStateActionTypes = {
  NORMALIZE_APP_STATE: '[AppState] Update Application',
};

export const NormalizeAppStateActionCreator = () => ({
  type: ApplicationStateActionTypes.NORMALIZE_APP_STATE,
});
