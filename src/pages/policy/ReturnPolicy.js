import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

const ReturnPolicy = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Medical Equipment Home"
        description="Medical Equipment home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        <div>
          <div className="card">
            <div className="card-body">
              We have added a summary to each section for a quick and easy read.
              You agree to follow the conditions listed below. The summaries are
              not a part of the actual policy; we have added them to make things
              easier for you to understand.
            </div>
            <div className="card-body">
              These Terms of Use ("Terms of Use") have been drafted in
              accordance with the provisions of Rule 3 (1) of the Information
              Technology (Intermediaries guidelines) Rules, 2011 that require
              publishing the rules and regulations, privacy policy and Terms of
              Use for access or usage of www.sewaktravels.com.
            </div>
            <div className="card-header">
              <h5>About Us</h5>
            </div>
            <div className="card-body">
              The domain name www.sewaktravels.com (hereinafter referred to as
              "Website") owned and managed by SewakTravels Private Limited, a
              private limited company, incorporated and existing under the laws
              of India and having its registered office at 7A Kutchery Road,
              Meadow Bank, Darjeeling 734101 (hereinafter referred to as
              "Company")
            </div>
            <div className="card-header">
              <h5>Terms of Use</h5>
            </div>
            <div className="card-body">
              This covers all the terminology that will be used in the rest of
              the document. Your use of the Website and services and tools are
              governed by the following terms and conditions ("Terms of Use") as
              applicable to the Website including the applicable policies that
              are incorporated herein by way of reference. If 'You' transact on
              the Website, You shall be subject to the policies that are
              applicable to the Website for such transaction. By mere use of the
              Website, You shall be contracting with Company and these terms and
              conditions including the policies constitute your binding
              obligations, with the Website. For the purpose of these Terms of
              Use, wherever the context so requires "You" or "User" shall mean
              any natural or legal person who has agreed to become a user of the
              Website by providing Registration Data while registering on the
              Website as Registered User using the computer systems. This
              Website allows the User to surf the Website. The term "We", "Us",
              "Our" shall mean Company.
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
