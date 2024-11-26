import { RefObject, useEffect } from 'react';

type UseClickOutSideProps = {
  ref: RefObject<HTMLElement>;
  refSec?: RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
};

const useClickOutSide = (props: UseClickOutSideProps) => {
  const { ref, handler, refSec } = props;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const checkRefSec = refSec?.current ? !refSec?.current.contains(event.target as Node) : true;
      if (ref.current && !ref.current.contains(event.target as Node) && checkRefSec) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, refSec]);
};

export default useClickOutSide;
