function sendNotification(email) {
  if (email.includes("@") === false) {
    return "invalid input";
  } else {
    const emailSplit = email.split("@");

    const username = emailSplit[0];
    const domainName = emailSplit[1];

    const message = `${username} sent you an email from ${domainName}`;

    return message;
  }
}
const user = sendNotification("sadia8icloud@gmail.com");
console.log(user);
