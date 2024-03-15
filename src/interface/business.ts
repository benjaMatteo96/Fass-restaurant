export interface BusinessModel {
  name: string;
  id: string;
  types: string[];
  nationalPhoneNumber: string;
  internationalPhoneNumber: string;
  formattedAddress: string;
  addressComponents: AddressComponent[];
  plusCode: PlusCode;
  location: Location;
  viewport: Viewport;
  rating: number;
  googleMapsUri: string;
  websiteUri: string;
  regularOpeningHours: RegularOpeningHours;
  utcOffsetMinutes: number;
  adrFormatAddress: string;
  businessStatus: string;
  priceLevel: string;
  userRatingCount: number;
  iconMaskBaseUri: string;
  iconBackgroundColor: string;
  displayName: DisplayName;
  primaryTypeDisplayName: PrimaryTypeDisplayName;
  takeout: boolean;
  delivery: boolean;
  dineIn: boolean;
  reservable: boolean;
  servesBreakfast: boolean;
  servesLunch: boolean;
  servesDinner: boolean;
  servesBeer: boolean;
  servesBrunch: boolean;
  servesVegetarianFood: boolean;
  currentOpeningHours: CurrentOpeningHours;
  primaryType: string;
  shortFormattedAddress: string;
  editorialSummary: EditorialSummary;
  reviews: Review[];
  photos?: Photo[];
  outdoorSeating: boolean;
  liveMusic: boolean;
  menuForChildren: boolean;
  servesDessert: boolean;
  servesCoffee: boolean;
  goodForChildren: boolean;
  allowsDogs: boolean;
  restroom: boolean;
  goodForGroups: boolean;
  goodForWatchingSports: boolean;
  paymentOptions: PaymentOptions;
  accessibilityOptions: AccessibilityOptions;
}

export interface AddressComponent {
  longText: string;
  shortText: string;
  types: string[];
  languageCode: string;
}

export interface PlusCode {
  globalCode: string;
  compoundCode: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Viewport {
  low: Low;
  high: High;
}

export interface Low {
  latitude: number;
  longitude: number;
}

export interface High {
  latitude: number;
  longitude: number;
}

export interface RegularOpeningHours {
  openNow: boolean;
  periods: Period[];
  weekdayDescriptions: string[];
}

export interface Period {
  open: Open;
  close: Close;
}

export interface Open {
  day: number;
  hour: number;
  minute: number;
}

export interface Close {
  day: number;
  hour: number;
  minute: number;
}

export interface DisplayName {
  text: string;
  languageCode: string;
}

export interface PrimaryTypeDisplayName {
  text: string;
  languageCode: string;
}

export interface CurrentOpeningHours {
  openNow: boolean;
  periods: Period2[];
  weekdayDescriptions: string[];
}

export interface Period2 {
  open: Open2;
  close: Close2;
}

export interface Open2 {
  day: number;
  hour: number;
  minute: number;
  date: Date;
}

export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface Close2 {
  day: number;
  hour: number;
  minute: number;
  date: Date2;
}

export interface Date2 {
  year: number;
  month: number;
  day: number;
}

export interface EditorialSummary {
  text: string;
  languageCode: string;
}

export interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: Text;
  originalText: OriginalText;
  authorAttribution: AuthorAttribution;
  publishTime: string;
}

export interface Text {
  text: string;
  languageCode: string;
}

export interface OriginalText {
  text: string;
  languageCode: string;
}

export interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface Photo {
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions: AuthorAttribution2[];
}

export interface AuthorAttribution2 {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface PaymentOptions {
  acceptsCreditCards: boolean;
  acceptsDebitCards: boolean;
  acceptsCashOnly: boolean;
  acceptsNfc: boolean;
}

export interface AccessibilityOptions {
  wheelchairAccessibleParking: boolean;
  wheelchairAccessibleSeating: boolean;
}
