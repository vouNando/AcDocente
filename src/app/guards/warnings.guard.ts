import { CanDeactivateFn } from '@angular/router';

export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  return true;
};
