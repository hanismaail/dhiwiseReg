import React from "react";

import { Button, Img, Input, Text } from "components";

const PhoneLoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[200px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[363px] w-[51%] md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group_6.svg"
            alt="Group"
          />
          <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Login
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Phone Number
              </Text>
              <Input
                name="Group10198"
                placeholder="+1 3839 393 398"
                className="font-medium p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pl-3 pr-[35px] py-[17px] rounded-lg w-full"
              ></Input>
            </div>
            <Button className="bg-blue-A700_01 cursor-pointer font-medium min-w-[528px] sm:min-w-full py-[17px] rounded-md text-base text-center text-white-A700">
              Get OTP
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneLoginPage;
