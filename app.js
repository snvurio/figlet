var figlet = require("figlet"); //figlet불러오기

figlet("guehyun real ugly", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
