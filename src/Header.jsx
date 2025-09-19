const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Puzzle Place</h1>
      <div style={styles.subtitle}>Where pieces come together</div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#ffffff",
    padding: "2rem 1.5rem",
    textAlign: "center",
    borderBottom: "1px solid #f0f0f0",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)"
  },
  title: {
    margin: "0 0 0.5rem 0",
    color: "#2c3e50",
    fontSize: "2.8rem",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase"
  },
  subtitle: {
    color: "#7f8c8d",
    fontSize: "1.1rem",
    fontWeight: "300",
    fontStyle: "italic"
  }
};

export default Header;