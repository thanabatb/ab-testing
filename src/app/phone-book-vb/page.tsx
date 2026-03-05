import { PhoneBookScreenTracker } from "@/components/analytics/phone-book-screen-tracker";
import { PhoneBookVersionBScreen } from "@/features/phone-book-vb";

export default function PhoneBookVersionBPage() {
  return (
    <>
      <PhoneBookScreenTracker version="B" screenName="vb_home" markFlowStart />
      <PhoneBookVersionBScreen />
    </>
  );
}
