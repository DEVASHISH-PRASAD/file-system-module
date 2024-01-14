/*
5) To wind up the fs module walkthrough challenges, let’s delete the nodejs_architecture.txt file On deletion
print "File Deleted SuccessFully" to the console.
*/

const fs = require("fs");
fs.unlink("nodejsArchitecture.txt", function (err) {
  if (err) {
    console.log("Error in deleting a given file");
  } else {
    console.log("File deleted succesfully");
  }
});
