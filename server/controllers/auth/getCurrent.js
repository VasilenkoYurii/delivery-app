const getCurrent = async (req, res) => {
  const {
    _id,
    password,
    email,
    name,
    phone,
    address,
    promo,
    verify,
    verificationToken,
    token,
  } = req.user;

  res.json({
    _id,
    password,
    email,
    name,
    phone,
    address,
    promo,
    verify,
    verificationToken,
    token,
  });
};

module.exports = getCurrent;
