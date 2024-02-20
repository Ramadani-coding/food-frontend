const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-44">
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright &copy; {currentYear} - created by the{" "}
            <strong className="hover:text-orange-900 transition-all">
              <a href="https://github.com/Ramadani-coding">Ramacode</a>{" "}
            </strong>{" "}
            team with 💖
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
