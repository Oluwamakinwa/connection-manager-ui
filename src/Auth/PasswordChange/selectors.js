/******************************************************************************
 *  Copyright 2019 ModusBox, Inc.                                             *
 *                                                                            *
 *  info@modusbox.com                                                         *
 *                                                                            *
 *  Licensed under the Apache License, Version 2.0 (the "License");           *
 *  you may not use this file except in compliance with the License.          *
 *  You may obtain a copy of the License at                                   *
 *  http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                            *
 *  Unless required by applicable law or agreed to in writing, software       *
 *  distributed under the License is distributed on an "AS IS" BASIS,         *
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 *  See the License for the specific language governing permissions and       *
 *  limitations under the License.                                            *
 ******************************************************************************/

import { createSelector } from 'reselect';
import { getIsValid, toValidationResult } from 'modusbox-ui-components/dist/redux-validation';
import { createPendingSelector } from 'modusbox-ui-components/dist/redux-fetch';
import { getPasswordChangeValidation } from './validators';

export const getPasswordChangeOldPassword = state => state.auth.password.oldPassword;
export const getPasswordChangeNewPassword = state => state.auth.password.newPassword;
export const getPasswordChangeConfirmPassword = state => state.auth.password.confirmPassword;
export const getPasswordChangeError = state => state.auth.password.error;

const getPasswordChangeModel = createSelector(
  getPasswordChangeOldPassword,
  getPasswordChangeNewPassword,
  getPasswordChangeConfirmPassword,
  (oldPassword, newPassword, confirmPassword) => ({
    oldPassword,
    newPassword,
    confirmPassword,
  })
);
export const getValidationResult = createSelector(
  getPasswordChangeModel,
  getPasswordChangeValidation,
  toValidationResult
);

export const getIsPasswordChangeSubmitEnabled = createSelector(
  getValidationResult,
  getIsValid
);

export const getIsPasswordChangePending = createPendingSelector('passwordChange.create');