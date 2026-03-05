import { PhoneBookVersionAFavoritesScreen } from "@/features/phone-book-va";
import { favoriteListContacts } from "@/features/phone-book-va/data/phone-book-version-a.data";

export default function PhoneBookVersionAFavoritesPage() {
  return <PhoneBookVersionAFavoritesScreen contacts={favoriteListContacts} />;
}
