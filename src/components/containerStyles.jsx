import { red } from "@material-ui/core/colors";

const textLight = "#E1D9D1";
const borderLight = "rgba(206,212,218, .993)";

const Styles = theme => ({
  main: {
    display: "block",
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    }
  },
  typography: {
    color: "#FEA3AA",
    fontWeight: "bolder",
    fontSize: "30px",
    fontFamily: "PT Mono, monospace"
  },
  avatar: {
    marginTop: 20,
    position: "relative",
    background: "#FCDFFF",
    width: "100px",
    height: "100px",
    boxShadow: "0px 0px 12px rgba(131,153,167,0.99)"
  },

  icon: {
    width: "80px",
    height: "80px",
    color: "rgba(131,153,167,0.79)"
  },

  form: {
    margin: theme.spacing(4)
  },
  labels: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "20px",
    lineHeight: "4px",
    fontFamily: "PT Mono, monospace",
    fontWeight: "bold",
    opacity: 0.45,
    color: `${textLight} !important`
  },

  inputs: {
    position: "relative",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "Cutive Mono, monospace",
    color: textLight,
    fontSize: "15px",
    fontWeight:"bold",
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: "8px",
    border: "1px solid",
    boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
    borderColor: borderLight,

    "&:hover": {
      background: "rgba(169,198,217,0.36457423) "
    }
  },

  button: {
    color: "#FDEEF4",
    background: "rgba(255,255,255,.45)",
    position: "relative",
    fontWeight: "bolder",
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(6),
    padding: `${theme.spacing(1.6)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",

    "&::before, &::after": {
      position: "absolute",
      content: '""',
      boxSizing: "border-box",
      borderRadius: "8px",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 1
    },
    "&::before": {
      borderBottom: "2px solid rgba(255,255,255,.58)",
      borderTop: "2px solid rgba(255,255,255,.58)",
      transform: "scale(0,1)"
    },
    "&::after": {
      borderLeft: "3px solid rgba(255,255,255,.58)",
      borderRight: "3px solid rgba(255,255,255,.58)",
      transform: "scale(1,0)"
    },
    "&:hover::before": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s"
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s"
    },
    "&:hover": {
      background: "rgba(169,198,217,0.8)",
      color: textLight
    }
  },
  error: {
    border: `1.2px solid ${red[900]}`,
    background: "rgba(169,198,217,0.29457423)",
    color: "#F5F5F5",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Raleway, sans-serif",
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
  },

  passwordEye: {
    color: "rgba(131,153,167,0.9)",
    opacity: 0.7
  }
});

export default Styles;