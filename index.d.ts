/*tslint:disable:interface-name*/
declare module "react-native-yandex-mapkit" {
    import React, {Component, ClassAttributes} from "react";
    import {StyleProp, ViewStyle, NativeSyntheticEvent, ImageURISource, ImageRequireSource, ViewProps} from "react-native";

    export interface MapViewProps {
        markers: MarkerProps[];
        initialRegion?: Region;
        onMarkerPress?: (
            event: MapEvent<{ action: "marker-press"; id: string }>
        ) => void;
        style?: StyleProp<ViewStyle>;
    }

    export interface MapViewStatic extends Component<MapViewProps> {
    }

    export type MapViewProperties = MapViewProps & ClassAttributes<MapViewStatic>;

    export default class MapView extends Component<MapViewProperties> {
    }

    export interface Region {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    }

    export interface LatLng {
        latitude: number;
        longitude: number;
    }

    export interface Point {
        x: number;
        y: number;
    }

    export interface MapEvent<T = {}>
        extends NativeSyntheticEvent<
            T & {
            coordinate: LatLng;
            position: Point;
        }
            > {}

    export interface MarkerProps {
        identifier?: string;
        icon?: ImageURISource | ImageRequireSource;
        opacity?: number;
        coordinate: LatLng;
        centerOffset?: Point;
        calloutOffset?: Point;
        draggable?: boolean;
        onPress?: () => void;
    }
}
