import React from "react";
import styled from "styled-components";
import "./index.css";
import { Map, Marker, Point } from "pigeon-maps";
import { CustomMarker } from "./App";

const MapContainer = styled.div`
  position: fixed;
  left: 25%;
  width: 75%;
  height: 100%;
`;

const TILE_KEY: string = "tLsFLpESk6ikup9Az8ia";

const mapTilerProvider = (
  x: number,
  y: number,
  z: number,
  dpr: any
): string => {
  return `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${TILE_KEY}`;
};

export const AppMap = ({
  points,
  center,
  zoom,
  submitID,
}: {
  points: CustomMarker[];
  center: Point;
  zoom: number;
  submitID: (id: string) => void;
}) => {
  return (
    <MapContainer>
      <Map center={center} zoom={zoom} provider={mapTilerProvider}>
        {points.map((point) => {
          return (
            <Marker
              key={point.id}
              anchor={point.coords}
              color="#3875c9"
              onClick={() => submitID(point.id)}
            />
          );
        })}
      </Map>
    </MapContainer>
  );
};
