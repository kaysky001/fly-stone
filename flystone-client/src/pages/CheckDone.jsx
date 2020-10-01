import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from 'react-router-dom'

class CheckDone extends React.Component{
    render(){
        return(
            <div>
                <div class="row alert-info ">
                    <div class="col-9 text-left"><h5>アカウント情報修正完了</h5></div>
                </div>
                <div style={{"padding-top": "10px"}}></div>
                <div class="alert alert-success" role="alert"><strong>アカウント情報修正完了しました。</strong><br/>
                <Link to="/acount/acountList" >アカウント情報一覧画面へ</Link></div>
                </div>
        )
    }
}

export default CheckDone