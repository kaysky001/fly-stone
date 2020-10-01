import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from 'react-router-dom'


class AccountCheck extends React.Component{
    render(){
        return(
            <div>
                <div class="row alert-info ">
                <div class="col-9 text-left"><h5>アカウント情報内容確認</h5></div>
                <div class="col-3 text-right">
                    <div id="user">ユーザ名：田中</div>
                </div>
                </div>
                <div style={{"padding-top": "20px"}}></div>
                <button type="primary" class="btn btn-primary btn-success">
                        <Link to="/acount/acountAlter" style={{color:"white"}}>戻る</Link>
                </button>
                <div style={{"padding-top": "8px"}}></div>
                <div class="progress" style={{height: "1.5px"}}>
                    <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div style={{"padding-top": "8px"}}></div>

                <form>
                    <table class="table table-bordered table-sm">
                        <tbody>
                            <tr>
                                <td style={{width:"15%"}} class="bg-info text-light">職員番号</td>
                                <td style={{width:"85%"}}><input style={{border:"none",outline: "none"}} value="187012210101" readonly></input></td>
                            </tr>
                            <tr>
                                <td style={{width:"15%"}} class="bg-info text-light">パスワード</td>
                                <td style={{width:"85%"}}><input style={{border:"none",outline: "none"}} value="admin"　readonly></input></td>
                            </tr>
                            <tr>
                                <td style={{width:"15%"}} class="bg-info text-light">名前</td>
                                <td style={{width:"85%"}}>田中</td>
                            </tr>
                            <tr>
                                <td style={{width:"15%"}} class="bg-info text-light">ロール</td>
                                <td style={{width:"85%"}}>
                                    <input style={{border:"none",outline: "none"}} value="管理者" readonly></input>
                                </td>
                            </tr>
                            <tr>
                                <td style={{width:"15%"}} class="bg-info text-light">パスワード設定</td>
                                <td style={{width:"85%"}}>
                                    <input style={{border:"none",outline: "none"}} value="完了" readonly></input>
                                </td>
                            </tr>
                            <tr>
                                <td style={{width:"15%"}} class="bg-info text-light">ロック状態</td>
                                <td style={{width:"85%"}}>
                                    <input style={{border:"none",outline: "none"}} value="正常" readonly></input>
                                </td>
                            </tr>
                        </tbody>    
                    </table>
                    <div style={{"text-align": "center"}}>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="checkDone">　確認　</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AccountCheck