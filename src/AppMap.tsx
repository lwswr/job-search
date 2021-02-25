import React from "react";
import styled from "styled-components";
import "./index.css";
import { Map, Marker, Point, Overlay } from "pigeon-maps";
import { CustomMarker } from "./App";
import { HoverPopUpComp } from "./HoverPopUpComp";
import { HoverPopUp } from "./appSlice";

const MapContainer = styled.div`
  position: fixed;
  /* left: 25%; */
  width: 120%;
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
  submitIDClick,
  submitIDHover,
  hoverPopUp,
  popUp,
}: {
  points: CustomMarker[];
  center: Point;
  zoom: number;
  submitIDClick: (id: string) => void;
  submitIDHover: (event: boolean, id: string) => void;
  hoverPopUp: HoverPopUp;
  popUp: boolean;
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
              onClick={() => submitIDClick(point.id)}
              onMouseOver={() => submitIDHover(true, point.id)}
              onMouseOut={() => submitIDHover(false, point.id)}
            />
          );
        })}
        {hoverPopUp.isDisplayed || popUp ? (
          <Overlay anchor={hoverPopUp.coords} offset={[120, 100]}>
            <HoverPopUpComp
              title={hoverPopUp.title}
              company={hoverPopUp.company}
            />
          </Overlay>
        ) : null}
      </Map>
    </MapContainer>
  );
};
