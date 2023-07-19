type Custom = { custom: string };

const Line = ({ custom }: Custom) => {
  return <div className={`${custom}`}></div>;
};
export default Line;
