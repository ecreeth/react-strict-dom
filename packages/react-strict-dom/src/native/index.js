/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import typeof * as TStyleX from '@stylexjs/stylex';

import * as html from './html';
import * as cssRaw from './stylex';

// Export using StyleX types as the shim has divergent types internally.
const css: TStyleX = cssRaw as $FlowFixMe;

export { css, html };
