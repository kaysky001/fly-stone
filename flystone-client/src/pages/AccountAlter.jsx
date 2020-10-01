import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from 'react-router-dom'


class AccountAlter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            account:this.props.location.state.account,
            password:this.props.location.state.account.password,
            rolas:this.props.location.state.account.rolas,
            lock:this.props.location.state.account.enabled_flg
        };
        this.handleInputChange = this.handleInputChange.bind(this);
     }
     handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        })
     }
    
    
    render(){
        return(
        <div>
            <div class="row alert-info ">
            <div class="col-9 text-left"><h5>アカウント情報修正</h5></div>
            <div class="col-3 text-right">
                <div id="user">ユーザ名：田中</div>
            </div>
            </div>
            <div style={{"padding-top": "20px"}}></div>
                <button type="primary" class="btn btn-primary btn-success">
                        <Link to="/acount/acountList" style={{color:"white"}}>戻る</Link>
                </button>
                <div style={{padding: "8px"}}></div>
                
                <div class="progress" style={{height: "1.5px"}}>
                    <div class="progress-bar" role="progressbar" style={{width: "100%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div style={{padding: "8px"}}></div>
                <form>
                    <table class="table table-bordered table-sm">
                        {this.list()}
                    </table>
                    <div style={{"text-align": "center" }}>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="fix">　確認　</button>
                    </div>
                </form>
            </div>
        )
    }

    list(){
        return(
            <tbody>
                <tr>
                    <td style={{width:"15%"}} class="bg-info text-light">ユーザーID</td>
                    <td style={{width:"85%"}}>{this.state.account.staff_number}</td>
                </tr>
                <tr>
                    <td style={{width:"15%"}} class="bg-info text-light">パスワード</td>
                    <td style={{width:"85%"}}><input type = "text" 
                                                     style={{border:"none",outline: "none"}} 
                                                     name="password"
                                                     value={this.state.password}
                                                     onChange={this.handleInputChange}></input></td>
                </tr>
                <tr>
                    <td style={{width:"15%" }} class="bg-info text-light">ロール</td>
                    <td style={{width:"85%"}}>
                        <input type="radio" 
                               name="rola" 
                               defaultChecked={this.state.account.rolas==='管理者'}
                               onChange={this.handleInputChange}
                               checked={this.state.rolas}/>管理者
                        <input type="radio" 
                               name="rola" style={{"margin-left": "20px"}} 
                               defaultChecked={this.state.account.rolas==='社員'}
                               onChange={this.handleInputChange}
                               checked={this.state.rolas}/>社員
                    </td>
                </tr>
                <tr>
                    <td style={{width:"15%"}} class="bg-info text-light">ロック状態</td>
                    <td style={{width:"85%"}}>
                        <input type="radio" 
                               name="lock" 
                               defaultChecked={this.state.account.enabled_flg===0}
                               onChange={this.handleInputChange}
                               checked={this.state.enabled_flg}
                               value="0"/>正常
                        <input type="radio" 
                               name="lock" style={{"margin-left": "20px"}} 
                               defaultChecked={this.state.account.enabled_flg===1}
                               onChange={this.handleInputChange}
                               checked={this.state.enabled_flg}
                               value="1"/>ロック
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default AccountAlter