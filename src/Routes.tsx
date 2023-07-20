import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SlideshowCreator = React.lazy(() => import("pages/SlideshowCreator"));
const TwilioIntegration = React.lazy(() => import("pages/TwilioIntegration"));
const StripeIntegration = React.lazy(() => import("pages/StripeIntegration"));
const Twofactorauthentication = React.lazy(
  () => import("pages/Twofactorauthentication"),
);
const Tutorials = React.lazy(() => import("pages/Tutorials"));
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const Signin = React.lazy(() => import("pages/Signin"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const PaytmIntegration = React.lazy(() => import("pages/PaytmIntegration"));
const PhoneLogin = React.lazy(() => import("pages/PhoneLogin"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const FacebookSigninOne = React.lazy(() => import("pages/FacebookSigninOne"));
const Employeelogin = React.lazy(() => import("pages/Employeelogin"));
const TaxCalculator = React.lazy(() => import("pages/TaxCalculator"));
const EmailSignin = React.lazy(() => import("pages/EmailSignin"));
const SavedCards = React.lazy(() => import("pages/SavedCards"));
const ReorderPurchase = React.lazy(() => import("pages/ReorderPurchase"));
const CustomAdvertisement = React.lazy(
  () => import("pages/CustomAdvertisement"),
);
const RefundManagement = React.lazy(() => import("pages/RefundManagement"));
const GuestLogin = React.lazy(() => import("pages/GuestLogin"));
const PremiumPlanComparison = React.lazy(
  () => import("pages/PremiumPlanComparison"),
);
const Payments = React.lazy(() => import("pages/Payments"));
const Review = React.lazy(() => import("pages/Review"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const Multiplecurrencysupport = React.lazy(
  () => import("pages/Multiplecurrencysupport"),
);
const InvoiceBilling = React.lazy(() => import("pages/InvoiceBilling"));
const FeedbackCollection = React.lazy(() => import("pages/FeedbackCollection"));
const AccountCreation = React.lazy(() => import("pages/AccountCreation"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/accountcreation" element={<AccountCreation />} />
          <Route path="/feedbackcollection" element={<FeedbackCollection />} />
          <Route path="/invoicebilling" element={<InvoiceBilling />} />
          <Route
            path="/multiplecurrencysupport"
            element={<Multiplecurrencysupport />}
          />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/review" element={<Review />} />
          <Route path="/payments" element={<Payments />} />
          <Route
            path="/premiumplancomparison"
            element={<PremiumPlanComparison />}
          />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route path="/refundmanagement" element={<RefundManagement />} />
          <Route
            path="/customadvertisement"
            element={<CustomAdvertisement />}
          />
          <Route path="/reorderpurchase" element={<ReorderPurchase />} />
          <Route path="/savedcards" element={<SavedCards />} />
          <Route path="/emailsignin" element={<EmailSignin />} />
          <Route path="/taxcalculator" element={<TaxCalculator />} />
          <Route path="/employeelogin" element={<Employeelogin />} />
          <Route path="/facebooksigninone" element={<FacebookSigninOne />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/phonelogin" element={<PhoneLogin />} />
          <Route path="/paytmintegration" element={<PaytmIntegration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route
            path="/twofactorauthentication"
            element={<Twofactorauthentication />}
          />
          <Route path="/stripeintegration" element={<StripeIntegration />} />
          <Route path="/twiliointegration" element={<TwilioIntegration />} />
          <Route path="/slideshowcreator" element={<SlideshowCreator />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
