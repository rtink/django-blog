import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "techfont": {
        "fontFamily": "'Russo One', sans-serif",
        "fontSize": 1.5,
        "marginBottom": 10
    },
    "bigbrand": {
        "fontSize": 1.5
    },
    "centerstage": {
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "postdate": {
        "textAlign": "center"
    },
    "posttitle": {
        "fontFamily": "'Russo One', sans-serif",
        "fontSize": 3,
        "textAlign": "center"
    },
    "postcontent": {
        "fontFamily": "'Montserrat', sans-serif",
        "fontSize": 1.5
    },
    "btn-comment": {
        "position": "absolute",
        "right": 0
    },
    "loader": {
        "filter": "hue-rotate(0deg)",
        "color": "linear-gradient(45deg,#0f8,#08f)",
        "animation": "hue 10000ms infinite linear"
    }
});