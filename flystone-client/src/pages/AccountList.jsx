import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from 'react-router-dom'
import axios from 'axios'



class AccountList extends React.Component{
    constructor(props){
      super(props);
      this.state={
        //データ初期処理
        accounts:[],
        message:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
        render(){
        return(
        <div>
            <div class="row alert-info ">
              <div class="col-9 text-left"><h5>アカウント情報一覧</h5></div>
              <div class="col-3 text-right">
                  <div id="user">ユーザ名：田中</div>
              </div>
            </div>

            <div style={{padding: "10px"}}></div>

            <div class="text-left">
                    
                    <button type="primary" class="btn btn-primary btn-success">
                        <Link to="/acount/acountAlter" style={{color:"white"}}>戻る</Link>
                    </button>
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="職員番号入力" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" class="btn btn-primary btn-sm" style={{margin: "5px"}} value="検索"/>
                  </form>
            </div>
            <div style={{padding: "10px"}}></div>
            <div class="table-responsive">
              <table class="table text-nowrap table-bordered table-hover" id="mylist">
                
                <thead>
                  <tr class="table-secondary text-center">
                    <th>職員番号</th>
                    <th>パスワード</th>
                    <th>ロール</th>
                    <th>パスワード設定</th>
                    <th>ロック状態</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody id="mytbody">
                  {this.state.message===''?this.list():this.state.message}         
                </tbody>
            </table>
            </div>
            <div style={{padding: "15px"}}></div>
            <br />
        </div>
         
        )
    }
    //画面loadして、リクエスト提出する
    componentDidMount(){
      axios.get('http://localhost:8888/api/findAll')
      .then((response)=>{ 
          //成功の場合、データをstateに保存する
          if(response.data.statusCode===200){
            this.setState({
            accounts:response.data.data
          });
          //データなしの場合、メッセージ保存する
        }else if(response.data.statusCode===300){
          this.setState({
            message:response.data.message
          })
        }
      })
      .catch((error)=>{
          this.setState({
              error:error
          })
      })
  }
  //取得したデータをloopして処理する
  list(){
    //データがarrayに転換して、loopする
    return eval(this.state.accounts).map(account=>{
      return(
        <tr class="text-center" key={account.staff_number}>
                      <td>{account.staff_number}</td>
                      <td>{account.password}</td>
                      <td>{account.rolas}</td>
                      <td>{account.pw_need_change_flg===1?'未設定':'設定'}</td>
                      <td>{account.enabled_flg===1?'ロック':'正常'}</td>
                      <td>
                        <button style={{margin: "2px"}} class="btn btn-primary btn-sm">
                          <Link to={{pathname :'/acount/acountAlter',state:{account}}} style={{color:"white"}}>修正</Link>
                        </button>
                        <button style={{margin: "2px"}} class="btn btn-primary btn-sm"　 onClick={this.actDelete.bind(this,account.staff_number)}>削除</button>
                      </td>
                  </tr> 
          )
      }
    )
  }
  //削除事件
  actDelete(staff_number,e){
    //操作確認メッセージ
    const confirmed = window.confirm(`アカウント “${staff_number}”を削除しますか？`); 
    if(confirmed){
      //確認の場合、サーバーにリクエスト提出
        axios.get('http://localhost:8888/api/delete',{
        params: {
          staff_number: staff_number
        }
      })
      .then((response)=>{
        //成功の場合、再読み込み
        if(response.data.statusCode===200){
          this.componentDidMount()
          
        }//削除データがデータベースに存在しないの場合
        else if(response.data.statusCode===400){
          alert(response.data.message)
          this.componentDidMount()
        }    
      })
      .catch((error)=>{
          this.setState({
              error:error
          })
      })
    }
  }

  //入力内容をstateに設定する
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  //検索事件
  handleSubmit(event){
    event.preventDefault();
    //入力内容のtest
    var str = /^\d{12}$/.test(this.state.value);
    if(str){
    //検索リクエスト提出
    axios.get('http://localhost:8888/api/findOne',{
      params: {
        staff_number: this.state.value
      }
    })
    .then((response)=>{
      //成功の場合、stateに保存する
      if(response.data.statusCode===200){
        this.setState({
        accounts:response.data.data
        })
      }
      //データがなしの場合、メッセージをstateに保存する
      else if(response.data.statusCode===300){
        this.setState({
          message:response.data.message
        })
      }
    })
    .catch((error)=>{
      this.setState({
          error:error
      })
   })
    //入力内容の格式が問題あるの場合、メッセージをstateに保存する
    }else{
      this.setState({
        message:'職員番号は１２桁の数字です。'
      })
    }
    
  }
}

export default AccountList