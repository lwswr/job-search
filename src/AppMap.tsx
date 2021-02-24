import React from "react";
import styled from "styled-components";
import "./index.css";
import { Map, Marker, Point } from "pigeon-maps";

const MapContainer = styled.div`
  position: fixed;
  left: 20%;
  width: 80%;
  height: 100%;
`;

const TILE_KEY: string = "tLsFLpESk6ikup9Az8ia";

const mapTilerProvider = (x: number, y: number, z: number, dpr: any) => {
  return `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${TILE_KEY}`;
};

export const AppMap = ({
  points,
  center,
  zoom,
}: {
  points: Point[];
  center: Point;
  zoom: number;
}) => {
  return (
    <MapContainer>
      <Map center={center} zoom={zoom} provider={mapTilerProvider}>
        {points.map((point) => {
          return <Marker anchor={point} color="red" />;
        })}
      </Map>
    </MapContainer>
  );
};
