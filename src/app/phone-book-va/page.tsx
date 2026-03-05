import { PhoneBookScreenTracker } from "@/components/analytics/phone-book-screen-tracker";
import { PhoneBookVersionAScreen } from "@/features/phone-book-va";

export default function PhoneBookVersionAPage() {
  return (
    <>
      <PhoneBookScreenTracker version="A" screenName="va_home" markFlowStart />
      <PhoneBookVersionAScreen />
    </>
  );
}
