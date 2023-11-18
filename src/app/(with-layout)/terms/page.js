import BreadCrumb3 from "@/components/shared/BreadCrumb3";
import TermsCover from "../../../assets/servicesBanner/termsCover.jpg";
import dynamic from "next/dynamic";
import Image from "next/image";
import terms1 from "../../../assets/servicesBanner/terms1.jpg";
import terms2 from "../../../assets/servicesBanner/terms8.jpg";
import terms3 from "../../../assets/servicesBanner/terms7.jpg";
import terms4 from "../../../assets/servicesBanner/terms5.jpg";
import terms5 from "../../../assets/servicesBanner/terms4.jpg";
import terms6 from "../../../assets/servicesBanner/terms6.jpg";
const TermsPage = () => {
  return (
    <div>
      <div
        className="hero h-[460px] bg-fixed"
        style={{
          backgroundImage: `url(${TermsCover.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl backdrop-blur-sm bg-white bg-opacity-30 px-24 py-8">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">
              Terms of Service
            </h1>
            <BreadCrumb3 bread={"Terms of Service"} link={"/terms"} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-12 text-justify">
        <h3 className="text-2xl font-bold mb-3">INTELLECTUAL PROPERTY</h3>
        <p>
          The Site and its original content, features and functionality are
          owned by Makeup Artist & Beauty and are protected by international
          copyright, trademark, patent, trade secret and other intellectual
          property or proprietary rights laws.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">
          SECURITY OF BOOKING EVENT
        </h3>
        <p>
          Wedding Bookings The booking of the event is only reserved once the
          client has paid a non-refundable booking fee of £50 to the makeup
          artist. This booking fee covers the cost of the client’s trial and
          provisionally holds the event date. The event date will be held for up
          to 72 hours following completion of the trial at which stage a 50%
          deposit of the remaining Wedding Day cost is required to secure the
          event.
          <br />
          <br />
          Other Bookings The booking of the event is only reserved once the
          client has paid a non-refundable booking fee of 50% of the overall
          event cost. In the case of prom bookings where a trial is being held,
          the prom trial cost will be required as the booking fee. The event
          date will be held up to 72 hours following completion of the trial at
          which stage a 50% deposit of the prom day cost is required to secure
          the event.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">PAYMENT</h3>

        <p>
          Payments can be made in cash or via bank transfer, cheques will not be
          accepted. The non-refundable booking fee of £50 paid by the client is
          taken off the fee. Agreed fees in relation to additional party members
          trials must be paid on the day of trial in Cash or via Bank Transfer
          no less than 24 hours before. The full package fee has to be paid for
          in full two weeks (14 days) before the event. Failure to pay the fee
          within the stated time can result in the event being cancelled by the
          Makeup Artist.
        </p>

        <h3 className="text-2xl font-bold mb-3 mt-10">
          RESPONSIBILITY OF CLIENT
        </h3>
        <p>
          The client shall inform the makeup artist of any issues that may
          affect the use of any equipment or products. This includes but is not
          limited to sensitivities, allergies and medical conditions. The makeup
          artist cannot be held liable for any losses or damage that is incurred
          due to the client’s failure to inform the artist of any known
          condition.
          <br />
          <br />
          The makeup artist reserves the right to refuse service to the client
          or members of the party for, but not limited to, abusive and
          threatening behavior.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-10">
          CANCELLATION / AMANDMENDS
        </h3>
        <p>
          The client can cancel the event any time up to 14 days before the
          event by informing the makeup artist in writing. Any cancellations
          made after this time will be subject to a 50% charge. The makeup
          artist will be under no obligation to refund any money paid up until
          point of cancellation as the booking fee and all deposits are non
          refundable.
          <br />
          <br />
          The client can cancel a trial at any point, however a trial cancelled
          with less than 24 hours notice will be charged for at the agreed rate.
          Cancellations by the makeup artist due to circumstances including, but
          not limited to, problems rendering the performance of their
          obligations and where no other suitable alternative can be given -will
          result in a refund to the client, minus the initial deposit. No
          further compensation will be offered. If the booking is directly
          affected by circumstances beyond the control of the makeup artist
          every possible endeavor to rectify such situations will be made.
          <br />
          <br />
          However no compensation will be offered on the makeup artist’s part.
          The client is strongly advised to take out wedding insurance to cover
          against such situations. Changes to event dates are subject to
          availability and a £50 charge, payable at the time of amendment.
        </p>
      </div>
      <div className="grid grid-cols-6 items-center h-40">
        <div className="h-40">
          <Image
            src={terms1}
            alt="image"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-40">
          <Image
            src={terms2}
            alt="image"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-40">
          <Image
            src={terms3}
            alt="image"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-40">
          <Image
            src={terms4}
            alt="image"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-40">
          <Image
            src={terms5}
            alt="image"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-40">
          <Image
            src={terms6}
            alt="image"
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TermsPage), { ssr: false });
