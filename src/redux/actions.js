export const UPDATE_SETTING = 'UPDATE_SETTING';

export const updateSetting = (name, value) => ({
  type: UPDATE_SETTING,
  payload: { name, value },
});