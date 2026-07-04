export type BookingStatus = 'pending'|'confirmed'|'paid'|'cancelled'|'completed';
export type PaymentMethod = 'card'|'mpesa'|'airtel'|'bank-transfer';
export interface Traveler { firstName:string; lastName:string; email:string; phone:string; nationality:string; dietary?:string; }
export interface Booking {
  id:string; bookingRef:string; userId:string; tourId:string; tourTitle:string; tourDate:Date;
  travelers:Traveler[]; totalAmount:number; currency:string; paymentMethod:PaymentMethod;
  paymentRef?:string; status:BookingStatus; pickupLocation?:string; specialRequests?:string;
  createdAt:any; updatedAt:any;
}
