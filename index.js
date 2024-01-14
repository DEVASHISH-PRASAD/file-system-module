const fs = require("fs");
//2nd Question
//adding content in file using fs module
fs.writeFile(
  "nodejsArchitecture.txt",
  "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
  function (err) {
    if (err) {
      console.log("Error occured while writing into the file");
    } else {
      console.log("File updated succesfully");
    }
  }
);

// 3rd) to read data from file
fs.readFile("nodejsArchitecture.txt", function (err, data) {
  if (err) {
    console.log("Error in reading data");
  } else {
    console.log("Data:", data.toString());
  }
});

//4th) appending the file nodejsArchitecture and printing the data on console

fs.appendFile(
  "nodejsArchitecture.txt",
  "\nJavaScript Runtime: Node.js allows developers to use JavaScript for both server-side and client-side scripting. This unification of the development language simplifies the overall development process.Event-Driven and Asynchronous: Node.js is designed to be event-driven and asynchronous, making it well-suited for handling concurrent connections and building scalable network applications. This is achieved using an event loop that enables non-blocking I/O operations.",
  function (err) {
    if (err) {
      console.log("Error in appending file");
    } else {
      console.log("File appended succesfully");
    }
  }
);
fs.readFile("nodejsArchitecture.txt", function (err, data) {
  if (err) {
    console.log("Error in reading data");
  } else {
    console.log("Data:", data.toString());
  }
});
