import * as actionTypes from '../actionTypes';

export const newPassword = () => ({
  type: actionTypes.NEW_PASSWORD
});

export const cancelNewPassword = () => ({
  type: actionTypes.CANCEL_NEW_PASSWORD
});
