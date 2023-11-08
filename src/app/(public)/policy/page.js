import BreadCrumb3 from "@/components/shared/BreadCrumb3";
import PrivacyCover from "../../../assets/servicesBanner/privacyCover.jpg";

const PrivacyPage = () => {
  return (
    <div>
      <div
        className="hero h-[460px] bg-fixed"
        style={{
          backgroundImage: `url(${PrivacyCover.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl backdrop-blur-sm bg-white bg-opacity-30 px-24 py-8">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">
              Privacy & Policy
            </h1>
            <BreadCrumb3 bread={"Privacy and Policy"} link={"/policy"} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-12 text-justify">
        <h3 className="text-2xl font-bold mb-3">INTRODUCTION</h3>
        <p>
          Your privacy is important to Butterfly Beauty Salon and we are
          committed to safeguarding the privacy of our website visitors. This
          privacy statement provides information about the personal data that
          Butterfly Beauty Salon (lafemmebeautysalon.com) collects, and the ways
          in which Butterfly Beauty Salon uses that personal data. This policy
          applies where Butterfly Beauty Salon is acting as a data controller
          with respect to the personal data of our website visitors; in other
          words, where we determine the purposes and means of the processing of
          that personal data
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">COOKIES</h3>
        <p>
          We use cookies on our website. Insofar as those cookies are not
          strictly necessary for the provision of our website, we will ask you
          to consent to our use of cookies when you first visit our website. You
          can read our Cookie Policy and change your preferences any time from
          our Cookies Policy page.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">
          USES MADE OF INFORMATION
        </h3>
        <div>
          <p>
            A Touch of Beauty use information held about Customers in the A
            Touch of Beauty may disclose Customers’ personal information to any
            member of A Touch of Beauty’s group, which means A Touch of Beauty’s
            subsidiaries, A Touch of Beauty’s ultimate holding company and its
            subsidiaries following ways:
          </p>{" "}
          <p className="mt-4">
            a) to ensure that content from A Touch of Beauty’s site is presented
            in the most effective manner for Customers and for Customers’
            computers.
          </p>{" "}
          <p className="mt-4">
            b) to provide Customers with information, products or services that
            Customers request from A Touch of Beauty or which A Touch of Beauty
            feel may interest Customers, where Customers have consented to be
            contacted for such purposes.
          </p>{" "}
          <p className="mt-4">
            c) to carry out A Touch of Beauty’s obligations arising from any
            contracts entered into between Customers and A Touch of Beauty and
          </p>{" "}
          <p className="mt-4">
            {" "}
            d) to notify Customers about changes to A Touch of Beauty’s service.
            If Customers are existing customers of A Touch of Beauty, A Touch of
            Beauty will only contact Customers by electronic means (e-mail or
            SMS) with information about goods and services similar to those
            which were the subject of a previous sale to Customers.
          </p>{" "}
          <p className="mt-4">
            If Customers are new customers of A Touch of Beauty, A Touch of
            Beauty will contact Customers by electronic means only if Customers
            have consented to this.
          </p>
        </div>
        <h3 className="text-2xl font-bold mb-3 mt-10">SECURING YOUR DATA</h3>
        <p>
          Butterfly Beauty Salon will take reasonable technical and
          organisational precautions to prevent the loss, misuse or alteration
          of your personal information. Butterfly Beauty Salon will store all
          the personal information you provide on a secure server.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">YOUR RIGHTS</h3>
        <p>
          As a user of this website, you have the right to access, correct or
          ask us to delete any and all information we hold about you, as well as
          the right to make a complaint to a supervisory authority. Should you
          wish your data to be amended or deleted, please contact us.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">
          UPDATING THIS STATEMENT
        </h3>
        <p>
          Butterfly Beauty Salon may update this privacy policy by posting a new
          version on this website. You should check this page occasionally to
          ensure you are familiar with any changes.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">OTHER WEBSITES</h3>
        <p>
          This website contains links to other websites. Butterfly Beauty Salon
          is not responsible for the privacy policies or practices of any third
          party.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">
          CONTACT Butterfly BEAUTY SALON
        </h3>
        <p>
          If you have any questions about this privacy policy or Butterfly
          Beauty Salon’s treatment of your personal information, please contact
          Butterfly Beauty Salon via email or from the Contact Form.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
