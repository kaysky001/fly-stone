const actDao = require("../dao/actDao")

module.exports={
    //アカウント情報一覧取得リクエスト処理
    async findAll(req,res){
        try{
            //Daoからdata取得
            const allStaff= await actDao.findAll();
            //data　null判断
            if(JSON.stringify(allStaff) ==="[]"){
                res.json({
                    statusCode: 300,
                    message: 'データがありません。'
                });
            //data取得判断
            }else if(allStaff){
                res.json({
                    statusCode: 200,
                    message: 'アカウント情報取得が成功しました。',
                    data: JSON.stringify(allStaff)
                });
            }else{
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: 'アカウント情報取得が失敗しました'
                });
            }
        }catch(error){
        res.status(500).send('サーバーエラー')
    }
        
},
    //アカウント情報取得リクエスト処理
    async findOne(req,res){
        if(!req.query.staff_number){
            res.status(400).send({
                errorCode: 400,
                errorMessage: '職員番号入力してください。'
            });
        }
            try{
                const staff= await actDao.findOne(req.query.staff_number);
                
                if(JSON.stringify(staff) ==="[]"){
                    res.json({
                        statusCode: 300,
                        message: 'データがありません。'
                    });
                }else if(staff){
                    res.json({
                        statusCode: 200,
                        message: 'アカウント情報取得が成功しました。',
                        data: JSON.stringify(staff)
                    });
                }else{
                    res.status(400).send({
                        errorCode: 400,
                        errorMessage: 'アカウント情報取得が失敗しました'
                    });
                }
            //エラーcatch
            }catch(error){
                res.status(500).send('サーバーエラー')
        }
    },
    //IDでアカウント情報取得リクエスト処理
    async searchById(req,res){
        //職員番号notnull判断
        if(!req.query.staff_number){
            res.status(400).send({
                errorCode: 400,
                errorMessage: '職員番号入力してください。'
            });
        }
            try{
                const staff= await actDao.searchById(req.query.staff_number);
                //data　null判断
                if(JSON.stringify(staff) ==="[]"){
                    res.json({
                        statusCode: 300,
                        message: 'データがありません。'
                    });
                //データ取得判断
                }else if(staff){
                    res.json({
                        statusCode: 200,
                        message: 'アカウント情報取得が成功しました。',
                        data: JSON.stringify(staff)
                    });
                }else{
                    res.status(400).send({
                        errorCode: 400,
                        errorMessage: 'アカウント情報取得が失敗しました'
                    });
                }
            //エラーcatch
            }catch(error){
                res.status(500).send('サーバーエラー')
        }
    },
    //IDでアカウント情報削除リクエスト処理
    async delete(req,res){
        //職員番号notnull判断
        if(!req.query.staff_number){
            res.status(400).send({
                errorCode: 400,
                errorMessage: '職員番号選択していません。'
            });
        }
            try{
                const staff= await actDao.delete(req.query.staff_number);
                //data　null判断
                if(staff.affectedRows===0){
                    res.json({
                        statusCode: 400,
                        message: '削除データがありません。'
                    });
                //データ取得判断
                }else if(staff.affectedRows>0){
                    res.json({
                        statusCode: 200,
                        message: 'アカウント情報が削除しました。',
                    });
                }else{
                    res.status(400).send({
                        errorCode: 400,
                        errorMessage: 'アカウント情報削除が失敗しました'
                    });
                }
            //エラーcatch
            }catch(error){
                res.status(500).send('サーバーエラー')
        }
    },
    //アカウント情報削除リクエスト処理
    async deleteAll(req,res){
            try{
                const staff= await actDao.deleteAll();
                //data　null判断
                if(staff.affectedRows===0){
                    res.json({
                        statusCode: 400,
                        message: '削除データがありません。'
                    });
                //データ取得判断
                }else if(staff.affectedRows>0){
                    res.json({
                        statusCode: 200,
                        message: 'アカウント情報が削除しました。',
                    });
                }else{
                    res.status(400).send({
                        errorCode: 400,
                        errorMessage: 'アカウント情報削除が失敗しました'
                    });
                }
            //エラーcatch
            }catch(error){
                res.status(500).send('サーバーエラー')
        }
    },
    //アカウント情報更新リクエスト処理
    async update(body,res){
        //職員番号notnull判断
        if(!body.staff_number){
            res.status(400).send({
                errorCode: 400,
                errorMessage: '職員番号選択していません。'
            });
            //更新データnotnull判断
        }else if(!body.password||!body.rolas||!body.enabledFlg){
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: '職員更新情報を入力してください。'
                });
            }
            try{
                const staffData=[body.password,body.rolas,body.enabledFlg,body.staff_number]
                const staff= await actDao.update(staffData);
                //更新成功判断
                if(staff.affectedRows>0){
                    res.json({
                        statusCode: 200,
                        message: 'アカウント情報が更新しました。',
                    });
                }else{
                    res.status(400).send({
                        errorCode: 400,
                        errorMessage: 'アカウント情報更新が失敗しました'
                    });
                }
            //エラーcatch
            }catch(error){
                res.status(500).send('サーバーエラー')
        }
    },
    //アカウント情報追加リクエスト処理
    async create(req,res){
        const staffData=[
            req.body.staff_number,
            req.body.password,
            req.body.rolas,
            req.body.pwNeedChangeFlg,
            req.body.failAttemps,
            req.body.enabledFlg,
            req.body.deletedFlg,
            req.body.sessionId
        ]
        const staff= await actDao.create(staffData);
        return res.send(staff);
    }
}