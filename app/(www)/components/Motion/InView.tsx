import { useInView } from "react-intersection-observer";

interface InViewProps {
  children: (args: {
    ref: (node?: Element | null) => void;
    inView: boolean;
  }) => JSX.Element;
  options?: Parameters<typeof useInView>[0];
}

const InView = ({ children, options }: InViewProps) => {
  const { ref, inView } = useInView(options);

  return children({ ref, inView });
};

export default InView;
