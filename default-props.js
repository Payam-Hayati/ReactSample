function Header({ title }) {
  return <div>Header{title}</div>;
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;
