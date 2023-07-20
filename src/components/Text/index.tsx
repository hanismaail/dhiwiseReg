import React from "react";

const sizeClasses = {
  txtGilroySemiBold20Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium100: "font-gilroy font-medium",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtGilroySemiBold24Black90001: "font-gilroy font-semibold",
  txtLatoRegular212: "font-lato font-normal",
  txtOpenSansMedium18: "font-medium font-opensans",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtGilroyMedium18Gray700: "font-gilroy font-medium",
  txtGilroyMedium18Black90002: "font-gilroy font-medium",
  txtLatoBold446: "font-bold font-lato",
  txtLatoExtraBold689: "font-extrabold font-lato",
  txtGilroyMedium18Black90001: "font-gilroy font-medium",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtLatoSemiBold239: "font-lato font-semibold",
  txtGilroyMedium24Bluegray400: "font-gilroy font-medium",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtGilroySemiBold16Black900: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray700: "font-gilroy font-medium",
  txtGilroyMedium14Bluegray400: "font-gilroy font-medium",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtOpenSansMedium20: "font-medium font-opensans",
  txtLatoBold223: "font-bold font-lato",
  txtGilroyMedium18BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold24Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium14BlueA200: "font-gilroy font-medium",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtGilroySemiBold24BlueA70001: "font-gilroy font-semibold",
  txtLatoSemiBold198: "font-lato font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtOpenSansMedium18Bluegray400: "font-medium font-opensans",
  txtLatoBold347: "font-bold font-lato",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtLatoMedium239: "font-lato font-medium",
  txtGilroyMedium20BlueA70001: "font-gilroy font-medium",
  txtLatoSemiBold212: "font-lato font-semibold",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyRegular15: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold15: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyBold40: "font-bold font-gilroy",
  txtLatoMedium31WhiteA700: "font-lato font-medium",
  txtGilroyMedium18Bluegray800: "font-gilroy font-medium",
  txtGilroySemiBold16Blue800: "font-gilroy font-semibold",
  txtGilroyMedium14Bluegray300: "font-gilroy font-medium",
  txtLatoSemiBold186: "font-lato font-semibold",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold16BlueA70001: "font-opensans font-semibold",
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtLatoRegular413: "font-lato font-normal",
  txtGilroyRegular16Black900: "font-gilroy font-normal",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyRegular18Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray700: "font-gilroy font-medium",
  txtLatoMedium173: "font-lato font-medium",
  txtLatoSemiBold173: "font-lato font-semibold",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtLatoMedium212: "font-lato font-medium",
  txtLatoMedium239Gray600: "font-lato font-medium",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyRegular15Gray900: "font-gilroy font-normal",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold18Bluegray400: "font-gilroy font-semibold",
  txtLatoSemiBold212WhiteA700: "font-lato font-semibold",
  txtLatoBold477: "font-bold font-lato",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium16Black90001: "font-gilroy font-medium",
  txtGilroyRegular15Gray500: "font-gilroy font-normal",
  txtGilroySemiBold16Green600: "font-gilroy font-semibold",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtLatoMedium186: "font-lato font-medium",
  txtGilroyMedium16BlueA70001: "font-gilroy font-medium",
  txtGilroyMedium14Bluegray600: "font-gilroy font-medium",
  txtLatoMedium31: "font-lato font-medium",
  txtLatoBold265: "font-bold font-lato",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroySemiBold16Red700: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray200: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray200: "font-gilroy font-medium",
  txtOpenSansMedium24Bluegray900: "font-medium font-opensans",
  txtGilroySemiBold16BlueA70001: "font-gilroy font-semibold",
  txtGilroyMedium20Black90002: "font-gilroy font-medium",
  txtLatoMedium239Black90003: "font-lato font-medium",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyRegular16Bluegray200: "font-gilroy font-normal",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtLatoMedium186Black9004c: "font-lato font-medium",
  txtGilroySemiBold18Gray90003: "font-gilroy font-semibold",
  txtLatoExtraBold239: "font-extrabold font-lato",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
