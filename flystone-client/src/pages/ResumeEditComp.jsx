import React from "react";
import { Link } from "react-router-dom";

function ResumeEditComp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 text-center">
          <h2>職務履歴情報修正完了</h2>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <button
              type="button"
              className="btn btn-warning btn-sm rounded-pill"
              id="logout"
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="text-center">
            職務履歴情報の修正が完了しました。
            <Link to="/staff">個人情報詳細画面に戻る。</Link>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}
export default ResumeEditComp;
