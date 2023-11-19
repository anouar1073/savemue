import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import proj4 from "proj4";

import parkhaeuse from "./databases/parkhaeuse.json";
import waterwells from "./databases/waterplaces.json";

const images = {
  shelter: require("./assets/shelter.png"),
  drop: require("./assets/drop.png"),
};

var height;
var width;

export default function Map({ emergencyType }) {
  const [egoPosition, setEgoPosition] = useState({
    id: 0,
    latitude: 48.141986,
    longitude: 11.56559,
    title: "My Location",
    iconType: "ego",
  });
  const [targetPosition, setTargetPosition] = useState({
    id: 1,
    latitude: 48.102644,
    longitude: 11.575879,
    title: emergencyType === 0 ? "Shelter" : "Water Fountain",
    iconType: "ego",
  });
  const convertUTMToLatLon = (utmEasting, utmNorthing, utmZone) => {
    const utmProjection = `+proj=utm +zone=${utmZone} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;

    const wgs84Projection = proj4.Proj("WGS84");

    const [longitude, latitude] = proj4(utmProjection, wgs84Projection, [
      utmEasting,
      utmNorthing,
    ]);
    return { latitude, longitude };
  };

  function getClosestWaterPlace(places, point) {
    const [lat1, lon1] = point;

    const toRadians = (degree) => (degree * Math.PI) / 180;
    const haversineDistance = (coords1, coords2) => {
      const [lat2, lon2] = coords2;
      const R = 6371e3; // meters
      const φ1 = toRadians(lat1);
      const φ2 = toRadians(lat2);
      const Δφ = toRadians(lat2 - lat1);
      const Δλ = toRadians(lon2 - lon1);

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    };

    let closestPlace = null;
    let minDistance = Infinity;

    places.forEach((place) => {
      const coordinates = place.geometry.coordinates;
      placeCoords = convertUTMToLatLon(coordinates[0], coordinates[1], 32);
      const distance = haversineDistance(
        [lat1, lon1],
        [placeCoords.latitude, placeCoords.longitude]
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestPlace = place;
      }
    });
    const coordinates = closestPlace.geometry.coordinates;
    closestPlaceCoords = convertUTMToLatLon(coordinates[0], coordinates[1], 32);
    return {
      id: 1,
      latitude: closestPlaceCoords.latitude,
      longitude: closestPlaceCoords.longitude,
      title: emergencyType === 0 ? "Shelter" : "Water Fountain",
      iconType: emergencyType === 0 ? "shelter" : "drop",
    };
  }

  function getClosestParkingPlace(places, point) {
    const [lat1, lon1] = point;

    const toRadians = (degree) => (degree * Math.PI) / 180;
    const haversineDistance = (coords1, coords2) => {
      const [lat2, lon2] = coords2;
      const [lat1, lon1] = coords1;
      const R = 6371e3;
      const phi1 = toRadians(lat1);
      const phi2 = toRadians(lat2);
      const delta_phi = toRadians(lat2 - lat1);
      const delta_lambda = toRadians(lon2 - lon1);

      const a =
        Math.sin(delta_phi / 2) * Math.sin(delta_phi / 2) +
        Math.cos(phi1) *
          Math.cos(phi2) *
          Math.sin(delta_lambda / 2) *
          Math.sin(delta_lambda / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    };

    let closestPlace = null;
    let minDistance = Infinity;

    places.forEach((place) => {
      const placeCoords = [
        parseFloat(place.location.lat),
        parseFloat(place.location.lng),
      ];
      const distance = haversineDistance([lat1, lon1], placeCoords);
      if (distance < minDistance) {
        minDistance = distance;
        closestPlace = place;
      }
    });

    const coordinates = [
      parseFloat(closestPlace.location.lat),
      parseFloat(closestPlace.location.lng),
    ];
    return {
      id: 1,
      latitude: parseFloat(closestPlace.location.lat),
      longitude: parseFloat(closestPlace.location.lng),
      title: "Shelter",
      iconType: "shelter",
    };
  }

  function decodePolyline(encoded) {
    var points = [];
    var index = 0,
      len = encoded.length;
    var lat = 0,
      lng = 0;
    while (index < len) {
      var b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;
      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  }

  const [route, setRoute] = useState([]);

  useEffect(() => {
    let closestPlace;
    if (emergencyType === 0) {
      const places = parkhaeuse.places;
      closestPlace = getClosestParkingPlace(places, [
        egoPosition.latitude,
        egoPosition.longitude,
      ]);
    } else {
      const places = waterwells.features;
      closestPlace = getClosestWaterPlace(places, [
        egoPosition.latitude,
        egoPosition.longitude,
      ]);
    }

    setTargetPosition((prevPosition) => {
      const newPosition = { ...closestPlace };
      return newPosition;
    });
  }, []);

  useEffect(() => {
    const fetchRoute = async (startCoord, endCoord) => {
      const baseUrl = "http://router.project-osrm.org/route/v1";
      const profile = "walking";
      const queryParams = `overview=full`;

      const url = `${baseUrl}/${profile}/${startCoord[0]},${startCoord[1]};${endCoord[0]},${endCoord[1]}?${queryParams}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const routeCoordinates = decodePolyline(data.routes[0].geometry);
        setRoute(routeCoordinates);
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };
    fetchRoute(
      [egoPosition.longitude, egoPosition.latitude],
      [targetPosition.longitude, targetPosition.latitude]
    );
  }, [targetPosition, egoPosition]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: egoPosition.latitude,
          longitude: egoPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapStyle={"mutedStandard"}
      >
        <Marker
          key={egoPosition.id}
          coordinate={{
            latitude: egoPosition.latitude,
            longitude: egoPosition.longitude,
          }}
          title={egoPosition.title}
        />
        <Marker
          key={targetPosition.id}
          coordinate={{
            latitude: targetPosition.latitude,
            longitude: targetPosition.longitude,
          }}
          title={targetPosition.title}
        >
          <Image
            source={images[targetPosition.iconType]}
            style={{ width: 40, height: 40 }}
          />
        </Marker>

        {route.length > 0 && (
          <Polyline coordinates={route} strokeColor="#220" strokeWidth={5} />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 500,
  },
});
