import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReorderPurchasePage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_8.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="font-medium p-0 placeholder:text-blue_gray-200 sm:pr-5 text-base text-blue_gray-200 text-left w-full"
                wrapClassName="bg-white-A700 border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] pr-[35px] py-[17px] rounded-md w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900_01"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900_01"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900_01"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1120px] mx-auto md:px-5 w-full">
          <div className="sm:h-[1011px] h-[1016px] md:h-[1602px] relative w-full">
            <div className="absolute bg-white-A700 h-[1011px] inset-[0] justify-center m-auto rounded-md shadow-bs w-full"></div>
            <div className="absolute flex flex-col gap-[29px] h-max inset-[0] items-center justify-center m-auto w-[95%]">
              <div className="flex flex-col gap-[25px] items-center justify-start pt-2.5 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtGilroySemiBold32"
                  >
                    Reorder Purchase
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-medium py-[3px] text-base text-blue_gray-900 text-left w-[11%] sm:w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_arrowdown_bluegray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="Frame9870"
                    options={frame9870OptionsList}
                    isSearchable={false}
                    placeholder="Filter & Sort"
                  />
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <List
                className="flex flex-col font-opensans gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1.png"
                    alt="pngwingOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtOpenSansMedium24Bluegray900"
                      >
                        Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                      </Text>
                      <Button className="bg-blue-A700_01 cursor-pointer font-gilroy font-semibold min-w-[86px] py-[15px] rounded-[5px] text-center text-lg text-white-A700">
                        Reorder
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtOpenSansMedium20"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[11%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtOpenSansMedium18"
                      >
                        Color:
                      </Text>
                      <Text
                        className="ml-1 text-blue_gray-400 text-lg"
                        size="txtOpenSansMedium18Bluegray400"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[19%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtOpenSansMedium24Bluegray900"
                      >
                        <span className="text-colors font-opensans text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors4 font-opensans text-left font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text
                        className="line-through mt-[11px] text-base text-blue_gray-400"
                        size="txtOpenSansMedium16"
                      >
                        <span className="text-colors2 font-opensans text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans text-left font-semibold">
                          55.99
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1.png"
                    alt="pngwingOne One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtOpenSansMedium24Bluegray900"
                      >
                        Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                      </Text>
                      <Button className="bg-blue-A700_01 cursor-pointer font-gilroy font-semibold min-w-[86px] py-[15px] rounded-[5px] text-center text-lg text-white-A700">
                        Reorder
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtOpenSansMedium20"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[11%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtOpenSansMedium18"
                      >
                        Color:
                      </Text>
                      <Text
                        className="ml-1 text-blue_gray-400 text-lg"
                        size="txtOpenSansMedium18Bluegray400"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[19%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtOpenSansMedium24Bluegray900"
                      >
                        <span className="text-colors font-opensans text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors4 font-opensans text-left font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text
                        className="line-through mt-[11px] text-base text-blue_gray-400"
                        size="txtOpenSansMedium16"
                      >
                        <span className="text-colors2 font-opensans text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans text-left font-semibold">
                          55.99
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1.png"
                    alt="pngwingOne Two"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtOpenSansMedium24Bluegray900"
                      >
                        Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                      </Text>
                      <Button className="bg-blue-A700_01 cursor-pointer font-gilroy font-semibold min-w-[86px] py-[15px] rounded-[5px] text-center text-lg text-white-A700">
                        Reorder
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtOpenSansMedium20"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[11%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtOpenSansMedium18"
                      >
                        Color:
                      </Text>
                      <Text
                        className="ml-1 text-blue_gray-400 text-lg"
                        size="txtOpenSansMedium18Bluegray400"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[19%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtOpenSansMedium24Bluegray900"
                      >
                        <span className="text-colors font-opensans text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors4 font-opensans text-left font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text
                        className="line-through mt-[11px] text-base text-blue_gray-400"
                        size="txtOpenSansMedium16"
                      >
                        <span className="text-colors2 font-opensans text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans text-left font-semibold">
                          55.99
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                      <Img
                        className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                        src="images/img_pngwing1.png"
                        alt="pngwingOne Three"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                            size="txtOpenSansMedium24Bluegray900"
                          >
                            Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                          </Text>
                          <Button className="bg-blue-A700_01 cursor-pointer font-gilroy font-semibold min-w-[86px] py-[15px] rounded-[5px] text-center text-lg text-white-A700">
                            Reorder
                          </Button>
                        </div>
                        <Text
                          className="text-blue_gray-400 text-xl"
                          size="txtOpenSansMedium20"
                        >
                          (Blue,6GB RAM, 128GB Storage)
                        </Text>
                        <div className="flex flex-row items-center justify-start mt-3 w-[6%] md:w-full">
                          <Text
                            className="text-blue_gray-400 text-center text-lg"
                            size="txtOpenSansMedium18Bluegray400"
                          >
                            Blue
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-center text-lg"
                            size="txtOpenSansMedium18"
                          >
                            Color:
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[15px] items-end justify-start mt-3 w-[19%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                            size="txtOpenSansMedium24Bluegray900"
                          >
                            <span className="text-colors font-opensans font-semibold">
                              $
                            </span>
                            <span className="text-colors4 font-opensans font-semibold">
                              555.29
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-2 text-base text-blue_gray-400 text-center"
                            size="txtOpenSansMedium16"
                          >
                            <span className="text-colors2 font-opensans font-semibold">
                              $
                            </span>
                            <span className="text-colors2 font-opensans font-semibold">
                              55.99
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReorderPurchasePage;
