enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: String;
  role: ROLES;
};

const nicoUser:User={
    username:"nicotypes",
    role:ROLES.ADMIN
}