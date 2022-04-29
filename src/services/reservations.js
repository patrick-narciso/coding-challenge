import client from "./config";

export const getReservations = () => {
  return client.get("/reservations").then(({ data }) => {
    return data;
  });
};
