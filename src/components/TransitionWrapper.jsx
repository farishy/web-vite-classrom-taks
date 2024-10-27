// TransitionWrapper.js
import { Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";

const timeout = 100;

const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <Transition
      key={location.pathname}
      in={true}
      timeout={timeout}
      appear
      unmountOnExit>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            filter: `brightness(${state === "entered" ? 1 : 0})`,
          }}>
          {children}
        </div>
      )}
    </Transition>
  );
};

export default TransitionWrapper;
