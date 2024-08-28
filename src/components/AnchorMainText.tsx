const AnchorMainText = ({ text }: { text: string }) => {
  return (
    <p className="md:text-base font-medium text-primary-light dark:text-primary-dark text-xs">
      {text}
    </p>
  );
};

export default AnchorMainText;
