import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        <section>{children}</section>
      </main>
    </>
  );
};

export default Layouts;
