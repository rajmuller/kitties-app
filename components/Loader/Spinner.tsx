type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={`h-8 w-8 animate-loader rounded-full border-4 border-teal-600 border-r-transparent ${className}`}
    />
  );
};

export default Spinner;
