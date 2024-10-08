// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper = ({ children }: any) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
