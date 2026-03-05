import { PhoneBookScreenTracker } from "@/components/analytics/phone-book-screen-tracker";
import { PhoneBookVersionAFavoritesScreen } from "@/features/phone-book-va";
import { favoriteListContacts } from "@/features/phone-book-va/data/phone-book-version-a.data";

export default function PhoneBookVersionAFavoritesPage() {
  return (
    <>
      <PhoneBookScreenTracker
        version="A"
        screenName="va_favorites"
        properties={{
          favorites_count: favoriteListContacts.length
        }}
      />
      <PhoneBookVersionAFavoritesScreen contacts={favoriteListContacts} />
    </>
  );
}
