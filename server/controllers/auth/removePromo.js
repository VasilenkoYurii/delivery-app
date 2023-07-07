const { User } = require("../../models/user");

const removePromo = async (req, res) => {
  const { email } = req.user;

  const user = await User.findOne({ email });

  const promo = user.promo.filter((promo) => promo.id !== req.body.id);

  const updateUser = await User.findByIdAndUpdate(
    user._id,
    { promo },
    { new: true }
  );

  res.json(updateUser);
};

module.exports = removePromo;
