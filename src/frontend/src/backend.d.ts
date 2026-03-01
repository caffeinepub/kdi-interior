import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiryCount(): Promise<bigint>;
    getUnreadCount(): Promise<bigint>;
    markAsRead(inquiryId: bigint, isRead: boolean): Promise<void>;
    submitInquiry(name: string, phone: string, email: string, message: string): Promise<void>;
}
