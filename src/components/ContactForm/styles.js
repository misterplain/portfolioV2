const styles = {
    wrapper: (theme) => ({
        display: "flex",
        flexDirection: "column",
        padding: "15px 15px",
    }),
    message: (theme) => ({
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    }),
    formWrapper: (theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
    }),
    formGroup: (theme) => ({
        width: "80%",
        // height: "30px",
        marginBottom: "30px",
    }),
    button: (theme, isDarkMode) => ({
        // fontFamily: "Montserrat, sans-serif",
        // fontWeight: 500,
        // fontSize: "16px",
        // lineHeight: "20px",
        // textTransform: "capitalize",
        // color: "white",
        // background: theme.palette.purple.main,
        // padding: "12px 20px",
        // gap: "10px",
        // borderRadius: "8px",
        // "&:hover": {
        //   background: "#646ab0",
        // },
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        textTransform: "capitalize",
        color: "white",
        background: isDarkMode
          ? theme.palette.cobalt.main
          : theme.palette.slateBlue.main,
        // background: "purple",
        padding: "12px 20px",
        gap: "10px",
        borderRadius: "8px",
        // "&:hover": {
        //   background: "#646ab0",
        // },
        "&:hover": {
          background: isDarkMode
            ? theme.palette.slateBlue.main
            : theme.palette.slateBlue.secondary,
        },
    })
}

export default styles;