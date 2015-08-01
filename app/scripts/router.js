var router = null;

var onError = function(err) {
  console.error(err.stack);
};

type Callback = (Handler: ReactClass, state: Object) => void;

var delegateToRouter = function(method) {
  return function() {
    return router ? router[method].apply(router, arguments) : null;
  };
};

export var transitionTo = delegateToRouter('transitionTo');
export var makeHref = delegateToRouter('makeHref');
export var getCurrentParams = delegateToRouter('getCurrentParams');
export var getCurrentQuery = delegateToRouter('getCurrentQuery');
export var getCurrentRoutes = delegateToRouter('getCurrentRoutes');
export var isActive = delegateToRouter('isActive');

// Trick: requires after all of the exports
import routes from './routes';
import Router from 'react-router';
import {canUseDOM} from 'react/lib/ExecutionEnvironment';

var getDefaultLocation = function() {
  return canUseDOM ? Router.HistoryLocation : '/';
};

export function run(callback: Callback, location?: any) {
  location = location ? location : getDefaultLocation();
  router = Router.create({
    routes,
    onError,
    location
  });

  router.run(callback);
}


module.hot && module.hot.accept('./routes', function() {
  var newRoutes = require('./routes');
  router && router.replaceRoutes(newRoutes);
});
