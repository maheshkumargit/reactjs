var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div>
    <div className="navbar navbar-warning">
    <div className="navbar-header">
    <a className="navbar-brand" href="javascript:void(0)">Sales Management</a>
    </div>
    </div>
    <div className="well container">
    <form className="form">

    <div className="form-group">
    <input type="text" className="form-control floating-label" id="inputUserid" placeholder="User id" />
    <p className="input-tip">Enter your User Id</p>
    </div>

    <div className="form-group">
    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
    <p className="input-tip">Enter your Password</p>
    </div>

    <div className="form-group">
    <input type="number" className="form-control" id="otp" placeholder="otp" />
    <p className="input-tip">Enter your otp</p>
    </div>

    <div className="form-group">
    <div className="col-lg-10 col-lg-offset-2">
    <button type="submit" className="btn btn-primary">Login</button>
    <a href="javascript:void(0)" className="btn btn-link">sign in to another account</a>
    </div>
    </div>
    </form>
    </div>
    </div>
  }

});

/*
 var LoginPage = React.createClass( {

 render: function() {

 return (
 <div>
 <Module
 </div>
 );
 }

 });
 */