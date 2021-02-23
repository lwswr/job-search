import React from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import styled from "styled-components";
import "./index.css";
import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Geometry from "ol/geom/Geometry";
import { Style, Fill, Circle } from "ol/style";

const MapContainer = styled.div`
  position: fixed;
  left: 20%;
  width: 80%;
  height: 100%;
`;

export const Map = ({ points }: { points: Feature<Geometry>[] }) => {
  console.log(points);

  React.useEffect(() => {
    if (points[0]) {
      const map = new OlMap({
        target: undefined,
        view: new OlView({
          center: fromLonLat([-0.12755, 51.507222]),
          zoom: 12,
        }),
        layers: [
          new OlLayerTile({
            source: new OlSourceOSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              // displays array of Features
              features: points.map((point) => point),
            }),
            style: new Style({
              image: new Circle({
                radius: 10,
                fill: new Fill({ color: "red" }),
              }),
            }),
          }),
        ],
      });
      map.setTarget("map");
    }
  }, [points]);

  return <MapContainer id="map" />;
};
