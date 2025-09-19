const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}> Developed by Bhanu Prakash Pattem for CCL IITGN.</p>
            <div style={styles.links}>
                <a href="https://github.com/bhanupattemz" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    GitHub
                </a>
                <span style={styles.separator}> | </span>
                <a href="https://www.linkedin.com/in/bhanu-prakash-pattem-b70b48258/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    LinkedIn
                </a>
                <span style={styles.separator}> | </span>
                <a href="mailto:bhanupattemz@gmail.com" style={styles.link}>Email</a>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "1.5rem",
        borderTop: "1px solid #eaeaea",
        marginTop: "auto"
    },
    text: {
        margin: "0 0 0.75rem 0",
        color: "#333333",
        fontSize: "0.95rem"
    },
    links: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem"
    },
    link: {
        color: "#555555",
        textDecoration: "none",
        fontSize: "0.9rem",
        transition: "color 0.2s ease"
    },
    separator: {
        color: "#cccccc"
    }
};

export default Footer;