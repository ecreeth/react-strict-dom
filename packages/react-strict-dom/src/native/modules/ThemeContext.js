/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import * as React from 'react';
import { __customProperties } from '../stylex';

type ProviderValue = $ReadOnly<{ [string]: string | number }>;
type TThemeContext = React$Context<ProviderValue>;

const defaultContext = __customProperties;

export const ThemeContext: TThemeContext = React.createContext(defaultContext);
