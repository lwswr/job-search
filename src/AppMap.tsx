import React from "react";
import styled from "styled-components";
import "./index.css";
import { Map, Marker, Overlay, Point } from "pigeon-maps";

const MapContainer = styled.div`
  position: fixed;
  left: 20%;
  width: 80%;
  height: 100%;
`;

export const AppMap = ({ points }: { points: Point[] }) => {
  return (
    <MapContainer>
      {/* <MapContainer id="map" /> */}
      <Map defaultCenter={[51.507222, -0.12755]} defaultZoom={12}>
        {points.map((point) => {
          return <Marker anchor={point} />;
        })}
      </Map>
    </MapContainer>
  );
};
