import Image from 'next/image';
import Logo from '@/public/img/logo.png';

const Footer = () => {
  return (
    <div>
      <div className="flex w-full items-center px-36 py-6">
        <Image className="w-[10%] pb-20" src={Logo} alt="Sacmed Logo" />
        <div className="flex flex-row space-x-24 justify-end">
          <div>
            <div className="font-roboto font-bold pb-2">SacMed Training, LLC</div>
            <div className="font-roboto text-sm">3443 Ramona Ave, Suite 25</div>
            <div className="font-roboto text-sm">Sacramento, CA 95826</div>
            <div className="font-roboto text-sm">Tel: (916) 226-5427</div>
          </div>
          <div>
            <div className="font-roboto font-bold pb-2">Main Office Hours</div>
            <div className="font-roboto text-sm">Monday - Friday</div>
            <div className="font-roboto text-sm">10AM - 3PM</div>
            <div className="font-roboto text-sm">Closed Weekends</div>
          </div>
          <div className="w-[20%]">
            <div className="font-roboto text-sm">
              SacMed Training is approved by the California Department of Public
              Healt as a Nurse Assistant Training School with provider numbers:
              S-1197, S-1218 & S-1544.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-mainTeal"></div>
    </div>
  );
};
export default Footer;
