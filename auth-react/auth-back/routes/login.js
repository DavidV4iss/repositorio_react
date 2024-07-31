const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponse");

router.post("/", (req, res) => {
    const {username, password} = req.body;

    if(!!!username || !!!password){
        return res.status(400).json(
            jsonResponse(400, {
                error: "Los campos son requeridos"
            })
        );
    }

    //autenticar usuario
    const accessToken = "access_token";
    const refreshToken = "refresh_token";
    const user = {
        id: "1",
        name: "cristian",
        username: "xxxx"
    }
    res.status(200)
    .json (jsonResponse(200,{ user, accessToken, refreshToken}));

    res.send("signout");
});

module.exports = router;