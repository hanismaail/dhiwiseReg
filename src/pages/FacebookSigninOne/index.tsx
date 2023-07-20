import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const FacebookSigninOnePage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[186px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group_35X162.svg"
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
                name="Group10198"
                placeholder="Enter Email"
                className="font-medium p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pl-3 pr-[35px] py-[17px] rounded-lg w-full"
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
                name="Group10198 One"
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
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <a href="javascript:" className="text-base text-blue_gray-200">
                <Text size="txtGilroyRegular16Bluegray200">
                  Or continue with
                </Text>
              </a>
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-full">
              <Button
                className="common-pointer border border-blue-A700_01 border-solid cursor-pointer font-medium min-w-[528px] sm:min-w-full py-3.5 rounded-md text-base text-blue-A700_01 text-center"
                onClick={() => googleSignIn()}
              >
                Sign in with Google
              </Button>
              <Button className="border border-blue-A700_01 border-solid cursor-pointer font-medium min-w-[528px] sm:min-w-full py-[15px] rounded-md text-base text-blue-A700_01 text-center">
                Sign in with Facebook
              </Button>
              <Button className="border border-blue-A700_01 border-solid cursor-pointer font-medium min-w-[528px] sm:min-w-full py-[15px] rounded-md text-base text-blue-A700_01 text-center">
                Sign in with Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookSigninOnePage;
