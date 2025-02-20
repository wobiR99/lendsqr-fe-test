import { User } from "../utils/interface.types";

const GeneralDetails = ({ userDetails }: { userDetails: User }) => {
  return (
    <section className="p-[30px] rounded-[4px] shadow-lg">
      <div className="flex flex-col gap-[30px] py-7 border-b-[2px]">
        <h3 className="text-base text-[#213F7D] font-medium">
          Personal Information
        </h3>

        <div className="grid sm:grid-cols-5 grid-cols-2 sm:gap-x-[100px] gap-x-4 gap-y-[30px] ">
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">FULL NAME</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.name}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">PHONE NUMBER</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.phoneNumber}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">EMAIL ADDRESS</p>
            <p className="text-base font-medium text-[#545F7D] truncate">
              {userDetails.email}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">BVN</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.bankVerificationNumber}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">GENDER</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.gender}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">MARITAL STATUS</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.maritalStatus}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">CHILDREN</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.children}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">
              TYPE OF RESIDENCE
            </p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.residenceType}
            </p>
          </aside>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] py-7 border-b-[2px]">
        <h3 className="text-base text-[#213F7D] font-medium">
          Education and Employment
        </h3>

        <div className="grid sm:grid-cols-4 grid-cols-2  sm:gap-x-[100px] gap-x-4 gap-y-[30px] ">
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">
              LEVEL OF EDUCATION
            </p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.education}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">
              EMPLOYMENT STATUS{" "}
            </p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.employmentStatus}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">
              SECTOR OF EMPLOYMENT
            </p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.employmentSector}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">
              DURATION OF EMPLOYMENT
            </p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.employmentDuration &&
                Math.ceil(userDetails?.employmentDuration / 12)}{" "}
              years
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">OFFICE EMAIL</p>
            <p className="text-base font-medium text-[#545F7D] truncate">
              {userDetails.officeEmail}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">MONTHLY INCOME</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.monthlyIncome &&
                Math.ceil(userDetails.monthlyIncome)}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">LOAN REPAYMENT</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.loanRepayment}
            </p>
          </aside>
        </div>
      </div>

      <div className="flex flex-col gap-[30px] py-7 border-b-[2px]">
        <h3 className="text-base text-[#213F7D] font-medium">Socials</h3>

        <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-[100px] gap-y-[30px] ">
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">TWITTER</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.twitterUsername}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">FACEBOOK</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.facebookUsername}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">INSTAGRAM</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.instagramUsername}
            </p>
          </aside>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] py-7 ">
        <h3 className="text-base text-[#213F7D] font-medium">Guarantors</h3>

        <div className="grid sm:grid-cols-4 grid-cols-2  sm:gap-x-[100px] gap-x-4 gap-y-[30px] ">
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">FULL NAME</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.guarantorName}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">PHONE NUMBER</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.guarantorPhoneNumber}
            </p>
          </aside>
          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">EMAIL ADDRESS</p>
            <p className="text-base font-medium text-[#545F7D] truncate">
              {userDetails.guarantorEmail}
            </p>
          </aside>

          <aside className="flex flex-col gap-2">
            <p className="text-xs font-medium text-[#545F7D]">RELATIONSHIP</p>
            <p className="text-base font-medium text-[#545F7D]">
              {userDetails.guarantorRelationship}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default GeneralDetails;
