import React from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { Coordinate } from "ol/coordinate";
import { fromLonLat } from "ol/proj";
import styled from "styled-components";
import "./index.css";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Geometry from "ol/geom/Geometry";
import { Style, Fill, Stroke, Circle } from "ol/style";

const MapContainer = styled.div`
  position: fixed;
  left: 20%;
  width: 80%;
  height: 100%;
`;

export type MapStateProps = {
  center: [number, number] | Coordinate | undefined;
  zoom: number | undefined;
};

export const Map = ({ points }: { points: Feature<Geometry>[] }) => {
  const LONDON = fromLonLat([-0.12755, 51.507222]);
  const FOLKESTONE = fromLonLat([1.169456, 51.081398]);
  const ASHFORD = fromLonLat([0.8732, 51.1352]);

  const initialState: MapStateProps = {
    center: LONDON,
    zoom: 12,
  };
  const [mapState, setMapState] = React.useState<MapStateProps>(initialState);

  console.log(points.length);

  React.useEffect(() => {
    if (points[0]) {
      const map = new OlMap({
        target: undefined,
        view: new OlView({
          center: mapState.center,
          zoom: mapState.zoom,
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
  }, [ASHFORD, FOLKESTONE, LONDON, mapState.center, mapState.zoom, points]);

  return <MapContainer id="map" />;
};
