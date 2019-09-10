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

import { createPendingSelector } from 'modusbox-ui-components/dist/redux-fetch';
export const getDfspCaError = state => state.dfsp.ca.dfsp.dfspCaError;
export const getDfspCaRootCertificate = state => state.dfsp.ca.dfsp.dfspCaRootCert;
export const getDfspCaIntermediateChain = state => state.dfsp.ca.dfsp.dfspCaIntermediateChain;
export const getDfspCaValidations = state => state.dfsp.ca.dfsp.dfspCaValidations;
export const getDfspCaValidationState = state => state.dfsp.ca.dfsp.dfspCaValidationState;
export const getIsDfspCaRootCertificateModalVisible = state => state.dfsp.ca.dfsp.isDfspCaRootCertificateModalVisible;
export const getIsDfspCaIntermediateChainModalVisible = state =>
  state.dfsp.ca.dfsp.isDfspCaIntermediateChainModalVisible;

export const getIsDfspCaPending = createPendingSelector('dfspCa.create');