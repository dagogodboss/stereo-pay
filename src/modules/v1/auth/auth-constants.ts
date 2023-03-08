const authConstants = {
  jwt: {
    secret: '!@#$9yhbdsjcar1297button2e^%#',
    expirationTime: {
      accessToken: '1d',
      refreshToken: '7d',
    },
  },
  redis: {
    expirationTime: {
      jwt: {
        accessToken: 86400, // 1d
        refreshToken: 604800, // 7d
      },
    },
  },
};

export default authConstants;
