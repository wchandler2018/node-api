const express = require("express");
const {
  userById,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
  userPhoto,
  addFollowing,
  addFollower,
  removeFollower,
  removeFollowing,
  findPeople
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");
const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, updateUser);
router.delete("/user/:userId", requireSignin, deleteUser);

router.get("/user/photo/:userId", userPhoto);

//who to follow
router.get("/user/findpeople/:userId", requireSignin, findPeople);

//any route containing :userId the app should first execute userById
router.param("userId", userById);

module.exports = router;
