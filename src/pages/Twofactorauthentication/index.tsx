import React from "react";

import { Button, Img, Text } from "components";

const TwofactorauthenticationPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[297px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[50px] md:px-5 rounded-[12px] shadow-bs w-[65%] md:w-full">
          <Img
            className="h-[60px] w-[9%]"
            src="images/img_mobile.svg"
            alt="mobile"
          />
          <Text
            className="mt-[15px] text-2xl md:text-[22px] text-blue-A700_01 sm:text-xl"
            size="txtGilroySemiBold24BlueA70001"
          >
            OTP Verification
          </Text>
          <Text
            className="mt-[37px] text-gray-700 text-lg"
            size="txtGilroyMedium18Gray700"
          >
            <span className="text-colors2 font-gilroy text-left font-medium">
              OTP Is Send to
            </span>
            <span className="text-colors6 font-gilroy text-left font-medium">
              {" "}
            </span>
            <span className="text-colors font-gilroy text-left font-bold">
              +91 01234567890
            </span>
          </Text>
          <div className="flex flex-row font-opensans gap-4 items-center justify-center mt-[29px] rounded-[3px] w-[73%] md:w-full">
            <Button className="bg-white-A700 border border-blue-A700_01 border-solid cursor-pointer font-semibold min-w-[40px] py-[15px] rounded-[3px] text-blue-200 text-center text-lg">
              |
            </Button>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid h-[52px] rounded-[3px] w-[13%]"></div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid h-[52px] rounded-[3px] w-[13%]"></div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid h-[52px] rounded-[3px] w-[13%]"></div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid h-[52px] rounded-[3px] w-[13%]"></div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid h-[52px] rounded-[3px] w-[13%]"></div>
          </div>
          <Button className="bg-blue-A700_01 cursor-pointer font-medium min-w-[396px] sm:min-w-full mt-[50px] py-3.5 rounded-md text-base text-center text-white-A700">
            Verify OTP
          </Button>
          <Text
            className="mb-[5px] mt-7 text-base text-blue-A700_01"
            size="txtGilroyMedium16BlueA70001"
          >
            <span className="text-colors2 font-gilroy text-left font-medium">
              Didn’t Recieved Code ?
            </span>
            <span className="text-colors font-gilroy text-left font-medium">
              {" "}
            </span>
            <span className="text-colors font-gilroy text-left font-bold">
              Resend{" "}
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default TwofactorauthenticationPage;
