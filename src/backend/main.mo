import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compareByTime(a : Inquiry, b : Inquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  let readStatus = Map.empty<Nat, Bool>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      id = nextId;
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };
    inquiries.add(nextId, inquiry);
    readStatus.add(nextId, false);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort(Inquiry.compareByTime);
  };

  public shared ({ caller }) func markAsRead(inquiryId : Nat, isRead : Bool) : async () {
    if (inquiries.containsKey(inquiryId)) {
      readStatus.add(inquiryId, isRead);
    } else {
      Runtime.trap("Inquiry not found");
    };
  };

  public query ({ caller }) func getUnreadCount() : async Nat {
    readStatus.entries().filter(func((_, isRead)) { not isRead }).size();
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    inquiries.size();
  };
};
