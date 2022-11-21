export type DepositData = {
  active: DepositType[];
  closed: DepositType[];
};

export type DepositType = {
  property: {
    address: {
      street: string;
      city: string;
      state: string;
    };
    imageUrl: string;
  };
  moveInDate: string;
  rent: number;
  deposit: {
    amount: number;
    type: string;
  };
  status: {
    message: string;
    level: number;
  };
};
