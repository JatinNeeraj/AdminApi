let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/Columns/Insert");

router.get('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.Insert({
        inJsonConfig: req.KeshavSoft.JsonConfig,
        inItemConfig: LocalItemConfig,
        inColumnName: req.KeshavSoft.UtilityConfig.ToName,
        inDataPk: LocalDataPk
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;