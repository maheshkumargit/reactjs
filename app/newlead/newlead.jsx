var React = require('react');

module.exports = React.createClass({

  render: function() {
    return <div>
    <div className="navbar navbar-warning">


    <div className="navbar-header">

    <a className="navbar-brand" href="javascript:void(0)">Save</a>
    <a className="navbar-brand" href="javascript:void(0)">Sales Management</a>
    <a className="navbar-brand" href="javascript:void(0)" wrapped="true">S & E</a>
    </div>


    </div>

    <div className="well container">
    <form className="form">

    <div className="form-group">
      <input type="text" className="form-control" id="inputBizName" placeholder="Business Name" />
      <p className="input-tip">Enter Business/Shop Name</p>
    </div>

    <div className="form-group">
      <input type="text" className="form-control" id="inputCustomerName" placeholder="Customer Name" />
    <p className="input-tip">Enter Owner/Customer Name</p>
    </div>

    <div className="form-group">
    <select className="form-control" id="designation">
    <option>Select Designation</option>
    <option>Proprietor</option>
    <option>MD\/VP\/Manager</option>
    <option>Admin</option>
    </select>
    </div>

    <div className="form-group">
      <input type="text" className="form-control" id="inputCustomerContact" placeholder="Customer Contact Number" />
      <p className="input-tip">Enter Customer Contact Number</p>
    </div>
    <div className="form-group">
    <input type="mail" className="form-control" id="inputCustomerContact" placeholder="Customer Email id" />
    <p className="input-tip">Enter Customer Mail Id</p>
    </div>
    <div className="form-group">
      <select className="form-control" id="contactType">
      <option>Select Contact Type</option>
      <option>Mobile</option>
      <option>Buss Phone</option>
      <option>E-mail</option>
      </select>
    </div>

    <div className="form-group">
    <select className="form-control" id="contactrole">
    <option>Select Role of Contact</option>
    <option>Business Support</option>
    <option>AMC</option>
    <option>Sales</option>
    </select>
    </div>

    <div className="form-group">
      <input type="number" className="form-control" id="inputpincode" placeholder="Pincode" />
      <p className="input-tip">Enter Pincode</p>
    </div>

    <div className="form-group">
      <input type="text" className="form-control" id="inputcity" placeholder="City" />
      <p className="input-tip">Enter City</p>
    </div>

    <div className="form-group">
      <input type="text" className="form-control" id="inputarea" placeholder="Area Name" />
    <p className="input-tip">Enter Area Details</p>
    </div>

    <div className="form-group">
      <input type="text" className="form-control" id="inputstreet" placeholder="Street Name" />
    <p className="input-tip">Enter Street Details</p>
    </div>

    <div className="form-group">
    <select className="form-control" id="leadsource">
    <option select="true">Select Lead Source</option>
    <option>Existing customer reference</option>
    <option>Just Dial</option>
    </select>
    </div>

    <div className="form-group">
    <select className="form-control" id="leadtype">
    <option select="true">Select Lead Type</option>
    <option>End User</option>
    <option>Partner</option>
    <option>Corporate Customer</option>
    <option>Channel Partner (Order)</option>
    </select>
    </div>


    <div className="form-group">
    <input type="text" className="form-control" id="inputvertical" placeholder="vertical" />
    <p className="input-tip">Enter vertical</p>
    </div>

    <div className="form-group">
    <select className="form-control" id="leadstatus">
    <option select="true">Select Lead Status</option>
    <option>Prospect</option>
    <option>Duplicate Customer</option>
    </select>
    </div>

    <div className="form-group">
    <select className="form-control" id="leadprospectstatus">
    <option select="true">Select Prospect Status</option>
    <option>Evaluation Installed</option>
    <option>Customer Lost</option>
    </select>
    </div>

    <div className="form-group">
    <select className="form-control" id="nextaction">
    <option>Select Next Action</option>
    <option>Demo</option>
    <option>Pricing Discussion</option>
    <option>Partner Discussion</option>
    </select>
    </div>


    <div className="form-group">
    <input type="date" className="form-control" id="nextactionDt" placeholder="Next Action Date" />
    <p className="input-tip">Select Next Action Date</p>
    </div>

    <div className="form-group">
    <input type="text" className="form-control" id="nextactiondescription" placeholder="Next Action Description" />
    <p className="input-tip">Next Action Description/Remarks</p>
    </div>


    <div className="form-group">
    <select className="form-control" id="Followupaction">
    <option>Select Followup Action</option>
    <option>New</option>
    <option>Demo</option>
    <option>Pre Sales Follow Up</option>
    </select>
    </div>

    <div className="form-group">
    <input type="date" className="form-control" id="inputFollowUpDt" placeholder="Follow up date" />
    <p className="input-tip">Select Followup Date</p>
    </div>

    <div className="form-group">
    <select className="form-control" id="assignedTo">
    <option>Select Assigned To</option>
    <option>Kumar</option>
    <option>Product Support</option>
    <option>Partner 1</option>
    </select>
    </div>

    <div className="form-group">
    <input type="checkbox" className="form-control" id="leadincharge" className="Stylesheet.float: left;"> Assign as Lead Incharge</input>
    </div>

    <div className="form-group">
    <input type="text" className="form-control" id="inputescalation" placeholder="Reason for Escalation" />
    <p className="input-tip">Reason for Escalation</p>
    </div>

 </form>
      </div>
      </div>
  }

});
