import { API_BASE_URL } from "../config";

export const getClasses = async () => {
  const response = await fetch(`${API_BASE_URL}/api/classes`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getBookings = async () => {
  const response = await fetch(`${API_BASE_URL}/api/bookings`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const bookClass = async (classId) => {
  const response = await fetch(`${API_BASE_URL}/api/book?classId=${classId}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const cancelBooking = async (bookingId) => {
  const response = await fetch(
    `${API_BASE_URL}/api/bookings/cancel?bookingId=${bookingId}`,
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
