function mockUserDataGenerator(userQuantity) {
  const tempUsersData = [];
  for (let index = 0; index < userQuantity; index++) {
    tempUsersData.push({
      userId: index,
      userName: `Marciano Bonifacci`,
      userAvatar: require("../assets/userAvatars/p1.jpg"),
    });
  }
  return tempUsersData;
}

export const mockUsersData = mockUserDataGenerator(50);
