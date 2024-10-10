// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper = ({ children }: any) => {
  return (
    <div
      className="bg-white font-proximaRegular"
      style={{
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
