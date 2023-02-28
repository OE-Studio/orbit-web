import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Container from "./Container";
import TransactionType from "./TransactionComponents/TransactionType";

const IndividualTransaction = ({ title, description, price, type }) => {
  return (
    <div className="w-full flex font-inter border-t border-neutral100 py-4">
      <div className="inline-flex gap-2 items-center w-[30%]">
        <TransactionType type={type} />
        <p className="text-[15px] font-medium text-grey400">{title}</p>
      </div>

      <div className="flex gap-2 items-center w-[50%]">
        <p className="text-[15px] font-medium text-neutral300">{description}</p>
      </div>
      <div className="flex gap-4 items-center w-[20%] justify-end">
        <p className="text-[15px]  text-neutral300 font-semibold">{price}</p>
        <ChevronRightIcon className="h-4" />
      </div>
    </div>
  );
};

const TransactionBody = () => {
  return (
    <Container>
      <div className="h-6" />
      <p className="text-sm font-medium text-neutral300">9 NOV 2022</p>
      <div className="h-4" />
      <IndividualTransaction
        type="airtime"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
      <IndividualTransaction
        type="data"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
      <IndividualTransaction
        type="electricity"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
      <IndividualTransaction
        type="cable"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />

      <div className="h-6" />
      <p className="text-sm font-medium text-neutral300">8 NOV 2022</p>
      <div className="h-4" />
      <IndividualTransaction
        type="airtime"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
      <IndividualTransaction
        type="data"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
      <IndividualTransaction
        type="electricity"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
      <IndividualTransaction
        type="cable"
        title="Airtime Purchase"
        description="MTN 1.0GB N239.0 DATA topup topup with 08039343682"
        price="₦7,150.00"
      />
    </Container>
  );
};

export default TransactionBody;
