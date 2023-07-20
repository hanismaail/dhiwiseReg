import React from "react";

import { Button, Img, Input, Text } from "components";

const GuestLoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mb-[332px] w-[45%] md:w-full">
          <Img
            className="h-[35px] w-[32%]"
            src="images/img_group_6.svg"
            alt="Group"
          />
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Login as a Guest
            </Text>
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Email
                  </Text>
                </div>
                <Input
                  name="email"
                  placeholder="jane@gmail.com"
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pb-[13px] pl-[11px] pr-[35px] pt-[18px] rounded-lg w-full"
                  type="email"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Password
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-end justify-start mt-1 w-full">
                  <Input
                    name="password"
                    placeholder="*********"
                    className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-blue_gray-300 text-left w-full"
                    wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex md:h-auto pb-[22px] pl-3 pt-[13px] rounded-lg w-[512px] sm:w-full"
                    type="password"
                    suffix={
                      <Img
                        className="h-5 ml-[35px] mr-3 my-4"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    }
                  ></Input>
                  <a href="javascript:" className="text-blue-A700_01 text-lg">
                    <Text size="txtGilroyMedium18BlueA70001">
                      Forgot Password?
                    </Text>
                  </a>
                </div>
              </div>
              <Button className="bg-blue-A700_01 cursor-pointer font-medium py-[15px] rounded-md text-base text-center text-white-A700 w-[512px]">
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestLoginPage;
