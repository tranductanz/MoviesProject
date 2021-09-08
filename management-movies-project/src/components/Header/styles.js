import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => {
    return {
        title: {
            flexGrow: 1,
            textDecoration: "none",
            color: "#ffffff",
            fontSize: 20,
        },
        navLink: {
            textDecoration: "none",
        },
        button: {
            color: "#ffffff",
            marginLeft: 25,
            fontSize: 15,
            opacity: 0.75,
            "&:hover": {
                opacity: 1,
                borderRadius: 10,
                color: "#ffdd01",
            }
        },
    }
})

export default useStyles;