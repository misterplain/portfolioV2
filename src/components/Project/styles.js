const styles = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: "15px 15px",
    boxShadow: "2px 2px 32px rgba(40, 38, 44, 0.15)",
    borderRadius: "10px",
    height: "100%",
    position: 'relative'
  }),
  imageWrapper: (theme) => ({
    display: "flex",
    maxWidth: "100%",
  }),
  image: (theme) => ({
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  }),
  title: (theme) => ({
    fontWeight: 600,
    textTransform: "uppercase",
  }),
  pillsWrapper: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
  }),
  pill: (theme) => ({
    border: `1px solid ${theme.palette.purple.main}`,
    padding: "2px 6px",
    margin: "5px",
    borderRadius: "10px",
    fontSize: "13px",
  }),
  description: (theme) => ({
    marginTop: "10px",
    marginBottom: '40px'
  }),
  linksWrapper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "flex-end",
    marginTop: "10px",
  }),
};

export default styles;
