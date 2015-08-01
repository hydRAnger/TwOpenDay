/* @flow */

import React from 'react';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';
import ReactDocumentTitle from 'react-document-title';

import {run} from './router';

export var start = function(bootstrap: any) {
  if (canUseDOM) {
    run(function(Handler) {
      React.render(<Handler />, document.body);
    });
  } else {
    run(function(Handler) {
      bootstrap.callback(React.renderToString(<Handler />), {
        title: ReactDocumentTitle.rewind()
      });
    }, bootstrap.path);
  }
};
