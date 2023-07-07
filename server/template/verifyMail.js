const verifyMail = (BASE_URL, verificationToken) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Подтверждение почты</title>
  </head>
  <body>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      align="center"
      style="max-width: 600px; margin: 0 auto; padding: 20px"
    >
      <tr>
        <td align="center" bgcolor="#f5f5f5" style="padding: 20px">
          <h2>Mail verification</h2>
          <p>Please verify your email by clicking on the button below:</p>
          <p>
            <a
              href="${BASE_URL}api/users/verify/${verificationToken}"
              style="
                display: inline-block;
                padding: 10px 20px;
                background-color: #ff0000;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
              "
              >Verify email</a
            >
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

module.exports = verifyMail;
