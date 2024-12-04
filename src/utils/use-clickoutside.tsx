import { RefObject, useEffect } from 'react';

type UseClickOutSideProps = {
  ref: RefObject<HTMLElement>;
  refSec?: RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
  condition?: boolean;
};

const useClickOutSide = (props: UseClickOutSideProps) => {
  const { ref, handler, refSec, condition = true } = props;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const checkRefSec = refSec?.current ? !refSec?.current.contains(event.target as Node) : true;
      if (ref.current && !ref.current.contains(event.target as Node) && checkRefSec) {
        handler(event);
      }
    };

    if (condition) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, refSec]);
};

export default useClickOutSide;
