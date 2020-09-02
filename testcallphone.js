/* testcallphone.js*/
//https://my.exotel.com/apisettings/site#api-credentials
//https://github.com/exotel/ExotelAPI/tree/master/nodejs

let key="72d43863a65f433e30814ae7197fc3b0cff2f834c0915811";
let sid="oudsoft1";
let token="af5535454ad9192d039bcbf12f465125fb936a1bfb0f9ec2";
let from="66894713527";
let to="66835077746";
let body="Good Evening";

const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

const axios = require('axios')
url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Sms/send.json"
axios.post(url, 
   formUrlEncoded({
  "From": from,
  "To": to,
  "Body":body
}),
{   
    withCredentials: true,
    headers: {
        "Accept":"application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded"
    }
  },
  )
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  //console.log(res)
})
.catch((error) => {
  //console.error(error)
})