import moment from "moment";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  p {
    margin: 5px 0;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RoomPhoto = styled.img`
  max-height: 400px;
  max-width: 400px;
  @media only screen and (max-width: 768px) {
    max-height: 200px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
`;

const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReservationTime = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

const ReservationList = ({ reservations }) => (
  <>
    {reservations.length > 0 ? (
      <>
        {reservations.map(({ id, start, end, room: { name, imageUrl } }) => (
          <Card key={id}>
            <RoomPhoto src={imageUrl} alt="photo of the reserved room" />
            <ReservationContainer>
              <ReservationTime>
                {`${moment(start).format("LT")} - ${moment(end).format("LT")}`}
              </ReservationTime>
              <p>{moment(start).format("ll")}</p>
            </ReservationContainer>
            <p>{name}</p>
          </Card>
        ))}
      </>
    ) : (
      <Container>
        <Title>No reservations found!</Title>
      </Container>
    )}
  </>
);

export default ReservationList;
