import React from "react";

import { Button, Img, Input, Text } from "components";

const EmailSigninPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[314px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group.svg"
            alt="Group"
          />
          <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Email
              </Text>
              <Input
                name="email"
                placeholder="jane@gmail.com"
                className="font-medium p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pb-[13px] pl-[11px] pr-[35px] pt-[18px] rounded-lg w-full"
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Password
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Password"
                className="font-medium p-0 placeholder:text-blue_gray-200 sm:pr-5 text-base text-blue_gray-200 text-left w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pl-3 pr-[35px] py-[17px] rounded-lg w-full"
                type="password"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[381px] mt-[15px] text-blue-A700_01 text-lg"
            >
              <Text size="txtGilroyMedium18BlueA70001">Forgot Password?</Text>
            </a>
            <Button className="bg-blue-A700_01 cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 py-[15px] rounded-md text-base text-center text-white-A700">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSigninPage;
