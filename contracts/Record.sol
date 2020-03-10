pragma solidity >=0.4.21 <0.7.0;
contract Record
{
   
      //structure for the user or patient model
    struct user{
        string accountname; //user name
        string password;    //user password
        address useraddress; //user ethereum address
        bool set;
    }
    uint256 public userCount=0; //number of user or patient registered
     
    mapping(address => user)  public userlist;
   
    //return the user name by mapping the address
    function find_user_name(address  _address) public view returns(string memory){      
      return userlist[_address].accountname;
    }
   
     //return the user name by mapping the address
    function find_user_password(address  _address) public view returns(string memory){      
      return userlist[_address].password;
    }
   
   
   
    //add user's name, ethereum address and password
    function addUser(string memory _accountname,string memory _password, address  _useraddress,bool _userset) public{
        user storage User = userlist[_useraddress];
        require(!User.set);
        incrementcount();   //keep count of no. of registered user
        userlist[_useraddress]=user(_accountname,_password,_useraddress,_userset);
    }
   
 
   
    //increments every time to keep track of registered user
     function incrementcount() internal{
        userCount+=1;
    }
   
   
   
        //structure for the doctor
    struct doctor{
        string doctorname; //doctor name
        string password;    //doctor password
        address doctoraddress; //doctor ethereum address
     
        bool set; //to check whether doctor exist
    }
    uint256 public recordCount = 0;

    //structure ro store record
    struct record{
    address patientaddress;
     string  recordHash;
    }
   
    event HospitalAddition(address hospital);
   
    mapping (address => bool) public isHospital;
    mapping(address => doctor)  public doctorlist;
    mapping(uint256 => record) public recordList;

     function addHospital(address _hospital)   public

    {
        isHospital[_hospital] = true;
        emit HospitalAddition(_hospital);
    }
   
   
    function addDoctor(string memory _doctorname,string memory _password, address  _doctoraddress,bool _doctorset) public{
         doctor storage Doctor = doctorlist[_doctoraddress];
    // Check that the doctor did not already exist:
         require(!Doctor.set);
        doctorlist[_doctoraddress]=doctor(_doctorname,_password,_doctoraddress,_doctorset);
    }
   
    function addRecord(address _patientaddress,string memory _recordhash) public{
     
        recordList[recordCount]=record(_patientaddress,_recordhash);
        recordCount+=1;
    }
    function getRecord(uint256 _recordnum) public view returns(
     string memory  _recordhash,
    address _patientaddress){
         _recordhash=recordList[_recordnum].recordHash;
         _patientaddress=recordList[_recordnum].patientaddress;
    }
    function getDoctorName(address _docaddress)  public view returns(string memory){
        return doctorlist[_docaddress].doctorname;
    }
    function getDoctorPassword(address _docaddress)  public view returns(string memory){
        return doctorlist[_docaddress].password;
    }
    
   
   
}
