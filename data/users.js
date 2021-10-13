function mockUserDataGenerator(userQuantity) {
  const tempUsersData = [];
  for (let index = 0; index < userQuantity; index++) {
    tempUsersData.push({
      userId: index,
      userName: `Fabio${index}`,
      userAvatar: require("../assets/userAvatars/p2.jpg"),
    });
  }
  return tempUsersData;
}

export const mockUsersData = mockUserDataGenerator(50);
